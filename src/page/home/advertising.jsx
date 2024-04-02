import left from "../../assets/left.svg";
import right from "../../assets/right.svg";
export function Advertising() {
    function onRightClick() {
      const ScrollAr = document.getElementById("arScroll1");
      ScrollAr.scrollIntoView();
      console.log("Hola");
    }
    function onLeftClick() {
      const ScrollAr = document.getElementById("arScroll2");
      ScrollAr.scrollIntoView();
    }
    return (
      <>
        <article className="content-article1">
          <div className="flex-article1">
            <div className="flex-articles-btn">
              <div className="flex-right">
                <button className="btn1-1" onClick={() => onLeftClick()}>
                  <img src={right} alt="" />
                </button>
                <button className="btn1-2" onClick={() => onRightClick()}>
                  <img src={left} alt="" />
                </button>
              </div>
              <div className="articles1">
                <section className="article1" id="arScroll2">
                  <a href="">
                    <img
                      src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/reactivo_bsas_ar_tc_d_1c16574f91.jpg"
                      alt=""
                    />
                    <div className="article1-text">
                      <h4>¡Felicidades atletas!</h4>
                      <p>
                        adikas conquistó el podio de los 21K de Buenos Aires de la
                        mano de las Adizero Adios Pro 3 y nuestros atletas
                        vencieron sus límites.
                      </p>
                    </div>
                  </a>
                  <div>
                    <a className="articles1-a" href="">
                      COMPRAR AHORA
                    </a>
                  </div>
                </section>
                <section className="article1">
                  <a href="">
                    <img
                      src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/football_ar_fw23_boca_home_ago_tc_d_8715d2cce0.jpg"
                      alt=""
                    />
                    <div className="article1-text">
                      <h4>BOCA, PUEBLO, MUNDO.</h4>
                      <p>
                        Nueva camiseta oficial que irradia la pasión boquense y la
                        conexión con el barrio.
                      </p>
                    </div>
                  </a>
                  <div>
                    <a className="articles1-a" href="">
                      COMPRAR AHORA
                    </a>
                  </div>
                </section>
                <section className="article1">
                  <a href="">
                    <img
                      src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/Training_SS_23_Bras_Leggings_Global_Launch_HP_Teaser_Carousel_d_f08fb8cf38.jpg"
                      alt=""
                    />
                    <div className="article1-text">
                      <h4>EL SOPORTE IDEAL PARA SER VOS MISMA.</h4>
                      <p>El soporte perfecto. Sin distracciones.</p>
                    </div>
                  </a>
                  <div>
                    <a className="articles1-a" href="">
                      COMPRAR AHORA
                    </a>
                  </div>
                </section>
                <section className="article1">
                  <a href="">
                    <img
                      src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/AR_Teaser_Carrousel_Mobile_1050x1400px_d_64fa5df970.gif"
                      alt=""
                    />
                    <div className="article1-text">
                      <h4>CORRÉ A TU MANERA. 🏃&zwj;♀️💨</h4>
                      <p>Encontrá el calzado de running perfecto para vos</p>
                    </div>
                  </a>
                  <div>
                    <a className="articles1-a" href="">
                      COMPRAR AHORA
                    </a>
                  </div>
                </section>
                <section className="article1">
                  <a href="">
                    <img
                      src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/lam_ar_originals_fw23_hp_card_superstar_xlg_sustain_asset_d_e183051fa4.gif"
                      alt=""
                    />
                    <div className="article1-text">
                      <h4>Mostrá lo que te hace especial</h4>
                      <p>
                        Creadas para quienes crean, para quienes rompen las
                        reglas. Descubrí Superstar XLG.
                      </p>
                    </div>
                  </a>
                  <div>
                    <a className="articles1-a" href="">
                      COMPRAR AHORA
                    </a>
                  </div>
                </section>
                <section className="article1" id="arScroll1">
                  <a href="">
                    <img
                      src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_400,w_400/ss22_sustainability_always_on_card_hp_d_b0d1131be0.jpg"
                      alt=""
                    />
                    <div className="article1-text">
                      <h4>EL FIN DE LOS RESIDUOS PLÁSTICOS</h4>
                      <p>
                        Nuestro planeta se colapsa debido al impacto de nuestras
                        exigencias. Está en nuestras manos encontrar una solución.
                      </p>
                    </div>
                  </a>
                  <div>
                    <a className="articles1-a" href="">
                      COMPRAR AHORA
                    </a>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </article>
      </>
    );
  }