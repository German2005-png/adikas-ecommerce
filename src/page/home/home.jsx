import { useState, useRef } from "react";
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
  
  return (
    <>
      <Navegation  Products2={article2} contadorPro={contadorPro}/>
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
