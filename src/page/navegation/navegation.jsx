import { useState, useRef, useEffect } from "react";
import { Mujer } from "../navegation/mujer.jsx";
import { Hombre } from "./hombre.jsx";
import { Niños } from "./niños.jsx";
import buttom from "../../assets/buttom.svg";
import adidas1 from "../../assets/adidas1.svg";
import adidas2 from "../../assets/adidas2.svg";
import submit from "../../assets/submit.svg";
import cartBtn from "../../assets/cartBtn.svg";
import heart from "../../assets/heart.svg";
import burger from "../../assets/burger.svg";
import profile from "../../assets/profile.svg";
export function Navegation({
  allProduct,
  setallProduct,
  contadorPro,
  precioProduct,
  setPrecioProduct,
}) {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    function handleScroll() {
      const currentScrollPos = window.pageYOffset;
      const scrollingUp = prevScrollPos > currentScrollPos;
      setVisible(scrollingUp);
      setPrevScrollPos(currentScrollPos);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const navStyle = {
    transition: "transform 0.3s ease-in-out",
  };
  const [navCatMujer, setNavCatMujer] = useState(false);
  const [navCatHombre, setNavCatHombre] = useState(false);
  const [navCatNiños, setNavCatNiños] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth <= 959);
  useEffect(() => {
    function handleResize() {
      setIsLargeScreen(window.innerWidth <= 959);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
    <div></div>
    <div className={`navegation-content ${visible ? "visible" : ""}`} style={navStyle}>
      <div className="fairPrices">
        <button>
          PRECIOS JUSTOS
          <img src={buttom} alt="" />
        </button>
      </div>
      <ul className="nav-help-cont">
        <li className="nav-help-li">
          <a className="nav-help-a" href="">
            ayuda
          </a>
        </li>
        <li className="nav-help-li">
          <a className="nav-help-a" href="">
            cambios y devoluciones
          </a>
        </li>
        <li className="nav-help-li">
          <a className="nav-help-a" href="">
            seguimiento de pedidos
          </a>
        </li>
        <li className="nav-help-li">
          <a className="nav-help-a" href="">
            unite al club
          </a>
        </li>
      </ul>
      <nav className="navegation">
        {isLargeScreen ? (
          <>
            <div className="nav-flex-query">
              <button className="nav-btn-burger" onClick={()=>{
                console.log("click")
              }}>
                <img src={burger} alt="" />
              </button>
              <a className="nav-a-end" href="">
                <span>0</span>
                <img src={heart} alt="" />
              </a>
            </div>
          </>
        ) : (
          <>
            <a className="nav-logo" href="/">
              <img src={adidas1} alt="" />
            </a>
          </>
        )}
        {isLargeScreen ? (
          <>
            <a className="nav-logo" href="/">
              <img src={adidas1} alt="" />
            </a>
          </>
        ) : (
          <>
            <ul
              className="nav-ul-a"
              onMouseLeave={() => {
                // document.getElementById("nav-li-center556").style.borderBottom = "3px solid transparent"
                setNavCatMujer(false);
                setNavCatHombre(false);
              }}
            >
              <li
                className="nav-li-center"
                id="nav-li-center556"
                onMouseLeave={() => {
                  document.getElementById(
                    "nav-li-center556"
                  ).style.borderBottom = "3px solid transparent";
                }}
                onMouseEnter={() => {
                  setNavCatMujer(true);
                }}
              >
                <a
                  className="nav-a-center weight"
                  title="MUJER"
                  href=""
                  onMouseEnter={() => {
                    document.getElementById(
                      "nav-li-center556"
                    ).style.borderBottom = "3px solid";
                    setNavCatMujer(true);
                  }}
                >
                  MUJER
                </a>
              </li>
              <li
                className="nav-li-center"
                id="nav-li-center500"
                onMouseEnter={() => {
                  setNavCatHombre(true);
                  document.getElementById(
                    "nav-li-center500"
                  ).style.borderBottom = "3px solid";
                  document.getElementById(
                    "nav-li-center556"
                  ).style.borderBottom = "3px solid transparent";
                  setNavCatMujer(false);
                }}
                onMouseLeave={() => {
                  setNavCatHombre(false);
                  document.getElementById(
                    "nav-li-center500"
                  ).style.borderBottom = "3px solid transparent";
                }}
              >
                <a className="nav-a-center weight" title="HOMBRES" href="">
                  HOMBRES
                </a>
              </li>
              <li
                className="nav-li-center"
                id="nav-li-center510"
                onMouseLeave={() => {
                  document.getElementById(
                    "nav-li-center510"
                  ).style.borderBottom = "3px solid transparent";
                  setNavCatNiños(false);
                }}
                onMouseEnter={() => {
                  document.getElementById(
                    "nav-li-center510"
                  ).style.borderBottom = "3px solid";
                  setNavCatNiños(true);
                  document.getElementById(
                    "nav-li-center556"
                  ).style.borderBottom = "3px solid transparent";
                  setNavCatMujer(false);
                }}
              >
                <a className="nav-a-center weight" title="NIÑOS" href="">
                  NIÑOS
                </a>
              </li>
              <li
                className="nav-li-center"
                onMouseEnter={() => {
                  document.getElementById(
                    "nav-li-center556"
                  ).style.borderBottom = "3px solid transparent";
                  setNavCatMujer(false);
                }}
              >
                <a className="nav-a-center" title="DEPORTES" href="">
                  DEPORTE
                </a>
              </li>
              <li
                className="nav-li-center"
                onMouseEnter={() => {
                  document.getElementById(
                    "nav-li-center556"
                  ).style.borderBottom = "3px solid transparent";
                  setNavCatMujer(false);
                }}
              >
                <a className="nav-a-center" title="MUNDO ADIDAS" href="">
                  MUNDO ADIDAS
                </a>
              </li>
            </ul>
          </>
        )}
        <ul className="nav-ul-end">
          {isLargeScreen ? (
            <>
              <li className="nav-li-end">
                <a className="nav-a-end" href="">
                  <img src={profile} alt="" />
                </a>
              </li>
              <li className="nav-li-end">
                <button className="nav-submit-end">
                  <img src={submit} alt="" />
                </button>
              </li>
              <li className="nav-li-end">
                <a className="nav-a-end" href="/cart">
                {localStorage.getItem("cartItems") && !JSON.parse(localStorage.getItem("cartItems")).length ? (
                    ""
                  ) : (
                    <span>{JSON.parse(localStorage.getItem("cartItems")).length}</span>
                  )}
                  <img src={cartBtn} alt="" />
                </a>
              </li>
            </>
          ) : (
            <>
              <li className="nav-li-end">
                <div className="nav-flex-search-end">
                  <input
                    className="nav-search-end"
                    type="text"
                    placeholder="Buscar"
                  />
                  <button className="nav-submit-end">
                    <img src={submit} alt="" />
                  </button>
                </div>
              </li>
              <li className="nav-li-end">
                <a className="nav-a-end" href="">
                  <img src={profile} alt="" />
                </a>
              </li>
              <li className="nav-li-end" id="hearts">
                <a className="nav-a-end" href="">
                  <img src={heart} alt="" />
                </a>
              </li>
              <li className="nav-li-end">
                <a className="nav-a-end" href="/cart">
                {localStorage.getItem("cartItems") && !JSON.parse(localStorage.getItem("cartItems")).length ? (
                    ""
                  ) : (
                    <span>{JSON.parse(localStorage.getItem("cartItems")).length}</span>
                  )}
                  <img src={cartBtn} alt="" />
                </a>
              </li>
            </>
          )}
        </ul>
      </nav>
      <Mujer CategoryMujer={navCatMujer} SetCategoryMujer={setNavCatMujer} />
      <Hombre
        CategoryHombre={navCatHombre}
        SetCategoryHombre={setNavCatHombre}
      />
      <Niños CategoryNiños={navCatNiños} SetCategoryNiños={setNavCatNiños} />
    </div>
    </>
  );
}
