import { Navegation } from "../navegation/navegation.jsx";
import { Footer } from "../home/footer.jsx";
import rightarrow from "../../assets/rightarrow.svg";
import x from "../../assets/x.svg";
import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";
import "./cart.css";
export function Cart({
  ProductCart,
  allProduct,
  contadorPro,
  precio,
  setPrecio,
  addToCart,
  setallProduct,
}) {
  let datosCart = JSON.parse(
    localStorage.getItem(`cart${localStorage.getItem("cartContador1")}`)
  );
  const datosCart2 = JSON.parse(localStorage.getItem("allProducts"));
  const [selectValue, setSelectValue] = useState("1");
  function convertToURL(text) {
    text = text.replace(/ /g, "-");
    text = encodeURIComponent(text);
    return text;
  }
  const handleSelectChange = (event) => {
    const newValue = event.target.value;
    setSelectValue(newValue);
    if (newValue === "2") {
      datosCart.precio = datosCart.precio * 2;
      alert(datosCart.precio);
    }
  };
  const [sizeCart, setsizeCart] = useState(false);
  useEffect(() => {
    function handleSizeCart() {
      if (window.innerWidth <= 959) {
        setsizeCart(true);
      } else {
        setsizeCart(false);
      }
    }
    handleSizeCart();
    window.addEventListener("resize", handleSizeCart);
    return () => {
      window.removeEventListener("resize", handleSizeCart);
    };
  }, []);
  return (
    <>
      <Navegation contadorPro={contadorPro} />
      {!sizeCart ? (
        <>
          <div className="flex-cart">
            {allProduct.length ? (
              <>
                <div className="header-cart">
                  <div className="content1-cart">
                    <div className="flex-content1">
                      <h1 className="cart-title">TU CARRITO</h1>
                      <p>
                        TOTAL{" "}
                        {`(${localStorage.getItem("cartContador1")} productos)`}{" "}
                        <strong>0</strong>
                      </p>
                      <p>
                        Los artículos en tu carrito no están reservados. Terminá
                        el proceso de compra ahora para hacerte con ellos.
                      </p>
                    </div>
                    {allProduct.map((items) => (
                      <div style={{ marginBottom: "30px" }}>
                        <article className="article-flex" id="articles">
                          <a
                            className="article-title-cart"
                            href={`/product/${convertToURL(items.nombre)}/`}
                            onClick={() =>
                              localStorage.setItem(
                                "guardar",
                                JSON.stringify(items)
                              )
                            }
                          >
                            <img src={items.url} alt="product" />
                          </a>
                          <div>
                            <div className="flex-article-description">
                              <div className="article-flex-description">
                                <a
                                  className="article-description-title"
                                  href={`/product/${convertToURL(
                                    items.nombre
                                  )}/`}
                                  onClick={() =>
                                    localStorage.setItem(
                                      "guardar",
                                      JSON.stringify(items)
                                    )
                                  }
                                >
                                  <span>{items.nombre}</span>
                                </a>
                                <p className="article-description-precio">
                                  ${items.precio}
                                </p>
                                <button
                                  className="article-description-x"
                                  onClick={() => {
                                    allProduct = allProduct.filter(
                                      (eliminar) => eliminar !== items
                                    );
                                    setallProduct(allProduct);
                                    localStorage.setItem(
                                      "cartContador1",
                                      localStorage.getItem("cartContador1") - 1
                                    );
                                  }}
                                >
                                  <img src={x} />
                                </button>
                              </div>
                              <p className="cart-size">TAMAÑO: M</p>
                              <select
                                name="choose-contador-product"
                                id={`contador-product-${items.id}`}
                                className="choose-contador-product"
                                value={selectValue}
                                onChange={handleSelectChange}
                              >
                                {[1, 2, 3, 4, 5].map((num) => (
                                  <option value={num}>{num}</option>
                                ))}
                              </select>
                            </div>
                          </div>
                        </article>
                      </div>
                    ))}
                  </div>
                  <div className="content2-cart">
                    <button className="content2-btn-cart ll l2">
                      IR A PAGAR
                      <img src={rightarrow} alt="" />
                    </button>
                    <div className="order-summary">
                      <h3>RESUMEN DEL PEDIDO</h3>
                      <div className="order-summary-products">
                        <p>{`${localStorage.getItem(
                          "cartContador1"
                        )} Productos}`}</p>
                        <p>{`$ ${`0`}`}</p>
                      </div>
                      <div className="order-summary-send">
                        <p>Entrega</p>
                        <p>Gratis</p>
                      </div>
                      <div className="order-summary-total">
                        <h3>Total</h3>
                        <h3>{`$ ${`0`}`}</h3>
                      </div>
                    </div>
                    <div className="promotional-code">
                      <strong>USÁ UN CÓDIGO PROMOCIONAL</strong>
                    </div>
                    <div className="choose-pay">
                      <p>OPCIONES DE PAGO</p>
                      <div>
                        <img
                          src="https://www.adidas.com.ar/static/checkout/react/59702fa/assets/img/accepted-payment-methods/icon-adidas-american-express.svg"
                          alt=""
                        />
                        <img
                          src="https://www.adidas.com.ar/static/checkout/react/59702fa/assets/img/accepted-payment-methods/icon-adidas-mastercard.svg"
                          alt=""
                        />
                        <img
                          src="https://www.adidas.com.ar/static/checkout/react/59702fa/assets/img/accepted-payment-methods/icon-adidas-discover.svg"
                          alt=""
                        />
                        <img
                          src="https://www.adidas.com.ar/static/checkout/react/59702fa/assets/img/accepted-payment-methods/icon-adidas-visa.svg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="cart">
                  <h1 className="cart-title">EL CARRITO ESTÁ VACÍO</h1>
                  <p className="cart-description">
                    Una vez que añadas algo a tu carrito, aparecerá acá. ¿Listo
                    para empezar?
                  </p>
                  <button className="cart-btn ee">
                    Empezar <img src={rightarrow} />
                  </button>
                  <p className="choose-pay">OPCIONES DE PAGO</p>
                </div>
                <img
                  className="cart-img"
                  src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/esAR/Images/logosar29jun23-d_tcm216-1038617.png"
                  alt=""
                />
              </>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="flex-cart-small">
            <div className="flex-content1">
              <h1 className="cart-title">TU CARRITO</h1>
              <p>
                TOTAL {`(${localStorage.getItem("cartContador1")} productos)`}{" "}
                <strong>0</strong>
              </p>
              <p>
                Los artículos en tu carrito no están reservados. Terminá el
                proceso de compra ahora para hacerte con ellos.
              </p>
            </div>
            {allProduct.map((items) => (
              <div style={{ marginBottom: "30px" }}>
                <article className="article-flex" id="articles">
                  <a
                    className="article-title-cart"
                    href={`/product/${convertToURL(items.nombre)}/`}
                    onClick={() =>
                      localStorage.setItem("guardar", JSON.stringify(items))
                    }
                  >
                    <img src={items.url} alt="product" />
                  </a>
                  <div>
                    <div className="flex-article-description">
                      <div className="article-flex-description">
                        <a
                          className="article-description-title"
                          href={`/product/${convertToURL(items.nombre)}/`}
                          onClick={() =>
                            localStorage.setItem(
                              "guardar",
                              JSON.stringify(items)
                            )
                          }
                        >
                          <span>{items.nombre}</span>
                        </a>
                        <p className="article-description-precio">
                          ${items.precio}
                        </p>
                        <button
                          className="article-description-x"
                          onClick={() => {
                            allProduct = allProduct.filter(
                              (eliminar) => eliminar !== items
                            );
                            setallProduct(allProduct);
                            localStorage.setItem(
                              "cartContador1",
                              localStorage.getItem("cartContador1") - 1
                            );
                          }}
                        >
                          <img src={x} />
                        </button>
                      </div>
                      <p className="cart-size">TAMAÑO: M</p>
                      <select
                        name="choose-contador-product"
                        id={`contador-product-${items.id}`}
                        className="choose-contador-product"
                        value={selectValue}
                        onChange={handleSelectChange}
                      >
                        {[1, 2, 3, 4, 5].map((num) => (
                          <option value={num}>{num}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </article>
              </div>
            ))}
            <div className="flex-promotional-code">
              <div className="promotional-code">
                <strong>USÁ UN CÓDIGO PROMOCIONAL</strong>
              </div>
            </div>
            <div className="order-summary">
              <h3>RESUMEN DEL PEDIDO</h3>
              <div className="order-summary-products">
                <p>{`${localStorage.getItem("cartContador1")} Productos}`}</p>
                <p>{`$ ${`0`}`}</p>
              </div>
              <div className="order-summary-send">
                <p>Entrega</p>
                <p>Gratis</p>
              </div>
              <div className="order-summary-total">
                <h3>Total</h3>
                <h3>{`$ ${`0`}`}</h3>
              </div>
            </div>
            <div className="flex-cart-btn-small">
              <button className="content2-btn-cart ll l2">
                IR A PAGAR
                <img src={rightarrow} alt="" />
              </button>
            </div>
          </div>
        </>
      )}
      <Footer />
    </>
  );
}
