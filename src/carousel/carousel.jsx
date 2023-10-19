import "../page/product/article4.css";
import right from "../assets/right.svg";
import left from "../assets/left.svg";
import heart from "../assets/heart.svg";
export function Article4Copy({
  Products4,
  allProduct,
  setallProduct,
  contadorPro,
  setcontadorPro,
  precioProduct,
  setPrecioProduct,
}) {
  function convertToURL(text) {
    text = text.replace(/ /g, "-");
    text = encodeURIComponent(text);
    return text;
  }
  let contador4 = 0;
  let isTransitioning4 = false;
  function onClickBtn4(index4) {
    if (isTransitioning4) return;
    isTransitioning4 = true;

    const flexArticle4Elements = document.querySelectorAll(".flex-article4");

    if (flexArticle4Elements.length > 0) {
      index4 =
        (index4 + flexArticle4Elements.length) % flexArticle4Elements.length;

      const translateX = -index4 * (100 / flexArticle4Elements.length);
      const translateScroll4 = index4 * 100;

      document.querySelector(
        ".scroll4"
      ).style.transform = `translateX(${translateX}%)`;
      document.querySelector(".scroll40").style.width = `${
        100 / flexArticle4Elements.length
      }%`;
      document.getElementById(
        "scroll4"
      ).style.transform = `translateX(${translateScroll4}%)`;

      contador4 = index4;

      if (index4 === 0) {
        document.querySelector(".btn-4-1").style.display = "none";
        document.querySelector(".article4-flex-btn").style.justifyContent =
          "flex-end";
      } else {
        document.querySelector(".btn-4-1").style.display = "flex";
        document.querySelector(".article4-flex-btn").style.justifyContent =
          "space-between";
      }

      console.log(index4);
      setTimeout(() => {
        isTransitioning4 = false;
      }, 200); // Ajusta la duración de la transición según tus necesidades
    }
  }
  function ddd2() {
    if (!isTransitioning4) {
      onClickBtn4(contador4 + 1);
    }
  }
  function ddd4() {
    if (!isTransitioning4) {
      onClickBtn4(contador4 - 1);
    }
  }
  function opacityActiveBnt4() {
    const btn2 = document.querySelector(".btn-4-2");
    const btn1 = document.querySelector(".btn-4-1");

    if (btn2 && btn1) {
      if (btn2.style.opacity == "0%") {
        btn2.style.transition = "all 0.2s ease-in";
        btn2.style.opacity = "0%";
        btn1.style.opacity = "0%";
      } else {
        btn2.style.transition = "all 0.2s ease-in";
        btn1.style.transition = "all 0.2s ease-in";
        btn2.style.opacity = "0%";
        btn1.style.opacity = "0%";
      }
    }
  }

  function opacityLeaveBnt4() {
    const btn2 = document.querySelector(".btn-4-2");
    const btn1 = document.querySelector(".btn-4-1");

    if (btn2 && btn1) {
      if (btn2.style.opacity == "100%") {
        btn2.style.transition = "all 0.2s ease-in";
        btn2.style.opacity = "0%";
        btn1.style.opacity = "0%";
      } else {
        btn2.style.opacity = "100%";
        btn1.style.opacity = "100%";
      }
    }
  }
  function handleClickProduct(product) {
    allProduct.push(product);
    setallProduct(product);
  }
  return (
    <main className="main-article4">
      <h1>COMPLETA TU LOOK</h1>
      <div className="article4-cont">
        <div
          className="article4-flex"
          onMouseEnter={opacityLeaveBnt4}
          onMouseLeave={opacityActiveBnt4}
        >
          <div className="article4-flex-btn">
            <button className="btn-4-1" id="btn-4-1" onClick={() => ddd4()}>
              <img src={right} alt="" />
            </button>
            <button className="btn-4-2" id="btn-4-2" onClick={() => ddd2()}>
              <img src={left} alt="" />
            </button>
          </div>
          <div className="scroll4">
            {Products4.map((product) => (
              <div
                className="flex-article4"
                id="flex-article4"
                key={product.id}
              >
                <div className="heart4">
                  <div>
                    <img src={heart} alt="" />
                  </div>
                </div>
                <a
                  className="article4-a"
                  href={`/product/${convertToURL(product.nombre)}/`}
                  onClick={() => {
                    console.log("Hola")
                    handleClickProduct(product.nombre);
                    localStorage.setItem("guardar", JSON.stringify(product));
                  }}
                >
                  <div className="article4-precio">
                    <p>${product.precio}</p>
                  </div>
                  <img src={product.url} alt="" />
                  <div className="article4-flex-description">
                    <h3 className="article4-title">{product.nombre}</h3>
                    <h4 className="article4-description">
                      {product.descripcion}
                    </h4>
                    <p>{product.envios}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
        <span className="article4-carousel">
          <span className="scroll40" id="scroll4"></span>
        </span>
      </div>
    </main>
  );
}
