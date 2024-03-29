import React, {useState} from 'react';
import style from './Navbar.module.css'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {

    const [nav, setNav] = useState(false);


    return (
        <>
        <header className={style.navbar}>
            <nav>
                <ul className={ nav ? [style.menu, style.active].join(' ') : style.menu}>
                    <li>
                        <a>INICIO</a>
                    </li>
                    <li>
                        <a>PROYECTOS</a>
                    </li>
                    <li>
                        <a>EQUIPO</a>
                    </li>
                    <li>
                        <a>CONTACTO</a>
                    </li>
                </ul>
            </nav>

            <div onClick={ ()=> setNav(!nav)}  className={style.mobile_btn}>
            {
                nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />
            } 
               
            </div>

        </header>
        </>
    )
}

export default Navbar;

/*



        */