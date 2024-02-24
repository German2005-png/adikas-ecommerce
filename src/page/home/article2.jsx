import { Link, useNavigate } from 'react-router-dom';
import App from "../../App.jsx";
import Cookies from 'js-cookie';
import heart from "../../assets/heart.svg";
import left from "../../assets/left.svg";
import right from "../../assets/right.svg";
export function Article2({ Products2, allProduct, setallProduct, contadorPro, setcontadorPro, precioProduct, setPrecioProduct, precio, setPrecio }) {
  function convertToURL(text){
    text = text.replace(/ /g, '-');
    text = encodeURIComponent(text)
    return text;
  }
    let contador = 0;
    let isTransitioning = false;
    function onClickBtn(index) {
      if (isTransitioning) return;
      isTransitioning = true;
      index =
        (index + document.querySelectorAll("#flex-article2").length) %
        document.querySelectorAll("#flex-article2").length; // Para garantizar un índice válido en bucle
      const translateX =
        -index * (100 / document.querySelector(".scroll").children.length);
      const translateScroll = index * 100;
      document.querySelector(
        ".scroll"
      ).style.transform = `translateX(${translateX}%)`;
      document.getElementById("scroll2").style.width = `${
        100 / document.querySelector(".scroll").children.length
      }%`;
      document.getElementById(
        "scroll2"
      ).style.transform = `translateX(${translateScroll}%)`;
      contador = index;
      if (index == 0) {
        document.getElementById("btn-2-1").style.display = "none";
        document.querySelector(".article2-flex-btn").style.justifyContent =
          "flex-end";
      } else {
        document.getElementById("btn-2-1").style.display = "flex";
        document.querySelector(".article2-flex-btn").style.justifyContent =
          "space-between";
      }
      console.log(index);
      setTimeout(() => {
        isTransitioning = false;
      }, 200); // Ajusta la duración de la transición según tus necesidades
    }
    function ddd() {
      if (!isTransitioning) {
        onClickBtn(contador + 1);
      }
    }
    function ddd2() {
      if (!isTransitioning) {
        onClickBtn(contador - 1);
      }
    }
    function opacityActiveBnt2() {
      if ((document.querySelector("#btn-2-2").style.opacity = "0%")) {
        document.querySelector("#btn-2-2").style.opacity = "100%";
        document.querySelector("#btn-2-1").style.opacity = "100%";
      } else {
        document.querySelector("#btn-2-2").style.opacity = "100%";
        document.querySelector("#btn-2-1").style.opacity = "0%";
      }
    }
    function opacityLeaveBnt2() {
      if ((document.querySelector("#btn-2-2").style.opacity = "100%")) {
        document.querySelector("#btn-2-2").style.transition = "all 0.2s ease-in";
        document.querySelector("#btn-2-2").style.opacity = "0%";
        document.querySelector("#btn-2-1").style.opacity = "0%";
      } else {
        document.querySelector("#btn-2-2").style.opacity = "100%";
        document.querySelector("#btn-2-1").style.opacity = "100%";
      }
    }
    const navigate = useNavigate();
    return (
      <main className="main-article2">
        <ul className="article2-ul">
          <li className="article2-li">
            <button className="article2-btn black">Novedades</button>
          </li>
          <li className="article2-li">
            <button className="article2-btn">Exclusivo miembros</button>
          </li>
          <li className="article2-li">
            <button className="article2-btn">Colecciones</button>
          </li>
        </ul>
        <div className="article2-cont">
          <div
            className="article2-flex"
            onMouseEnter={opacityActiveBnt2}
            onMouseLeave={opacityLeaveBnt2}
          >
            <div className="article2-flex-btn">
              <button id="btn-2-1" onClick={() => ddd2()}>
                <img src={right} alt="" />
              </button>
              <button id="btn-2-2" onClick={() => ddd()}>
                <img src={left} alt="" />
              </button>
            </div>
            <div className="scroll">
              {Products2.map((product) => (
                <div className="flex-article2" id="flex-article2" key={product.id} onMouseEnter={()=>{
                  localStorage.setItem("guardar", JSON.stringify(product))
                }}>
                  <div className="heart">
                      <div>
                      <img src={heart} alt="" />
                      </div>
                  </div>
                  <a className="article2-a" href={`/product/${product.id}/${convertToURL(product.nombre)}/`}>
                    <div className="article2-precio">
                      <p>${new Intl.NumberFormat('es-ES').format(product.precio)}</p>
                    </div>
                    <img src={product.url} alt="" />
                    <div className="article2-flex-description">
                      <h3 className="article2-title">{product.nombre}</h3>
                      <h4 className="article2-description">{product.descripcion}</h4>
                      <p>{product.envios}</p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
          <span className="article2-carousel">
            <span id="scroll2"></span>
          </span>
        </div>
      </main>
    );
  }