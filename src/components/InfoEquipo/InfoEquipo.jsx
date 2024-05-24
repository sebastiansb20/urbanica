import React from 'react';
import './InfoEquipo.css'
import logoLinkedin from '../../assets/images/equipo/logoLinkedin.png'

const InfoEquipo = ({nombre, linkLinkedin, infoPersona, listaInfo}) =>{
    console.log('equipo')

    return(
        <>
        <div className='dvInfoEquipo'>
            <div className='dvNombreEquipo'>
                <h3>{nombre}</h3>
                {
                    linkLinkedin != '' ? (
                        <a title='Linkedin' target='_blank' href={linkLinkedin}><img src={logoLinkedin} alt='Perfil de linkedin' width={'70'} id='imgLogo'/></a>
                    ) : (<></>)
                }
            </div>
            

            <p>{infoPersona}</p>
            <ul className='listaInfoEquipo'>
            {
                listaInfo.map( info => 
                    info.map(i =>
                        <li className='itemListaEquipo'>
                            {'- ' + i}
                        </li>
                    )

                )
            }
            </ul>
        </div>
        </>
    )

}

export default InfoEquipo;