import React, { useState, useEffect } from 'react';
import rightarrow from '../../assets/rightarrow.svg';

export function Content1() {
  const [imageSrc, setImageSrc] = useState('');
  const imageUrlLarge = "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/football_fw23_crazyfast_launch_hp_mh_large_d_f931f61def.jpg";
  const imageUrlSmall = "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_960,w_960/football_fw23_crazyfast_launch_hp_mh_large_t_60f1e3c29a.jpg";
  const imageUrlSmall2 = "https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_600,w_600/football_fw23_crazyfast_launch_hp_mh_large_m_a4c842e70c.jpg";
  useEffect(() => {
    const handleChangeImage = () => {
      if(window.innerWidth <= 599){
        setImageSrc(imageUrlSmall2);
      }else{
        setImageSrc(imageUrlSmall)
      }
      if(window.innerWidth <= 959){
        setImageSrc(imageUrlSmall);
      } else {
        setImageSrc(imageUrlLarge);
      }
    };

    handleChangeImage();

    window.addEventListener('resize', handleChangeImage);

    return () => {
      window.removeEventListener('resize', handleChangeImage);
    };
  }, [imageUrlLarge, imageUrlSmall, imageUrlSmall2]);

  return (
    <>
      <section className="content-header">
        <div className="flex-header">
          <div className="header">
            <h1>PACK CRAZYRUSH</h1>
            <p>Sentí la energía</p>
            <div className="flex-header-a">
              <a className="header-a ll l2" href='/botines_pack'>
                COMPRAR AHORA
                <img className='ee' src={rightarrow} alt="" />
              </a>
            </div>
          </div>
        </div>
        <img className='content-header-img' src={imageSrc} alt="" id='ht785' />
      </section>
    </>
  );
}

function ErrorInfo(){
  return(
    <>
    <div className='cont-error-info'>
      <h1 className='error-info-title'>No se encontro la dirección</h1>
      <button className='error-info-btn'>¡ESTA BIEN!</button>
    </div>
    </>
  )
}