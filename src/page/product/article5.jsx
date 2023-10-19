import './article5.css';
import right from '../../assets/right.svg';
import left from '../../assets/left.svg';
import heart from '../../assets/heart.svg';
export function Article5({ Products5, allProduct, setallProduct, contadorPro, setcontadorPro, precioProduct, setPrecioProduct }) {
    function convertToURL(text){
      text = text.replace(/ /g, '-');
      text = encodeURIComponent(text)
      return text;
    }
      let contador5 = 0;
      let isTransitioning5 = false;
      function onClickBtn5(index5) {
        if (isTransitioning5) return;
        isTransitioning5 = true;
        index5 =
          (index5 + document.querySelectorAll("#flex-article5").length) %
          document.querySelectorAll("#flex-article5").length;
        const translateX =
          -index5 * (100 / document.querySelector(".scroll5").children.length);
        const translateScroll5 = index5 * 100;
        document.querySelector(
          ".scroll5"
        ).style.transform = `translateX(${translateX}%)`;
        document.getElementById("scroll5").style.width = `${
          100 / document.querySelector(".scroll5").children.length
        }%`;
        document.getElementById(
          "scroll5"
        ).style.transform = `translateX(${translateScroll5}%)`;
        contador5 = index5;
        if (index5 == 0) {
          document.getElementById("btn-5-1").style.display = "none";
          document.querySelector(".article5-flex-btn").style.justifyContent =
            "flex-end";
        } else {
          document.getElementById("btn-5-1").style.display = "flex";
          document.querySelector(".article5-flex-btn").style.justifyContent =
            "space-between";
        }
        setTimeout(() => {
          isTransitioning5 = false;
        }, 200); // Ajusta la duración de la transición según tus necesidades
      }
      function ddd2() {
        if (!isTransitioning5) {
          onClickBtn5(contador5 + 1);
        }
      }
      function ddd5() {
        if (!isTransitioning5) {
          onClickBtn5(contador5 - 1);
        }
      }
      function opacityActiveBnt5() {
        if ((document.querySelector("#btn-5-2").style.opacity = "0%")) {
          document.querySelector("#btn-5-2").style.opacity = "100%";
          document.querySelector("#btn-5-1").style.opacity = "100%";
        } else {
          document.querySelector("#btn-5-2").style.opacity = "100%";
          document.querySelector("#btn-5-1").style.opacity = "0%";
        }
      }
      function opacityLeaveBnt5() {
        if ((document.querySelector("#btn-5-2").style.opacity = "100%")) {
          document.querySelector("#btn-5-2").style.transition = "all 0.2s ease-in";
          document.querySelector("#btn-5-2").style.opacity = "0%";
          document.querySelector("#btn-5-1").style.opacity = "0%";
        } else {
          document.querySelector("#btn-5-2").style.opacity = "100%";
          document.querySelector("#btn-5-1").style.opacity = "100%";
        }
      }
      return (
        <main className="main-article5">
          <h1>QUIZÁ TAMBIÉN TE GUSTE...</h1>
          <div className="article5-cont">
            <div
              className="article5-flex"
              onMouseEnter={opacityActiveBnt5}
              onMouseLeave={opacityLeaveBnt5}
            >
              <div className="article5-flex-btn">
                <button id="btn-5-1" onClick={() => ddd5()}>
                  <img src={right} alt="" />
                </button>
                <button id="btn-5-2" onClick={() => ddd2()}>
                  <img src={left} alt="" />
                </button>
              </div>
              <div className="scroll5">
                {Products5.map((product) => (
                  <div className="flex-article5" id="flex-article5" key={product.id}>
                    <div className="heart5">
                        <div>
                        <img src={heart} alt="" />
                        </div>
                    </div>
                    <a className="article5-a" href={`/product/${convertToURL(product.nombre)}/`}>
                      <div className="article5-precio">
                        <p>${product.precio}</p>
                      </div>
                      <img src={product.url} alt="" />
                      <div className="article5-flex-description">
                        <h3 className="article5-title">{product.nombre}</h3>
                        <h4 className="article5-description">{product.descripcion}</h4>
                        <p>{product.envios}</p>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <span className="article5-carousel">
              <span id="scroll5"></span>
            </span>
          </div>
        </main>
      );
    }