import { useState, useRef, useEffect } from "react";
import {Navegation} from "../navegation/navegation.jsx";
import { Content1 } from "../home/header.jsx";
import { Aside } from "../home/aside.jsx";
import { Advertising } from "../home/advertising.jsx";
import { Article2 } from "../home/article2.jsx";
import { PopularNow } from "../home/popularnow.jsx";
import { Article3 } from "../home/article3.jsx";
import { History } from "./history.jsx";
import { Discount } from "./discount.jsx";
import { Category } from "./category.jsx";
import { Footer } from "./footer.jsx";
import {article2} from "../../article2.json"
import "../../App.css";
export function Home({contadorPro, setcontadorPro}) {
  const [onSearchCont, setonSearchCont] = useState(false);
  const [leep, setLeep] = useState(null);
  const componenteRef = useRef();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (componenteRef.current && !componenteRef.current.contains(event.target)) {
        setonSearchCont(false);
        console.log(event)
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  return (
    <>
      <Navegation  Products2={article2} contadorPro={contadorPro} onSearchCont={onSearchCont} setonSearchCont={setonSearchCont} leep={leep} setLeep={setLeep}/>
      {onSearchCont ? (
        <>
        <div className="cont-search-value" ref={componenteRef}>
          <p>{leep}</p>
        </div>
        </>
      ): ""}
      <Content1 contadorPro={contadorPro} setcontadorPro={setcontadorPro} />
      <Aside contadorPro={contadorPro} setcontadorPro={setcontadorPro} />
      <Advertising contadorPro={contadorPro} setcontadorPro={setcontadorPro} />
      <Article2
        Products2={article2}  contadorPro={contadorPro} setcontadorPro={setcontadorPro}
      />
      <PopularNow contadorPro={contadorPro} setcontadorPro={setcontadorPro} />
      <Article3 Products3={article2} contadorPro={contadorPro} setcontadorPro={setcontadorPro}/>
      <History contadorPro={contadorPro} setcontadorPro={setcontadorPro}/>
      <Discount contadorPro={contadorPro} setcontadorPro={setcontadorPro} />
      <Category contadorPro={contadorPro} setcontadorPro={setcontadorPro} />
      <Footer contadorPro={contadorPro} setcontadorPro={setcontadorPro} />
    </>
  );
}
