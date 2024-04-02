export function Mujer({CategoryMujer, SetCategoryMujer}) {
  const categoryMUJER = ["Novedades", "Lo Más Vendidos", "Personaliza tu Camiseta", "Exclusivo Miembros", "Solo en adikas", "Próximos Lanzamientos"];
  const categoryMUJER1 = ["River Plate ¡Nuevo!", "Precios Justos", "Esenciales de Primavera 🌷"];
  const categoryMUJER2 = ["Novedades", "Ver Todas las Zapatillas", "Running", "Gimnasio y Training", "Outdoor", "Botines", "Ojotas", "Calzado de Plataforma", "Originals"];
  const categoryMUJER3 = ["Novedades", "Remeras y Chombas", "Calzas", "Camperas", "Buzos", "Top Deportivos", "Pantalones", "Camisetas de Fútbol", "Shorts", "Vestidos", "Polleras", "Conjuntos", "Originals"];
  const categoryMUJER4 = ["Bolsos y Mochilas", "Pelotas", "Gorras", "Medias"];
  const categoryMUJER5 = ["Running", "Fútbol", "Gimnasio y Training", "Tenis", "Outdoor", "Ciclismo", "Yoga", "Padel"];
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
                {categoryMUJER.map((Element, index)=> (
                  <li className="category-mujer-li" key={index}>
                    <a className="category-mujer-a" href={Element}>{Element}</a>
                  </li>
                ))}
                <br />
                {categoryMUJER1.map((Element, index)=> (
                  <li className="category-mujer-li" key={index}>
                    <a className="category-mujer-a" href={Element}>{Element}</a>
                  </li>
                ))}
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
                {categoryMUJER2.map((Element, index)=> (
                  <li className="category-mujer-li" key={index}>
                    <a className="category-mujer-a" href="">{Element}</a>
                  </li>
                ))}
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
                {categoryMUJER3.map((Element, index)=> (
                  <li className="category-mujer-li" key={index}>
                    <a className="category-mujer-a" href="">{Element}</a>
                </li>
                ))}
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
                {categoryMUJER4.map((Element, index)=> (
                  <li className="category-mujer-li" key={index}>
                    <a className="category-mujer-a" href={Element}>{Element}</a>
                  </li>
                ))}
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
                {categoryMUJER5.map((Element, index)=> (
                  <li className="category-mujer-li" key={index}>
                  <a className="category-mujer-a" href={Element}>{Element}</a>
                  </li>
                ))}
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
