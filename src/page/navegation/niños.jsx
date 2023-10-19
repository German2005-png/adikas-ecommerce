export function Niños({ CategoryNiños, SetCategoryNiños }) {
  const handleMouseEnterLeave = (isEntering) => {
    const navLiCenter = document.getElementById("nav-li-center510");
    if (navLiCenter) {
      navLiCenter.style.borderBottom = isEntering ? "3px solid" : "3px solid transparent";
    }
    SetCategoryNiños(isEntering);
  };

  return (
    <div
      onMouseEnter={() => handleMouseEnterLeave(true)}
      onMouseLeave={() => handleMouseEnterLeave(false)}
      className={`nav-category-niños ${CategoryNiños ? "" : "off"}`}
    >
      <div className="flex-category-niños">
      <div className="category-niños border-right">
            <div>
            <a className="category-niños-title-a" href="">
              <h4 className="category-niños-title">PRODUCTO DESTACADO</h4>
            </a>
            <ul className="category-niños-ul">
              <li className="category-niños-li">
                <a className="category-niños-a" href="">Lo Más Vendidos</a>
              </li>
              <li className="category-niños-li">
                <a className="category-niños-a" href="">Personaliza tu Camiseta</a>
              </li>
              <li className="category-niños-li">
                <a className="category-niños-a" href="">Solo en adidas</a>
              </li>
              <br />
              <li className="category-niños-li">
                <a className="category-niños-a" href="">Precios Justos</a>
              </li>
              <li className="category-niños-li">
                <a className="category-niños-a" href="">River Plate ¡Nuevo!</a>
              </li>
              <li className="category-niños-li">
                <a className="category-niños-a" href="">Esenciales de Primavera 🌷</a>
              </li>
              <li className="category-niños-li">
                <a className="category-niños-a" href="">Disney</a>
              </li>
            </ul>
            </div>
            <div className="category-niños-bottom">
              <a className="category-niños-bottom-a" href="">Todos los Productos</a>
            </div>
          </div>
          <div className="category-niños">
            <div>
            <a className="category-niños-title-a" href="">
              <h4 className="category-niños-title">CALZADO NIÑOS</h4>
            </a>
            <ul className="category-niños-ul">
              <li className="category-niños-li">
                <a className="category-niños-a" href="">Zapatillas</a>
              </li>
              <li className="category-niños-li">
                <a className="category-niños-a" href="">Botines</a>
              </li>
              <li className="category-niños-li">
                <a className="category-niños-a" href="">Zapatillas para Correr</a>
              </li>
              <br />
              <a className="category-niños-title-a" href="">
              <h4 className="category-niños-title">ROPA NIÑOS</h4>
            </a>
              <li className="category-niños-li">
                <a className="category-niños-a" href="">Buzos</a>
              </li>
              <li className="category-niños-li">
                <a className="category-niños-a" href="">Remeras y Chombas</a>
              </li>
              <li className="category-niños-li">
                <a className="category-niños-a" href="">Camisetas de Fútbol</a>
              </li>
              <li className="category-niños-li">
                <a className="category-niños-a" href="">Pantalones</a>
              </li>
              <li className="category-niños-li">
                <a className="category-niños-a" href="">Conjuntos</a>
              </li>
            </ul>
            </div>
            <div className="category-niños-bottom">
              <a className="category-niños-bottom-a" href="">Todo Niños</a>
            </div>
          </div>
          <div className="category-niños">
            <div>
            <a className="category-niños-title-a" href="">
              <h4 className="category-niños-title">CALZADO NIÑAS</h4>
            </a>
            <ul className="category-niños-ul">
              <li className="category-niños-li">
                <a className="category-niños-a" href="">Zapatillas</a>
              </li>
              <li className="category-niños-li">
                <a className="category-niños-a" href="">Botines</a>
              </li>
              <li className="category-niños-li">
                <a className="category-niños-a" href="">Zapatillas para Correr</a>
              </li>
              <br />
              <a className="category-niños-title-a" href="">
                <h4 className="category-niños-title">ROPA NIÑAS</h4>
              </a>
              <li className="category-niños-li">
                <a className="categoryniños-a" href="">Buzos</a>
              </li>
              <li className="category-niños-li">
                <a className="category-niños-a" href="">Remeras y Chombas</a>
              </li>
              <li className="category-niños-li">
                <a className="category-niños-a" href="">Camisetas de Fútbol</a>
              </li>
              <li className="category-niños-li">
                <a className="category-hombre-a" href="">Pantalones</a>
              </li>
              <li className="category-niños-li">
                <a className="category-hombre-a" href="">Conjuntos</a>
              </li>
              <li className="category-niños-li">
                <a className="category-niños-a" href="">Conjuntos</a>
              </li>
            </ul>
            </div>
            <div className="category-niños-bottom">
              <a className="category-niños-bottom-a" href="">Toda Niñas</a>
            </div>
          </div>
          <div className="category-niños">
            <div>
            <a className="category-niños-title-a" href="">
              <h4 className="category-niños-title">ACCESORIOS</h4>
            </a>
            <ul className="category-niños-ul">
              <li className="category-niños-li">
                <a className="category-niños-a" href="">Pelotas</a>
              </li>
              <li className="category-niños-li">
                <a className="category-niños-a" href="">Canilleras</a>
              </li>
              <li className="category-niños-li">
                <a className="category-niños-a" href="">Medias</a>
              </li>
            </ul>
            </div>
            <div className="category-niños-bottom">
              <a className="category-niños-bottom-a" href="">Todos los Accesorios</a>
            </div>
          </div>
          <div className="category-niños">
            <div>
            <a className="category-niños-title-a" href="">
              <h4 className="category-niños-title">TALLA CALZADO</h4>
            </a>
            <ul className="category-niños-ul">
              <li className="category-niños-li">
                <a className="category-niños-a" href="">Calzado 0 a 4 años</a>
              </li>
              <li className="category-niños-li">
                <a className="category-niños-a" href="">Calzado 4 a 8 años</a>
              </li>
              <li className="category-niños-li">
                <a className="category-niños-a" href="">Calzado 8 a 16 años</a>
              </li>
              <br />
              <a className="category-niños-title-a" href="">
                <h4 className="category-niños-title">TALLA ROPA</h4>
              </a>
              <li className="category-niños-li">
                <a className="category-niños-a" href="">Ropa 0 a 4 años</a>
              </li>
              <li className="category-niños-li">
                <a className="category-niños-a" href="">Ropa 4 a 8 años</a>
              </li>
              <li className="category-niños-li">
                <a className="categoryniños-a" href="">Ropa 8 a 16 años</a>
              </li>
            </ul>
            </div>
            <div className="category-niños-bottom">
              <a className="category-niños-bottom-a" href="">Guía de Tallas</a>
            </div>
          </div>
          <div className="category-niños">
            <div>
            <a className="category-niños-title-a" href="">
              <h4 className="category-niños-title">DEPORTES</h4>
            </a>
            <ul className="category-niños-ul">
              <li className="category-niños-li">
                <a className="category-niños-a" href="">Fútbol</a>
              </li>
              <li className="category-niños-li">
                <a className="category-niños-a" href="">Gimnasio y Training</a>
              </li>
              <li className="category-niños-li">
                <a className="category-niños-a" href="">Running</a>
              </li>
              <li className="category-niños-li">
                <a className="category-niños-a" href="">Básquet</a>
              </li>
            </ul>
            </div>
            <div className="category-niños-bottom">
              <a className="category-niños-bottom-a" href="">Todos los Deportes</a>
            </div>
          </div>
      </div>
    </div>
  );
}
