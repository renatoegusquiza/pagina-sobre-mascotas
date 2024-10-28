import React from 'react'

import mascotas_exoticas from './../assets/video/Mascotas-exoticas.mp4'

function PresentacionAnimales() {
  return (
    <div className='contenedor-presentacion-animales'>
      <div className='presentacion-animales'>
        <h1 data-aos="fade-up" className='titulo-presentacion-animales'>Mira este video sobre las mascotas</h1>
        <video data-aos="zoom-in" src={mascotas_exoticas} width={'50%'} controls>
          Tu navegador no es compatible con videos HTML5
        </video>
      </div>
    </div>
  )
}

export default PresentacionAnimales