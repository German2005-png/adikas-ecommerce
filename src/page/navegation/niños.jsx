export function Niños({ CategoryNiños, SetCategoryNiños }) {
  const categoryNIÑOS1 = ['Lo Más Vendidos','Personaliza tu Camiseta','Solo en adikas'];
  const categoryNIÑOS2 = ['Precios Justos','River Plate ¡Nuevo!','Esenciales de Primavera 🌷','Disney'];
  const categoryNIÑOS3 = ['Zapatillas','Botines','Zapatillas para Correr'];
  const categoryNIÑOS4 = ['Buzos','Remeras y Chombas','Camisetas de Fútbol', 'Pantalones', 'Conjuntos'];
  const categoryNIÑOS5 = ['Zapatillas','Botines','Zapatillas para Correr'];
  const categoryNIÑOS6 = ['Buzos','Remeras y Chombas','Camisetas de Fútbol', 'Pantalones', 'Conjuntos'];
  const categoryNIÑOS7 = ['Pelotas','Canilleras','Medias'];
  const categoryNIÑOS8 = ['Calzado 0 a 4 años','Calzado 4 a 8 años','Calzado 8 a 16 años'];
  const categoryNIÑOS9 = ['Ropa 0 a 4 años','Ropa 4 a 8 años','Ropa 8 a 16 años'];
  const categoryNIÑOS10 = ['Fútbol','Gimnasio y Training','Running', 'Básquet'];
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
              {categoryNIÑOS1.map((Element, index)=> (
                <li className="category-niños-li" key={index}>
                  <a className="category-niños-a" href={Element}>{Element}</a>
                </li>
              ))}
              <br />
              {categoryNIÑOS2.map((Element, index)=> (
                <li className="category-niños-li" key={index}>
                  <a className="category-niños-a" href={Element}>{Element}</a>
                </li>
              ))}
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
              {categoryNIÑOS3.map((Element, index)=> (
                <li className="category-niños-li" key={index}>
                  <a className="category-niños-a" href={Element}>{Element}</a>
                </li>
              ))}
              <br />
              <a className="category-niños-title-a" href="">
              <h4 className="category-niños-title">ROPA NIÑOS</h4>
            </a>
              {categoryNIÑOS4.map((Element, index)=> (
                <li className="category-niños-li" key={index}>
                  <a className="category-niños-a" href={Element}>{Element}</a>
                </li>
              ))}
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
              {categoryNIÑOS5.map((Element, index)=> (
                <li className="category-niños-li" key={index}>
                  <a className="category-niños-a" href={Element}>{Element}</a>
                </li>
              ))}
              <br />
              <a className="category-niños-title-a" href="">
                <h4 className="category-niños-title">ROPA NIÑAS</h4>
              </a>
              {categoryNIÑOS6.map((Element, index)=> (
                <li className="category-niños-li" key={index}>
                  <a className="categoryniños-a" href={Element}>{Element}</a>
                </li>
              ))}
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
              {categoryNIÑOS7.map((Element, index)=> (
                <li className="category-niños-li" key={index}>
                  <a className="category-niños-a" href={Element}>{Element}</a>
                </li>
              ))}
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
              {categoryNIÑOS8.map((Element, index)=> (
                <li className="category-niños-li" key={index}>
                  <a className="category-niños-a" href={Element}>{Element}</a>
                </li>
              ))}
              <br />
              <a className="category-niños-title-a" href="">
                <h4 className="category-niños-title">TALLA ROPA</h4>
              </a>
              {categoryNIÑOS9.map((Element, index)=> (
                <li className="category-niños-li" key={index}>
                  <a className="category-niños-a" href={Element}>{Element}</a>
                </li>
              ))}
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
              {categoryNIÑOS10.map((Element, index)=> (
                <li className="category-niños-li" key={index}>
                  <a className="category-niños-a" href={Element}>{Element}</a>
                </li>
              ))}
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
