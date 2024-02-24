import './article4.css';
import right from '../../assets/right.svg';
import left from '../../assets/left.svg';
import heart from "../../assets/heart.svg";
export function Article4({ Products4, allProduct, setallProduct, contadorPro, setcontadorPro, precioProduct, setPrecioProduct }) {
  function convertToURL(text) {
    text = text.replace(/ /g, '-');
    text = encodeURIComponent(text)
    return text;
  }
  let contador4 = 0;
  let isTransitioning4 = false;
  function onClickBtn4(index4) {
    if (isTransitioning4) return;
    isTransitioning4 = true;
    index4 =
      (index4 + document.querySelectorAll("#flex-article4").length) %
      document.querySelectorAll("#flex-article4").length;
    const translateX =
      -index4 * (100 / document.querySelector(".scroll4").children.length);
    const translateScroll4 = index4 * 100;
    document.querySelector(
      ".scroll4"
    ).style.transform = `translateX(${translateX}%)`;
    document.getElementById("scroll4").style.width = `${100 / document.querySelector(".scroll4").children.length
      }%`;
    document.getElementById(
      "scroll4"
    ).style.transform = `translateX(${translateScroll4}%)`;
    contador4 = index4;
    if (index4 == 0) {
      document.getElementById("btn-4-1").style.display = "none";
      document.querySelector(".article4-flex-btn").style.justifyContent =
        "flex-end";
    } else {
      document.getElementById("btn-4-1").style.display = "flex";
      document.querySelector(".article4-flex-btn").style.justifyContent =
        "space-between";
    }
    console.log(index4);
    setTimeout(() => {
      isTransitioning4 = false;
    }, 200); // Ajusta la duración de la transición según tus necesidades
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
    if ((document.querySelector("#btn-4-2").style.opacity = "0%")) {
      document.querySelector("#btn-4-2").style.opacity = "100%";
      document.querySelector("#btn-4-1").style.opacity = "100%";
    } else {
      document.querySelector("#btn-4-2").style.opacity = "100%";
      document.querySelector("#btn-4-1").style.opacity = "0%";
    }
  }
  function opacityLeaveBnt4() {
    if ((document.querySelector("#btn-4-2").style.opacity = "100%")) {
      document.querySelector("#btn-4-2").style.transition = "all 0.2s ease-in";
      document.querySelector("#btn-4-2").style.opacity = "0%";
      document.querySelector("#btn-4-1").style.opacity = "0%";
    } else {
      document.querySelector("#btn-4-2").style.opacity = "100%";
      document.querySelector("#btn-4-1").style.opacity = "100%";
    }
  }
  return (
    <main className="main-article4">
      <h1>COMPLETA TU LOOK</h1>
      <div className="article4-cont">
        <div
          className="article4-flex"
          onMouseEnter={opacityActiveBnt4}
          onMouseLeave={opacityLeaveBnt4}
        >
          <div className="article4-flex-btn">
            <button id="btn-4-1" onClick={() => ddd4()}>
              <img src={right} alt="" />
            </button>
            <button id="btn-4-2" onClick={() => ddd2()}>
              <img src={left} alt="" />
            </button>
          </div>
          <div className="scroll4">
            {Products4.map((product) => (
              <div className="flex-article4" id="flex-article4" key={product.id}>
                <div className="heart4">
                  <div>
                    <img src={heart}/>
                  </div>
                </div>
                <a className="article4-a" href={`/product/${product.id}/$${convertToURL(product.nombre)}/`}>
                  <div className="article4-precio">
                    <p>${product.precio}</p>
                  </div>
                  <img src={product.url} alt="" />
                  <div className="article4-flex-description">
                    <h3 className="article4-title">{product.nombre}</h3>
                    <h4 className="article4-description">{product.descripcion}</h4>
                    <p>{product.envios}</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
        <span className="article4-carousel">
          <span id="scroll4"></span>
        </span>
      </div>
    </main>
  );
}