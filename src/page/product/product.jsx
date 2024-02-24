import { json, useParams } from "react-router-dom";
import { Navegation } from "../navegation/navegation.jsx";
import { Discount } from "../home/discount.jsx";
import { Category } from "../home/category.jsx";
import { Footer } from "../home/footer.jsx";
import { Article2 } from "../home/article2.jsx";
import { article2 } from "../../article2.json";
import { Article4 } from "./article4.jsx";
import { Article5 } from "./article5.jsx";
import React from "react";
import StarIcon from "../../assets/star.svg";
import Delivery from "../../assets/delivery.svg";
import Cart from "../../assets/cart.svg";
import heart from "../../assets/heart.svg";
import rightarrow from "../../assets/rightarrow.svg";
import guiadetalles from "../../assets/guiadetalles.svg";
import { Article4Copy } from "../../carousel/carousel.jsx";
import "./product.css";
import crazyrush1 from "../../crazyrush1.json";
import crazyrush2 from "../../crazyrush2.json";
import forum from "../../forum.json";
import Cookies from "js-cookie";
import { useState, useRef , useEffect} from "react";
export function Product({
  contadorPro,
  setcontadorPro,
  addToCart,
  product,
  selectedProduct,
  precio,
  setPrecio,
  allProduct,
  setallProduct
}) {
  // const { id, nombre, url, url2, url3, url4, precio, descripcion } =
  //   useParams();
  const [sizeProduct, setsizeProduct] = useState(false);
  function convertToURL(text) {
    text = text.replaceAll("-", " ");
    // document.getElementById("navegation-content").style.position = "relative";
    return text;
  }
  function convertToURL2(text) {
    text = text.replaceAll(" ", "-");
    text = text.replaceAll(".", "");
    text = encodeURIComponent(text)
    // document.getElementById("navegation-content").style.position = "relative";
    return text;
  }
  let item = decodeURIComponent(location.pathname).replace("/product/", "")
  item = item.endsWith("/") ? item.slice(0, -1).replaceAll("-", " "): item.replaceAll("-", " ")
  let itemId = parseInt(item)
  let itemName = item.replace(itemId + "/", "")
  console.log(itemName)
  const datosRecuperados = article2.find((value)=> value.id == itemId) || forum.forum.find((value)=> value.id == itemId) || crazyrush1.crazyrush1.find((value)=> value.id == itemId) || crazyrush2.crazyrush2.find((value)=> value.id == itemId);
  let bol = article2.find((i)=> i.nombre == itemName)
  console.log(datosRecuperados.nombre)
  if(itemName == datosRecuperados.nombre.replace(".", "")){
    console.log("Es igual")
  }else{
    console.log("No es igual")
    location.pathname = `/product/${datosRecuperados.id}/${convertToURL2(datosRecuperados.nombre)}`
  }
  const [selectedTalla, setSelectedTalla] = useState("");
  const tallas = ["XS", "S", "M", "L", "XL", "2XL", "3XL"];
  const handleTallaClick = (talla) => {
    setSelectedTalla(talla);
  };
  useEffect(()=>{
    function handleSize(){
      if(window.innerWidth <= 959){
        setsizeProduct(true);
      }else{
        setsizeProduct(false)
      }
    }
    handleSize();
    window.addEventListener("resize", handleSize);
    return ()=> {
      window.removeEventListener("resize", handleSize);
    }
  },[])
  return (
    <>
      <Navegation contadorPro={contadorPro} />
      {!sizeProduct ? (
        <>
          <div className="content-product">
        <div className="flex-content-product">
          <div className="flex-product">
            <div className="product-flex-img">
              <img
                className="product-img b1"
                src={datosRecuperados.url2}
                alt=""
              />
              <img
                className="product-img b2"
                src={datosRecuperados.url3}
                alt=""
              />
              <div className="product-img-flex">
                <img
                  className="product-img"
                  src={datosRecuperados.url4}
                  alt=""
                />
              </div>
            </div>
            <Article4Copy Products4={article2} />
            <Article5 Products5={article2} />
          </div>
          <aside className="ddd">
            <div className="content-product-description">
              <div className="flex-product-description">
                <p>{datosRecuperados.descripcion}</p>
                <div className="product-star">
                  <div>
                    <img src={StarIcon} alt="" />
                    <img src={StarIcon} alt="" />
                    <img src={StarIcon} alt="" />
                    <img src={StarIcon} alt="" />
                    <img src={StarIcon} alt="" />
                  </div>
                  <span>56</span>
                </div>
              </div>
              <div className="product-flex-title">
                <h1 className="product-title">
                  {convertToURL(datosRecuperados.nombre)}
                </h1>
              </div>
              <div className="product-flex-precio">
                <span title={new Intl.NumberFormat('es-ES').format(datosRecuperados.precio)}>${new Intl.NumberFormat('es-ES').format(datosRecuperados.precio)}</span>
              </div>
              <div className="product-flex-discount">
                <h4>NO APLICAN CAMBIOS, DEVOLUCIONES Y DESCUENTOS</h4>
                <p>
                  Si este artículo es personalizado, no entra en nuestra
                  política de cambios y devoluciones. Además no aplica ningún
                  descuento.
                </p>
                <a href="">Conoce nuestra política de cambios y devoluciones</a>
              </div>
              <div className="product-flex-talles">
                <h4>Talles</h4>
                <ul className="product-ul-talles">
                  {tallas.map((talla) => (
                    <li key={talla} className="product-li-talles">
                      <button
                        className={`product-buttom-talles ${
                          selectedTalla === talla ? "black-white" : ""
                        }`}
                        onClick={() => handleTallaClick(talla)}
                      >
                        {talla}
                      </button>
                    </li>
                  ))}
                </ul>
                <button className="product-guia-btn">
                  <img src={guiadetalles} alt="" />
                  Guía de talles
                </button>
              </div>
              <div className="flex-product-btn-cart">
                <button
                  className="product-btn-cart ll l2"
                  onClick={() => {
                    setcontadorPro(contadorPro + 1);
                    // Recupera el valor actual del contador del almacenamiento local
                    const storedCount = parseInt(localStorage.getItem("cartContador1"), 10) || 0;
                     // Incrementa el contador
                    const newCount = storedCount + 1;
                    // Almacena el nuevo valor en el almacenamiento local
                    localStorage.setItem("cartContador1", newCount);
                    // Actualiza la variable contadorPro en tu estado local
                    setcontadorPro(newCount);
                    addToCart(datosRecuperados)
                    console.log("allProduct", allProduct)
                    // if(localStorage.getItem(`cart${newCount}`) == datosRecuperados.id){

                    // }
                    console.log("datosRecuperados: ",datosRecuperados);
                  }}
                >
                  AÑADIR AL CARRITO <img src={rightarrow} alt="" />
                </button>
                <button className="product-btn-heart">
                  <img src={heart} alt="" />
                </button>
              </div>
              <div className="product-footer">
                <div className="aside-footer">
                  <img src={Delivery} alt="" />
                  <button className="product-footer-aside">
                    ENVÍO GRATIS A PARTIR DE ${new Intl.NumberFormat('es-ES').format(datosRecuperados.precio)}
                  </button>
                </div>
                <div className="aside-footer">
                  <img src={Cart} alt="" />
                  <button className="product-footer-aside">
                    DEVOLUCIONES GRATIS ¿NO ES TU TALLE? PODÉS DEVOLVERLO EN UN
                    PLAZO DE 60 DÍAS
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
        </>
      ) : (
        <>
          <div className="content-product-small">
            <div className="product-title-small">
              <ul className="product-ul-category-small">
                <li className="product-li-category-small">
                  <a className="product-a-category-small" href="">Inicio</a>
                </li>/
                <li className="product-li-category-small">
                  <a className="product-a-category-small" href="">Hombre</a>
                </li>/
                <li className="product-li-category-small">
                  <a className="product-a-category-small" href="">Ropa</a>
                </li>
              </ul>
              <ul className="product-star-small">
                <button className="product-btn-star-small">
                  <li className="product-li-btn-star-small">
                    <img className="product-img-star-small" src={StarIcon} alt="estrella" />
                    </li>
                  <li className="product-li-btn-star-small">
                    <img className="product-img-star-small" src={StarIcon} alt="estrella" />
                    </li>
                  <li className="product-li-btn-star-small">
                    <img className="product-img-star-small" src={StarIcon} alt="estrella" />
                    </li>
                  <li className="product-li-btn-star-small">
                    <img className="product-img-star-small" src={StarIcon} alt="estrella" />
                    </li>
                  <li className="product-li-btn-small">
                    <img className="product-img-star-small" src={StarIcon} alt="estrella" />
                    </li>
                  <li className="product-li-btn-small">
                    <span className="product-span-small" title="78">78</span>
                  </li>
                </button>
              </ul>
            </div>
            <h1 className="product-title-small" title={datosRecuperados.nombre}>{datosRecuperados.nombre}</h1>
            <strong className="product-precio-small" title={new Intl.NumberFormat('es-ES').format(datosRecuperados.precio)}>${new Intl.NumberFormat('es-ES').format(datosRecuperados.precio)}</strong>
            <img className="product-imagen-small" src={datosRecuperados.url2} alt="" />
            <div className="product-description1-small">
              <h3>NO APLICAN CAMBIOS, DEVOLUCIONES Y DESCUENTOS</h3>
              <p>Si este artículo es personalizado, no entra en nuestra política de cambios y devoluciones. Además no aplica ningún descuento.</p>
              <span>Conoce nuestra política de cambios y devoluciones</span>
            </div>
            <div className="product-talles-small">
              <h3 className="product-title-talles-small">Talles</h3>
              <ul className="product-ul-talles">
                  {tallas.map((talla) => (
                    <li key={talla} className="product-li-talles">
                      <button
                        className={`product-buttom-talles ${
                          selectedTalla === talla ? "black-white" : ""
                        }`}
                        onClick={() => handleTallaClick(talla)}
                      >
                        {talla}
                      </button>
                    </li>
                  ))}
                </ul>
                <button className="product-guia-btn">
                  <img src={guiadetalles} alt="" />
                  Guía de talles
                </button>
            </div>
            <div className="product-btn-cart-small">
            <div className="flex-product-btn-cart">
                <button
                  className="product-btn-cart ll l2"
                  onClick={() => {
                    setcontadorPro(contadorPro + 1);
                    // Recupera el valor actual del contador del almacenamiento local
                    const storedCount = parseInt(localStorage.getItem("cartContador1"), 10) || 0;
                     // Incrementa el contador
                    const newCount = storedCount + 1;
                    // Almacena el nuevo valor en el almacenamiento local
                    localStorage.setItem("cartContador1", newCount);
                    // Actualiza la variable contadorPro en tu estado local
                    setcontadorPro(newCount);
                    addToCart(datosRecuperados)
                    console.log("allProduct", allProduct)
                    // if(localStorage.getItem(`cart${newCount}`) == datosRecuperados.id){

                    // }
                    console.log("datosRecuperados: ",datosRecuperados);
                  }}
                >
                  <span>AÑADIR AL CARRITO</span> <img src={rightarrow} alt="" />
                </button>
                <button className="product-btn-heart">
                  <img src={heart} alt="" />
                </button>
            </div>
            <div className="aside-footer">
                  <img src={Delivery} alt="" />
                  <button className="product-footer-aside">
                    ENVÍO GRATIS A PARTIR DE ${new Intl.NumberFormat('es-ES').format(datosRecuperados.precio)}
                  </button>
                </div>
                <div className="aside-footer">
                  <img src={Cart} alt="" />
                  <button className="product-footer-aside">
                    DEVOLUCIONES GRATIS ¿NO ES TU TALLE? PODÉS DEVOLVERLO EN UN
                    PLAZO DE 60 DÍAS
                  </button>
                </div>
            </div>
            <Article4Copy Products4={article2} />
            <Article5 Products5={article2} />
          </div>
        </>
      )}
      <Discount />
      <Category />
      <Footer />
    </>
  );
}
