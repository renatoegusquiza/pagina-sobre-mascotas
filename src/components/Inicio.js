import React from 'react'

//estilos
import './styles/Inicio.css'

//imagenes
import mascotas_exoticas from './../assets/video/Mascotas-exoticas.mp4'

//complementos
import Navbar from './Navbar';
import Portada from './Portada';
import Consideraciones from './Consideraciones';
import AOSWrapper from './animations/AOSWrapper';
import SobreNosotros from './SobreNosotros';
import VariedadMascotas from './VariedadMascotas';

function Inicio() {
  return (
    <AOSWrapper>
      <div className='contenedor-inicio'>
        <Navbar />
        <Portada />
        <Consideraciones />
        <SobreNosotros />
        <VariedadMascotas/>
        <div className='contenedor-presentacion-animales'>
          <div className='presentacion-animales'>
            <h1 className='titulo-presentacion-animales'>Mira este video sobre las mascotas</h1>
            <video src={mascotas_exoticas} width={'50%'} controls>
              Tu navegador no es compatible con videos HTML5
            </video>
          </div>
        </div>
      </div>
    </AOSWrapper>
  )
}

export default Inicio