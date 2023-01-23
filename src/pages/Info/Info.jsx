import React from 'react'
import Layout from '../../layout/Layout'
import './Info.css'

export default function Info() {
  return (
    <Layout>
      <div id='container-general__info'>
          <h2 id='titulo_about__info' className='animate__animated animate__fadeIn'>- Conoce todo sobre Eugenia </h2>
        <div id='container-text-qr__info'>
          <div id='container-textos__info' className='animate__animated animate__fadeIn animate__delay-1s'>
            <p id='parrafo-about__info'>Este fabuloso Software, nacio para facilitar los procesos en la vida cotidiana de los residentes. Facilitandoles la administración de sus condominios</p>
            <p id='parrafo-about__info'>Cuenta con
              módulos para gestión de quejas, control de accesos de visitas y proveedores;
              finanzas; y reservación de áreas comunes.</p>
            <p id='parrafo-about__info-2'>En este nuevo lanzamiento, proporcionaremos la funcionabilidad, para crear invitaciones para los residentes, a traves de un formulario podemos crear la invitacion; y luego enviarsela a nuestro invitado por medio de un codigo QR</p>
          </div>
          <img id='captura-qr' src="./captura-qr.png" alt="" />
        </div>
      </div>
    </Layout>
  )
}
