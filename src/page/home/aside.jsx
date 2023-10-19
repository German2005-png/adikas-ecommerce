import rightarrowBlack from '../../assets/rightarrowBlack.svg';
import React, {useState, useEffect} from 'react';
export function Aside() {
  const imageAsideLarge = "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/football_ar_fw23_inter_miami_mh_large_d_f01c978c17.jpg";

  const imageAsideURLSmall = "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_960,w_960/football_ar_fw23_inter_miami_mh_large_t_ce8f61d05f.jpg";
  
  const imageAsideURLSmall2 = "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_600,w_600/football_ar_fw23_inter_miami_mh_large_m_5ba23e3634.jpg";
  const [imageAside, setimageAside] = useState('');
  useEffect(()=>{
    const handleAsideImage = ()=> {
      if(window.innerWidth <= 599){
        
        setimageAside(imageAsideURLSmall2)
      }
      else if(window.innerWidth <= 959){
        setimageAside(imageAsideURLSmall)
      }else{
        setimageAside(imageAsideLarge)
      }
    }
    handleAsideImage()
    window.addEventListener("resize", handleAsideImage)
  },[imageAsideLarge, imageAsideURLSmall, imageAsideURLSmall2])
    return (
      <>
        <aside className="content-aside">
          <div className="flex-aside">
            <div className="aside">
              <h1>MESSI ES INEVITABLE</h1>
              <p>
                Colección Messi - Inter Miami
              </p>
              <div className="flex-aside-a">
                <a className="aside-a ff" href="">
                  COMPRAR AHORA
                  <img src={rightarrowBlack} alt="" />
                </a>
              </div>
            </div>
          </div>
          <img
          className='content-aside-img'
            src={imageAside}
            alt=""
          />
        </aside>
      </>
    );
  }