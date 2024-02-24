import { Link, useNavigate } from 'react-router-dom';
import App from "../../App.jsx";
import Cookies from 'js-cookie';
import heart from "../../assets/heart.svg";
import left from "../../assets/left.svg";
import right from "../../assets/right.svg";
export function Article3({ Products3, allProduct, setallProduct, contadorPro, setcontadorPro, precioProduct, setPrecioProduct, precio, setPrecio }) {
  function convertToURL(text){
    text = text.replace(/ /g, '-');
    text = encodeURIComponent(text)
    return text;
  }
    let contador3 = 0;
    let isTransitioning3 = false;
    function onClickBtn(index) {
      if (isTransitioning3) return;
      isTransitioning3 = true;
      index =
        (index + document.querySelectorAll("#flex-article3").length) %
        document.querySelectorAll("#flex-article3").length; // Para garantizar un índice válido en bucle
      const translateX3 =
        -index * (100 / document.querySelector(".scroll3").children.length);
      const translateScroll3 = index * 100;
      document.querySelector(
        ".scroll3"
      ).style.transform = `translateX(${translateX3}%)`;
      document.getElementById("scroll3").style.width = `${
        100 / document.querySelector(".scroll3").children.length
      }%`;
      document.getElementById(
        "scroll3"
      ).style.transform = `translateX(${translateScroll3}%)`;
      contador3 = index;
      if (index == 0) {
        document.getElementById("btn-3-1").style.display = "none";
        document.querySelector(".article3-flex-btn").style.justifyContent =
          "flex-end";
      } else {
        document.getElementById("btn-3-1").style.display = "flex";
        document.querySelector(".article3-flex-btn").style.justifyContent =
          "space-between";
      }
      setTimeout(() => {
        isTransitioning3 = false;
      }, 200); // Ajusta la duración de la transición según tus necesidades
    }
    function ddd3() {
      if (!isTransitioning3) {
        onClickBtn(contador3 + 1);
      }
    }
    function ddd33() {
      if (!isTransitioning3) {
        onClickBtn(contador3 - 1);
      }
    }
    function opacityActiveBnt3() {
      if ((document.querySelector("#btn-3-2").style.opacity = "0%")) {
        document.querySelector("#btn-3-2").style.opacity = "100%";
        document.querySelector("#btn-3-1").style.opacity = "100%";
      } else {
        document.querySelector("#btn-3-2").style.opacity = "100%";
        document.querySelector("#btn-3-1").style.opacity = "0%";
      }
    }
    function opacityLeaveBnt3() {
      if ((document.querySelector("#btn-3-2").style.opacity = "100%")) {
        document.querySelector("#btn-3-2").style.transition = "all 0.2s ease-in";
        document.querySelector("#btn-3-2").style.opacity = "0%";
        document.querySelector("#btn-3-1").style.opacity = "0%";
      } else {
        document.querySelector("#btn-3-2").style.opacity = "100%";
        document.querySelector("#btn-3-1").style.opacity = "100%";
      }
    }
    const navigate = useNavigate();
    return (
      <main className="main-article3">
        <ul className="article3-ul">
          <li className="article3-li">
            <button className="article3-btn black">Lo mejor de adidas</button>
          </li>
        </ul>
        <div className="article3-cont">
          <div
            className="article3-flex"
            onMouseEnter={opacityActiveBnt3}
            onMouseLeave={opacityLeaveBnt3}
          >
            <div className="article3-flex-btn">
              <button id="btn-3-1" onClick={() => ddd33()}>
                <img src={right} alt="" />
              </button>
              <button id="btn-3-2" onClick={() => ddd3()}>
                <img src={left} alt="" />
              </button>
            </div>
            <div className="scroll3">
              {Products3.map((product) => (
                <div className="flex-article3" id="flex-article3" key={product.id} onMouseEnter={()=>{
                  localStorage.setItem("guardar", JSON.stringify(product))
                }}>
                  <div className="heart3">
                      <div>
                      <img src={heart} alt="" />
                      </div>
                  </div>
                  <a className="article3-a" onClick={()=>{
                    localStorage.setItem("guardar", JSON.stringify(product))
                  }} href={`/product/${product.id}/${convertToURL(product.nombre)}/`}>
                    <div className="article3-precio">
                      <p>${new Intl.NumberFormat('es-ES').format(product.precio)}</p>
                    </div>
                    <img src={product.url} alt="" />
                    <div className="article3-flex-description">
                      <h3 className="article3-title">{product.nombre}</h3>
                      <h4 className="article3-description">{product.descripcion}</h4>
                      <p>{product.envios}</p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
          <span className="article3-carousel">
            <span id="scroll3"></span>
          </span>
        </div>
      </main>
    );
  }