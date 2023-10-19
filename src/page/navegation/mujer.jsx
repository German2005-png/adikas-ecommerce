export function Mujer({CategoryMujer, SetCategoryMujer}) {
  return (
    <>
      <div
        onMouseLeave={() => {
          document.getElementById("nav-li-center556").style.borderBottom =
            "3px solid transparent";
          SetCategoryMujer(false);
        }}
        className={`nav-category-mujer ${CategoryMujer ? "" : "off"}`}
        onMouseEnter={() => {
          document.getElementById("nav-li-center556").style.borderBottom =
            "3px solid";
          SetCategoryMujer(true);
        }}
      >
        <div className="flex-category-mujer">
          <div className="category-mujer border-right">
            <div>
              <a className="category-mujer-title-a" href="">
                <h4 className="category-mujer-title">PRODUCTO DESTACADO</h4>
              </a>
              <ul className="category-mujer-ul">
                <li className="category-mujer-li">
                  <a className="category-mujer-a" href="">
                    Novedades
                  </a>
                </li>
                <li className="category-mujer-li">
                  <a className="category-mujer-a" href="">
                    Lo Más Vendidos
                  </a>
                </li>
                <li className="category-mujer-li">
                  <a className="category-mujer-a" href="">
                    Personaliza tu Camiseta
                  </a>
                </li>
                <li className="category-mujer-li">
                  <a className="category-mujer-a" href="">
                    Exclusivo Miembros
                  </a>
                </li>
                <li className="category-mujer-li">
                  <a className="category-mujer-a" href="">
                    Solo en adidas
                  </a>
                </li>
                <li className="category-mujer-li">
                  <a className="category-mujer-a" href="">
                    Próximos Lanzamientos
                  </a>
                </li>
                <br />
                <li className="category-mujer-li">
                  <a className="category-mujer-a" href="">
                    River Plate ¡Nuevo!
                  </a>
                </li>
                <li className="category-mujer-li">
                  <a className="category-mujer-a" href="">
                    Precios Justos
                  </a>
                </li>
                <li className="category-mujer-li">
                  <a className="category-mujer-a" href="">
                    Esenciales de Primavera 🌷
                  </a>
                </li>
              </ul>
            </div>
            <div className="category-mujer-bottom">
              <a className="category-mujer-bottom-a" href="">
                Todos los Productos
              </a>
            </div>
          </div>
          <div className="category-mujer">
            <div>
              <a className="category-mujer-title-a" href="">
                <h4 className="category-mujer-title">CALZADO</h4>
              </a>
              <ul className="category-mujer-ul">
                <li className="category-mujer-li">
                  <a className="category-mujer-a" href="">
                    Novedades
                  </a>
                </li>
                <li className="category-mujer-li">
                  <a className="category-mujer-a" href="">
                    Ver Todas las Zapatillas
                  </a>
                </li>
                <li className="category-mujer-li">
                  <a className="category-mujer-a" href="">
                    Running
                  </a>
                </li>
                <li className="category-mujer-li">
                  <a className="category-mujer-a" href="">
                    Gimnasio y Training
                  </a>
                </li>
                <li className="category-mujer-li">
                  <a className="category-mujer-a" href="">
                    Outdoor
                  </a>
                </li>
                <li className="category-mujer-li">
                  <a className="category-mujer-a" href="">
                    Botines
                  </a>
                </li>
                <li className="category-mujer-li">
                  <a className="category-mujer-a" href="">
                    Ojotas
                  </a>
                </li>
                <li className="category-mujer-li">
                  <a className="category-mujer-a" href="">
                    Calzado de Plataforma
                  </a>
                </li>
                <li className="category-mujer-li">
                  <a className="category-mujer-a" href="">
                    Originals
                  </a>
                </li>
              </ul>
            </div>
            <div className="category-mujer-bottom">
              <a className="category-mujer-bottom-a" href="">
                Todos el Calzado
              </a>
            </div>
          </div>
          <div className="category-mujer">
            <div>
              <a className="category-mujer-title-a" href="">
                <h4 className="category-mujer-title">ROPA</h4>
              </a>
              <ul className="category-mujer-ul">
                <li className="category-mujer-li">
                  <a className="category-mujer-a" href="">
                    Novedades
                  </a>
                </li>
                <li className="category-mujer-li">
                  <a className="category-mujer-a" href="">
                    Remeras y Chombas
                  </a>
                </li>
                <li className="category-mujer-li">
                  <a className="category-mujer-a" href="">
                    Calzas
                  </a>
                </li>
                <li className="category-mujer-li">
                  <a className="category-mujer-a" href="">
                    Camperas
                  </a>
                </li>
                <li className="category-mujer-li">
                  <a className="category-mujer-a" href="">
                    Buzos
                  </a>
                </li>
                <li className="category-mujer-li">
                  <a className="category-mujer-a" href="">
                    Top Deportivos
                  </a>
                </li>
                <li className="category-mujer-li">
                  <a className="category-mujer-a" href="">
                    Pantalones
                  </a>
                </li>
                <li className="category-mujer-li">
                  <a className="category-mujer-a" href="">
                    Camisetas de Fútbol
                  </a>
                </li>
                <li className="category-mujer-li">
                  <a className="category-mujer-a" href="">
                    Shorts
                  </a>
                </li>
                <li className="category-mujer-li">
                  <a className="category-mujer-a" href="">
                    Vestidos
                  </a>
                </li>
                <li className="category-mujer-li">
                  <a className="category-mujer-a" href="">
                    Polleras
                  </a>
                </li>
                <li className="category-mujer-li">
                  <a className="category-mujer-a" href="">
                    Conjuntos
                  </a>
                </li>
                <li className="category-mujer-li">
                  <a className="category-mujer-a" href="">
                    Originals
                  </a>
                </li>
              </ul>
            </div>
            <div className="category-mujer-bottom">
              <a className="category-mujer-bottom-a" href="">
                Toda la Ropa
              </a>
            </div>
          </div>
          <div className="category-mujer">
            <div>
              <a className="category-mujer-title-a" href="">
                <h4 className="category-mujer-title">ACCESORIOS</h4>
              </a>
              <ul className="category-mujer-ul">
                <li className="category-mujer-li">
                  <a className="category-mujer-a" href="">
                    Bolsos y Mochilas
                  </a>
                </li>
                <li className="category-mujer-li">
                  <a className="category-mujer-a" href="">
                    Pelotas
                  </a>
                </li>
                <li className="category-mujer-li">
                  <a className="category-mujer-a" href="">
                    Gorras
                  </a>
                </li>
                <li className="category-mujer-li">
                  <a className="category-mujer-a" href="">
                    Medias
                  </a>
                </li>
              </ul>
            </div>
            <div className="category-mujer-bottom">
              <a className="category-mujer-bottom-a" href="">
                Todos los Calzados
              </a>
            </div>
          </div>
          <div className="category-mujer">
            <div>
              <a className="category-mujer-title-a" href="">
                <h3 className="category-mujer-title">DEPORTES</h3>
              </a>
              <ul className="category-mujer-ul">
                <li className="category-mujer-li">
                  <a className="category-mujer-a" href="">
                    Running
                  </a>
                </li>
                <li className="category-mujer-li">
                  <a className="category-mujer-a" href="">
                    Fútbol
                  </a>
                </li>
                <li className="category-mujer-li">
                  <a className="category-mujer-a" href="">
                    Gimnasio y Training
                  </a>
                </li>
                <li className="category-mujer-li">
                  <a className="category-mujer-a" href="">
                    Tenis
                  </a>
                </li>
                <li className="category-mujer-li">
                  <a className="category-mujer-a" href="">
                    Outdoor
                  </a>
                </li>
                <li className="category-mujer-li">
                  <a className="category-mujer-a" href="">
                    Ciclismo
                  </a>
                </li>
                <li className="category-mujer-li">
                  <a className="category-mujer-a" href="">
                    Yoga
                  </a>
                </li>
                <li className="category-mujer-li">
                  <a className="category-mujer-a" href="">
                    Padel
                  </a>
                </li>
              </ul>
            </div>
            <div className="category-mujer-bottom">
              <a className="category-mujer-bottom-a" href="">
                Todos los Calzados
              </a>
            </div>
          </div>
          <div className="category-mujer">
            <div>
              <a className="category-mujer-title-a" href="">
                <h4 className="category-mujer-title">ORIGINALS</h4>
              </a>
              <ul className="category-mujer-ul">
                <li className="category-mujer-li">
                  <a className="category-mujer-bottom-a da" href="">
                    <img
                      src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/esAR/Images/OriginalsBrand_Big_Image_tcm216-1008153.jpg"
                      alt=""
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className="category-mujer-bottom"></div>
          </div>
        </div>
      </div>
    </>
  );
}
