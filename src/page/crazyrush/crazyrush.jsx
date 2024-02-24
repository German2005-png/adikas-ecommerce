import { Category } from "../home/category";
import { Discount } from "../home/discount";
import { Footer } from "../home/footer";
import { Navegation } from "../navegation/navegation";
import crazyrush1 from "../../crazyrush1.json";
import crazyrush2 from "../../crazyrush2.json";
import heart from "../../assets/heart.svg";
import "./crazyrush.css";
export function Crazyrush() {
  window.document.title = "Botines Pack | adidas Argentina";
  function convertToURL(text){
    text = text.replace(/ /g, '-');
    text = text.replace(".", "")
    text = encodeURIComponent(text)
    return text;
  }
  const imagen =
    "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/esAR/Images/football-fw23-MarineRush-PreLaunch-plp-mh-small-d_tcm216-1064526.jpg";
  console.log(crazyrush1);
  return (
    <>
      <Navegation />
      <header className="header-crazyrush">
        <div className="flex-header-crazyrush">
          <div className="cont-header-description-crazyrush">
            <h1 className="header-description-title" title="COPA 2">
              COPA 2
            </h1>
            <p
              className="header-description-txt"
              title="Para una conexión inigualable"
            >
              Para una conexión inigualable
            </p>
          </div>
          <img className="header-img-crazyrush" src={imagen} alt="" />
        </div>
      </header>
      <div className="flex-content-crazyrush">
      <div className="content-crazyrush">
        <div className="cont-crazyrush-title">
          <h1>BOTINES PACK</h1>
          <p>[{crazyrush1.crazyrush1.length + crazyrush2.crazyrush2.length}]</p>
        </div>
      </div>
      <ul className="cont-crazyrush-item-ul">
        {crazyrush1.crazyrush1.map((item)=> (
          <>
          <li className="cont-crazyrush-item" key={item.id} title={item.nombre} >
            <button className="crazyrush-heart-btn">
                <img src={heart} />
            </button>
            <a href={`/product/${item.id}/${convertToURL(item.nombre)}`} onClick={()=>{
              localStorage.setItem("guardar", JSON.stringify(item))
            }}>
            <div className="cont-crazyrush-item-img">
              <p className="crazyrush-item-precio" title={
                new Intl.NumberFormat('es-ES').format(item.precio)
              }>$ {new Intl.NumberFormat('es-ES').format(item.precio)}</p>
              <img className={`crazyrush-item-img ${item == crazyrush1.crazyrush1[0] ? "fad" : ""}`} src={item.url} alt="" />
            </div>
            <div className="cont-crazyrush-item-description">
              <p className="crazyrush-item-nombre">{item.nombre}</p>
              <p className="crazyrush-item-description">{item.descripcion}</p>
              <p className="crazyrush-item-envios">{item.envios}</p>
            </div>
            </a>
          </li>
          </>
        ))}
      </ul>
      <div className="flex-image-crazyrush">
        <div className="cont-image-crazyrush" style={{zIndex: "5"}}>
        <img className="image-crazyrush" style={{marginBottom: "40px"}} src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/esAR/Images/football-fw23-MarineRush-PreLaunch-plp-image-collection-1_tcm216-1064521.jpg" alt="" />
        </div>
        <div className="cont-image-crazyrush" style={{zIndex: "4"}}>
        <img className="image-crazyrush" src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/esAR/Images/football-fw23-MarineRush-PreLaunch-plp-image-collection-2_tcm216-1064524.jpg" alt="" />
        </div>
        <div className="cont-image-crazyrush" style={{zIndex: "3"}}>
        <img className="image-crazyrush" style={{marginBottom: "60px"}} src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/esAR/Images/football-fw23-MarineRush-PreLaunch-plp-image-collection-3_tcm216-1064522.jpg" alt="" />
        </div>
        <div>
        <img className="image-crazyrush" style={{marginBottom: "25px"}} src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/esAR/Images/football-fw23-MarineRush-PreLaunch-plp-image-collection-4_tcm216-1064523.jpg" alt="" />
        </div>
      </div>
      <ul className="cont-crazyrush-item-ul">
        {crazyrush2.crazyrush2.map((item)=> (
          <>
          <li className="cont-crazyrush-item" key={item.id} title={item.nombre}>
            <button className="crazyrush-heart-btn">
                <img src={heart} />
            </button>
            <a href={`/product/${item.id}/${convertToURL(item.nombre)}`} onClick={()=>{
              localStorage.setItem("guardar", JSON.stringify(item))
            }}>
            <div className="cont-crazyrush-item-img">
              <p className="crazyrush-item-precio" title={
                new Intl.NumberFormat('es-ES').format(item.precio)
              }>$ {new Intl.NumberFormat('es-ES').format(item.precio)}</p>
              <img className={`crazyrush-item-img ${item == crazyrush1.crazyrush1[0] ? "fad" : ""}`} src={item.url} alt="" />
            </div>
            <div className="cont-crazyrush-item-description">
              <p className="crazyrush-item-nombre">{item.nombre}</p>
              <p className="crazyrush-item-description">{item.descripcion}</p>
              <p className="crazyrush-item-envios">{item.envios}</p>
            </div>
            </a>
          </li>
          </>
        ))}
      </ul>
      </div>
      <Discount />
      <Category />
      <Footer />
    </>
  );
}
