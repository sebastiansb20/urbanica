import React from 'react';
import NavBar from '../../components/navbar/Navbar'
import './Equipo.css'
import imgEquipoUrbanicaUruguay from '../../assets/images/equipo/equipoUrbanica.jpg'
import InfoEquipo from '../../components/InfoEquipo/InfoEquipo'
// import { GiConsoleController } from 'react-icons/gi';
// import equipoTextos from '../../assets/text/equipoTextos.js';
import Footer from '../../components/Footer/Footer'

const nombre = ['Arq. Sergio Maceira Failache','Arq. Victoria Bidegain Thomson','Arq. Lic.DP. Lorena Díaz Grossy', 'Arq. Gimena Rojas Hernández'];



const Equipo = () =>{
    
    return(
        <>
        <NavBar />

        <div className='dvSeccionEquipo'>
            <h1>NUESTRO EQUIPO</h1>
            <img src={imgEquipoUrbanicaUruguay} alt='UrbanicaUruguayEquipo' id='imgEquipo' />

            <h3>Somos un equipo comprometido y apasionado, listo para enfrentar <br />desafíos y lograr resultados excepcionales juntos.</h3>
        </div>
        <InfoEquipo nombre={nombre[0]} linkLinkedin={listaLinkedin[0]} infoPersona={infoPersona[0]} listaInfo={listaInfo[0]}/>
        <hr className='hr'/>
        <InfoEquipo nombre={nombre[1]} linkLinkedin={listaLinkedin[1]} infoPersona={infoPersona[1]} listaInfo={listaInfo[1]}/>
        <hr className='hr'/>
        <InfoEquipo nombre={nombre[2]} linkLinkedin={listaLinkedin[2]} infoPersona={infoPersona[2]} listaInfo={listaInfo[2]}/>
        <hr className='hr'/>
        <InfoEquipo nombre={nombre[3]} linkLinkedin={listaLinkedin[3]} infoPersona={infoPersona[3]} listaInfo={listaInfo[3]}/>


        <Footer />
        </>
    )
}


const infoPersona = [
    'arquitecto desde 1997',
    'arquitecta desde 2012',
    'arquitecta desde 2014 - licenciada en diseño de paisaje desde 2022',
    'arquitecta desde 2019'
]


const listaInfo = [
    [
        [
            'Egresado en Facultad de Arquitectura, Universidad de la República Oriental del Uruguay en el año 1997.',
            'Fue docente Grado 2, en taller de expresión gráfica en UDELAR y UDE.',
            '40 años de experiencia de trabajo en estudios de arquitectura, especializado en grandes PROYECTOS EDILICIOS, desarrollados en la zona de Punta del Este y Maldonado, Uruguay.',
            'Corresponsable del área de Diseño de Proyectos del estudio.'
        ]        
    ],
    [
        [
            'Egresada de Facultad de Arquitectura, Universidad de la República Oriental del Uruguay en el año 2012.',
            '11 años de experiencia de trabajo como DIRECTORA, en estudio MVBT arquitectura, en San José. ',
            'Cofundadora y Arquitecta Asesora de cooperativas de vivienda en el Instituto de Asistencia Técnica INCUBA.',
            'Colaboradora en diversos planes de Urbanos en la Intendencia de Montevideo y MVOTMA.',
            'Corresponsable del área de Diseño de Proyectos, Desarrollos Inmobiliarios y Gestión de Obras.'
        ]
    ],
    [
        [
            'Egresada como Arquitecta en 2014, de Facultad de Arquitectura, Universidad de la República Oriental del Uruguay.',
            'Egresada como Licenciada en Diseño de Paisaje, en 2022, de Centro Universitario Regional Este, Universidad de la República Oriental del Uruguay. ',
            '9 años de experiencia de trabajo como DIRECTORA, en estudio MADI arquitectura y paisaje, en Maldonado.',
            'Responsable del área de Diseño de Proyectos de Paisaje y Arquitectura Sustentable. Corresponsable del área de Desarrollos Inmobiliarios.'
        ]
    ],
    [
        [
            'Egresada de Facultad de Arquitectura, Universidad de la República Oriental del Uruguay en el año 2019.',
            '4 años de experiencia de trabajo como ARQUITECTA INDEPENDIENTE, en estudio MVBT arquitectura, en San José. ',
            'Arquitecta Asesora de cooperativas de vivienda en el Instituto de Asistencia Técnica INCUBA.',
            'Corresponsable del área de Gestión, Administración y Desarrollo de Obras.'
        ]
    ]
]

const listaLinkedin = [
    '',
    'https://www.linkedin.com/in/mar%C3%ADa-victoria-bidegain-thomson-0a889375/',
    'https://www.linkedin.com/in/lorena-d%C3%ADaz-grossy-a3906034/',
    'https://www.linkedin.com/in/gimena-rojas-929b33108/'
]

export default Equipo;
