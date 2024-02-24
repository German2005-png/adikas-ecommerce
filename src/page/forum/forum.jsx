import { Category } from "../home/category";
import { Footer } from "../home/footer";
import { Navegation } from "../navegation/navegation";
import { Discount } from "../home/discount.jsx";
import forum from "../../forum.json";
import heart from "../../assets/heart.svg";
import "./forum.css";
export default function Forum({ contadorPro }) {
  function convertToURL(text){
    text = text.replace(/ /g, '-');
    text = encodeURIComponent(text)
    return text;
  }
  return (
    <>
      <Navegation contadorPro={contadorPro}></Navegation>
      <div className="flex-content-forum">
      <div className="content-forum">
        <div className="cont-forum-title">
          <h1>ORIGINALS · FORUM</h1>
          <p>[{forum.forum.length}]</p>
        </div>
      </div>
      <ul className="cont-forum-item-ul">
        {forum.forum.map((item)=> (
          <>
          <li className="cont-forum-item" key={item.id} title={item.nombre}>
            <button className="forum-heart-btn">
                <img src={heart} />
            </button>
            <a href={`/product/${item.id}/${convertToURL(item.nombre)}`} onClick={()=>{
              localStorage.setItem("guardar", JSON.stringify(item))
            }}>
            <div className="cont-forum-item-img">
              <p className="forum-item-precio" title={new Intl.NumberFormat('es-ES').format(item.precio)}>$ {new Intl.NumberFormat('es-ES').format(item.precio)}</p>
              <img className="forum-item-img" src={item.url} alt="" />
            </div>
            <div className="cont-forum-item-description">
              <p className="forum-item-nombre">{item.nombre}</p>
              <p className="forum-item-description">{item.descripcion}</p>
              <p className="forum-item-envios">{item.envios}</p>
            </div>
            </a>
          </li>
          </>
        ))}
      </ul>
      </div>
      <Discount></Discount>
      <Category></Category>
      <Footer></Footer>
    </>
  );
}
