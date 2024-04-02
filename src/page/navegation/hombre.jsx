export function Hombre({CategoryHombre, SetCategoryHombre}) {
  const categoryHombre1 = ["Novedades", "Lo Más Vendidos", "Personaliza tu Camiseta", "Exclusivo Miembros", "Solo en adikas", "Próximos Lanzamientos"];
  const categoryHombre2 = ["River Plate ¡Nuevo!", "Selección Argentina", "Precios Justos", "Esenciales de Primavera 🌷"];
  const categoryHombre3 = ["Novedades", "Ver Todas las Zapatillas", "Running", "Gimnasio y Training", "Outdoor", "Botines", "Ojotas", "Calzado de Plataforma", "Originals"];
  const categoryHombre4 = ["Remeras y Chombas", "Calzas", "Camperas", "Buzos", "Pantalones", "Camisetas de Fútbol", "Shorts", "Conjuntos", "Originals"];
  const categoryHombre5 = ["Bolsos y Mochilas", "Pelotas", "Gorras", "Medias"];
  const categoryHombre6 = ["Running", "Fútbol", "Gimnasio y Traning", "Tenis", "Outdoor", "Natación", "Yoga", "Padel"];
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
                {categoryHombre1.map((Element, index)=> (
                  <li className="category-hombre-li" key={index}>
                    <a className="category-hombre-a" href={Element}>{Element}</a>
                  </li>
                ))}
                <br />
                {categoryHombre2.map((Element, index)=> (
                  <li className="category-hombre-li" key={index}>
                    <a className="category-hombre-a" href={Element}>{Element}</a>
                  </li>
                ))}
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
                {categoryHombre3.map((Element, index)=> (
                  <li className="category-hombre-li" key={index}>
                  <a className="category-hombre-a" href={Element}>{Element}</a>
                  </li>
                ))}
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
                {categoryHombre4.map((Element, index)=> (
                  <li className="category-hombre-li" key={index}>
                    <a className="category-hombre-a" href={Element}>{Element}</a>
                  </li>
                ))}
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
                {categoryHombre5.map((Element, index)=> (
                  <li className="category-hombre-li" key={index}>
                    <a className="category-hombre-a" href={Element}>{Element}</a>
                  </li>
                ))}
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
                {categoryHombre6.map((Element, index)=> (
                  <li className="category-hombre-li" key={index}>
                    <a className="category-hombre-a" href="">{Element}</a>
                  </li>
                ))}
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
