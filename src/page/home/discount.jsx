import rightarrow from "../../assets/rightarrow.svg";
export function Discount() {
    return (
      <>
        <div className="discount-cont">
          <div className="flex-discount">
            <div className="discount">
              <h1>UNITE AL CLUB Y CONSEGUÍ UN 15% DE DESCUENTO</h1>
              <a className="discount-a ll l2" href="">
                REGISTRASTE GRATIS
                <img src={rightarrow} alt="" />
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }