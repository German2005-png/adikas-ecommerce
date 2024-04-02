import facebook from "../../assets/facebook.svg";
import instragram from "../../assets/instragram.svg";
import twitter from "../../assets/twitter.svg";
import pinterest from "../../assets/pinterest.svg";
import youtube from "../../assets/youtube.svg";
export function Category(){
  const category1 = ["Calzado", "Zapatillas", "Ropa", "Accesorios", "Botines", "Rompevientos", "Conjuntos", "Ojotas"];
  const category2 = ["Novedades", "Black Friday", "Outlet", "Hot Sale", "Cyber Monday"];
  const category3 = ["adiClub", "adikas app", "adikas Runners"];
  const category4 = ["Selección Argentina", "River Plate", "Boca Juniors", "Fútbol", "Running", "Básquet", "Training"];
  const category5 = ["Ultraboost", "Stan Smith", "Akicolor", "Superstart", "Originals", "Forum", "Colección Black & White"];
  const category6 = ["Dudas Frecuentes", "Realizar Pedidos", "Productos adikas", "Pago", "Envío", "Autogestionar mi Devolución", "Devoluciones", "Cambio en Tiendas", "Como Usar Nuestro Sitio", "Como Saber el Talla de tu Bra", "Guia de Talles", "Mapa del Sitio"];
  const category7 = ["Acerca de adikas", "Trabaja en Nuestro Equipo Prensa", "Prensa", "Información Corporativa"];
    return(
      <>
        <div className="category-cont">
          <div className="flex-category">
            <div className="category">
              <h3 className="category-title">PRODUCTOS</h3>
              <ul className="category-ul">
                {category1.map((Element, index)=> (
                  <li className="category-li" key={index}>
                    <a className="category-a" href="">{Element}</a>
                  </li>
                ))}
                <br />
                {category2.map((Element, index)=> (
                  <li className="category-li" key={index}>
                    <a className="category-a" href="">{Element}</a>
                  </li>
                ))}
                <br />
                {category3.map((Element, index)=> (
                  <li className="category-li" key={index}>
                    <a className="category-a" href="">{Element}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="category">
              <h3 className="category-title">DEPORTES</h3>
              <ul className="category-ul">
                {category4.map((Element, index)=> (
                  <li className="category-li" key={index}>
                    <a className="category-a" href="">{Element}</a>
                  </li>
                ))}
                <h3 className="category-title">COLECCIONES</h3>
                {category5.map((Element, index)=> (
                  <li className="category-li" key={index}>
                    <a className="category-a" href="">{Element}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="category">
              <h3 className="category-title">ASISTENCIA</h3>
              <ul className="category-ul">
                <li className="category-li">
                  <a className="category-a" href="">
                    <img src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/esAR/Images/footer_general_boton_de_ayuda_tcm216-840664.png" alt="" />
                  </a>
                </li>
                {category6.map((Element, index)=> (
                  <li className="category-li" key={index}>
                    <a className="category-a" href="">{Element}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="category">
              <h3 className="category-title">INFORMACIÓN DE LA EMPRESA</h3>
              <ul className="category-ul">
                {category7.map((Element, index)=> (
                  <li className="category-li" key={index}>
                    <a className="category-a" href="">{Element}</a>
                  </li>
                ))}
                <h3>TIENDAS</h3>
                <li className="category-li">
                  <a className="category-a" href="">Buscador de Tiendas</a>
                </li>
                <li className="category-li">
                  <a className="category-a" href="">
                    <img width="150px" src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/esAR/Images/Escudo_tcm216-840715.png" alt="" />
                  </a>
                </li>
                <li className="category-li">
                  <a className="category-a" href="">
                    <img  src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/esAR/Images/Codigo-QR_tcm216-840714.png" alt="" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="category">
              <h3 className="category-title">SEGUINOS</h3>
              <ul className="category-ul">
                <li className="category-li">
                  <a href="">
                  <img src={facebook} alt="" />
                  </a>
                </li>
                <li className="category-li">
                  <a href="">
                  <img src={instragram} alt="" />
                  </a>
                </li>
                <li className="category-li">
                  <a href="">
                  <img src={twitter} alt="" />
                  </a>
                </li>
                <li className="category-li">
                  <a href="">
                  <img src={pinterest} alt="" />
                  </a>
                </li>
                <li className="category-li">
                  <a href="">
                    <img src={youtube} alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    )
  }