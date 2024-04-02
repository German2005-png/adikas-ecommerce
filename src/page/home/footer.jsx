export function Footer(){
    const ListTxtFooter = ["Configuración de las cookies", "Nuestros Datos", "Términos y Condiciones", "Política de Cookies", "Política de Privacidad", "Seleccionar País", "Reclamos"];
    return(
        <footer>
            <ul className="flex-footer">
                {ListTxtFooter.map((Element, index)=> (
                    <li className="footer-li" key={index}>
                        <a className="footer-a" href="">{Element}</a>
                    </li>
                ))}
            </ul>
            <div className="flex-footer2">
                <p>© 2023 Fernando Peralta</p>
            </div>
        </footer>
    )
}