export function Hombre({CategoryHombre, SetCategoryHombre}) {
  return (
    <>
      <div
        onMouseLeave={() => {
          document.getElementById("nav-li-center500").style.borderBottom =
            "3px solid transparent";
          SetCategoryHombre(false);
        }}
        className={`nav-category-hombre ${CategoryHombre ? "" : "off"}`}
        onMouseEnter={() => {
          document.getElementById("nav-li-center500").style.borderBottom =
            "3px solid";
          SetCategoryHombre(true);
        }}
      >
        <div className="flex-category-hombre">
          <div className="category-hombre border-right">
            <div>
              <a className="category-hombre-title-a" href="">
                <h4 className="category-hombre-title">PRODUCTO DESTACADO</h4>
              </a>
              <ul className="category-hombre-ul">
                <li className="category-hombre-li">
                  <a className="category-hombre-a" href="">
                    Novedades
                  </a>
                </li>
                <li className="category-hombre-li">
                  <a className="category-hombre-a" href="">
                    Lo Más Vendidos
                  </a>
                </li>
                <li className="category-hombre-li">
                  <a className="category-hombre-a" href="">
                    Personaliza tu Camiseta
                  </a>
                </li>
                <li className="category-hombre-li">
                  <a className="category-hombre-a" href="">
                    Exclusivo Miembros
                  </a>
                </li>
                <li className="category-hombre-li">
                  <a className="category-hombre-a" href="">
                    Solo en adidas
                  </a>
                </li>
                <li className="category-hombre-li">
                  <a className="category-hombre-a" href="">
                    Próximos Lanzamientos
                  </a>
                </li>
                <br />
                <li className="category-hombre-li">
                  <a className="category-hombre-a" href="">
                    River Plate ¡Nuevo!
                  </a>
                </li>
                <li className="category-hombre-li">
                  <a className="category-hombre-a" href="">
                    Selección Argentina
                  </a>
                </li>
                <li className="category-hombre-li">
                  <a className="category-hombre-a" href="">
                    Precios Justos
                  </a>
                </li>
                <li className="category-hombre-li">
                  <a className="category-hombre-a" href="">
                    Esenciales de Primavera 🌷
                  </a>
                </li>
              </ul>
            </div>
            <div className="category-hombre-bottom">
              <a className="category-hombre-bottom-a" href="">
                Todos los Productos
              </a>
            </div>
          </div>
          <div className="category-hombre">
            <div>
              <a className="category-hombre-title-a" href="">
                <h4 className="category-hombre-title">CALZADO</h4>
              </a>
              <ul className="category-hombre-ul">
                <li className="category-hombre-li">
                  <a className="category-hombre-a" href="">
                    Novedades
                  </a>
                </li>
                <li className="category-hombre-li">
                  <a className="category-hombre-a" href="">
                    Ver Todas las Zapatillas
                  </a>
                </li>
                <li className="category-hombre-li">
                  <a className="category-hombre-a" href="">
                    Running
                  </a>
                </li>
                <li className="category-hombre-li">
                  <a className="category-hombre-a" href="">
                    Gimnasio y Training
                  </a>
                </li>
                <li className="category-hombre-li">
                  <a className="category-hombre-a" href="">
                    Outdoor
                  </a>
                </li>
                <li className="category-hombre-li">
                  <a className="category-hombre-a" href="">
                    Botines
                  </a>
                </li>
                <li className="category-hombre-li">
                  <a className="category-hombre-a" href="">
                    Ojotas
                  </a>
                </li>
                <li className="category-hombre-li">
                  <a className="category-hombre-a" href="">
                    Calzado de Plataforma
                  </a>
                </li>
                <li className="category-hombre-li">
                  <a className="category-hombre-a" href="">
                    Originals
                  </a>
                </li>
              </ul>
            </div>
            <div className="category-hombre-bottom">
              <a className="category-hombre-bottom-a" href="">
                Todos el Calzado
              </a>
            </div>
          </div>
          <div className="category-hombre">
            <div>
              <a className="category-hombre-title-a" href="">
                <h4 className="category-hombre-title">ROPA</h4>
              </a>
              <ul className="category-hombre-ul">
                <li className="category-hombre-li">
                  <a className="category-hombre-a" href="">
                    Remeras y Chombas
                  </a>
                </li>
                <li className="category-hombre-li">
                  <a className="category-hombre-a" href="">
                    Calzas
                  </a>
                </li>
                <li className="category-hombre-li">
                  <a className="category-hombre-a" href="">
                    Camperas
                  </a>
                </li>
                <li className="category-hombre-li">
                  <a className="category-hombre-a" href="">
                    Buzos
                  </a>
                </li>
                <li className="category-hombre-li">
                  <a className="category-hombre-a" href="">
                    Pantalones
                  </a>
                </li>
                <li className="category-hombre-li">
                  <a className="category-hombre-a" href="">
                    Camisetas de Fútbol
                  </a>
                </li>
                <li className="category-hombre-li">
                  <a className="category-hombre-a" href="">
                    Shorts
                  </a>
                </li>
                <li className="category-hombre-li">
                  <a className="category-hombre-a" href="">
                    Conjuntos
                  </a>
                </li>
                <li className="category-hombre-li">
                  <a className="category-hombre-a" href="">
                    Originals
                  </a>
                </li>
              </ul>
            </div>
            <div className="category-hombre-bottom">
              <a className="category-hombre-bottom-a" href="">
                Toda la Ropa
              </a>
            </div>
          </div>
          <div className="category-hombre">
            <div>
              <a className="category-hombre-title-a" href="">
                <h4 className="category-hombre-title">ACCESORIOS</h4>
              </a>
              <ul className="category-hombre-ul">
                <li className="category-hombre-li">
                  <a className="category-hombre-a" href="">
                    Bolsos y Mochilas
                  </a>
                </li>
                <li className="category-hombre-li">
                  <a className="category-hombre-a" href="">
                    Pelotas
                  </a>
                </li>
                <li className="category-hombre-li">
                  <a className="category-hombre-a" href="">
                    Gorras
                  </a>
                </li>
                <li className="category-hombre-li">
                  <a className="category-hombre-a" href="">
                    Medias
                  </a>
                </li>
              </ul>
            </div>
            <div className="category-hombre-bottom">
              <a className="category-hombre-bottom-a" href="">
                Todos los Calzados
              </a>
            </div>
          </div>
          <div className="category-hombre">
            <div>
              <a className="category-hombre-title-a" href="">
                <h3 className="category-hombre-title">DEPORTES</h3>
              </a>
              <ul className="category-hombre-ul">
                <li className="category-hombre-li">
                  <a className="category-hombre-a" href="">
                    Running
                  </a>
                </li>
                <li className="category-hombre-li">
                  <a className="category-hombre-a" href="">
                    Fútbol
                  </a>
                </li>
                <li className="category-hombre-li">
                  <a className="category-hombre-a" href="">
                    Gimnasio y Training
                  </a>
                </li>
                <li className="category-hombre-li">
                  <a className="category-hombre-a" href="">
                    Tenis
                  </a>
                </li>
                <li className="category-hombre-li">
                  <a className="category-hombre-a" href="">
                    Outdoor
                  </a>
                </li>
                <li className="category-hombre-li">
                  <a className="category-mujer-a" href="">
                    Natación
                  </a>
                </li>
                <li className="category-hombre-li">
                  <a className="category-mujer-a" href="">
                    Yoga
                  </a>
                </li>
                <li className="category-hombre-li">
                  <a className="category-hombre-a" href="">
                    Padel
                  </a>
                </li>
              </ul>
            </div>
            <div className="category-hombre-bottom">
              <a className="category-hombre-bottom-a" href="">
                Todos los Calzados
              </a>
            </div>
          </div>
          <div className="category-hombre">
            <div>
              <a className="category-hombre-title-a" href="">
                <h4 className="category-hombre-title">ORIGINALS</h4>
              </a>
              <ul className="category-hombre-ul">
                <li className="category-hombre-li">
                  <a className="category-hombre-bottom-a da" href="">
                    <img
                      src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/esAR/Images/OriginalsBrand_Big_Image_tcm216-1008153.jpg"
                      alt=""
                    />
                  </a>
                </li>
              </ul>
            </div>
            <div className="category-hombre-bottom"></div>
          </div>
        </div>
      </div>
    </>
  );
}
