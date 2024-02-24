import adidas1 from '../../assets/adidas1.svg';
import x from '../../assets/x.svg';
import right2 from '../../assets/right2.svg';
import argentina from '../../assets/argentina.svg';
import "./navBurger.css";
export function NavBurger({onoffBurger, setOnOffBurger}){
    if(onoffBurger) document.body.style.overflow = "hidden";
    return(
        <>
        <div className="cont-nav-burger">
            <nav className="nav-nav-burger">
                <a className="nav-nav-burger-logo" title='Adidas' href="/">
                    <img src={adidas1}/>
                </a>
                <button className='nav-nav-burger-exit' title='Salir' onClick={()=>{
                    setOnOffBurger(!onoffBurger)
                    document.body.style.overflow = "auto"
                }}>
                    <img src={x}/>
                </button>
            </nav>
            <ul className="nav-nav-ul">
                <li className='nav-nav-li'>
                    <button className='nav-nav-li-btn weight'>👩🏻MUJER</button>
                    <button className='nav-nav-li-btn-icon'>
                        <img src={right2} alt="" />
                    </button>
                </li>
                <li className='nav-nav-li'>
                    <button className='nav-nav-li-btn weight'>👱🏻&zwj;HOMBRE</button>
                    <button className='nav-nav-li-btn-icon'>
                        <img src={right2} alt="" />
                    </button>
                </li>
                <li className='nav-nav-li'>
                    <button className='nav-nav-li-btn weight'>👦🏻NIÑOS</button>
                    <button className='nav-nav-li-btn-icon'>
                        <img src={right2} alt="" />
                    </button>
                </li>
                <li className='nav-nav-li'>
                    <button className='nav-nav-li-btn'>⚽DEPORTES</button>
                    <button className='nav-nav-li-btn-icon'>
                        <img src={right2} alt="" />
                    </button>
                </li>
                <li className='nav-nav-li'>
                    <button className='nav-nav-li-btn'>🌍MUNDO ADIDAS</button>
                    <button className='nav-nav-li-btn-icon'>
                        <img src={right2} alt="" />
                    </button>
                </li>
            </ul>
            <div className="nav-nav-footer">
                <a className="nav-nav-footer-a" href="">
                    <img src={argentina}/> Argentina 
                </a>
            </div>
        </div>
        </>
    )
}