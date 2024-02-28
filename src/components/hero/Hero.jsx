import React from 'react';
import style from './Hero.module.css';
import logoUrbanica from '../../assets/logoUrbanica.png';

const Hero = ()=> {


    return (
        <div className={style.heroContainer}>
            <div className={style.hero}>
              <img src={logoUrbanica} className={style.imagenHero} />
            </div>
        </div>
    )
}

export default Hero;