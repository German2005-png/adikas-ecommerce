import { Category } from "../home/category.jsx";
import { Discount } from "../home/discount.jsx";
import { Footer } from "../home/footer.jsx";
import submit from "../../assets/submit.svg";
import { Navegation } from "../navegation/navegation.jsx";
import "./errorPage.css"
export function ErrorPage({contadorPro}){
    return(
        <>
        <Navegation contadorPro={contadorPro} />
        <div className="content-error">
            <h2 className="title-error">NO SE ENCUENTRA LA PÁGINA</h2>
            <form className="form-error">
            <button className="submit-error" type="submit">
                <img src={submit} alt="" />
            </button>
            <input className="search-error" type="text" placeholder="BUSCAR"/>
            </form>
            <p className="error-txt">Vuelve a nuestra <a className="error-home" href="">tienda online</a></p>
        </div>
        <Discount />
        <Category />
        <Footer />
        </>
    )
}