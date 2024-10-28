import React from 'react'

//estilos
import './styles/Inicio.css'

//imagenes

//complementos
import Navbar from './Navbar';
import Portada from './Portada';
import Consideraciones from './Consideraciones';
import AOSWrapper from './animations/AOSWrapper';
import SobreNosotros from './SobreNosotros';
import VariedadMascotas from './VariedadMascotas';
import PresentacionAnimales from './PresentacionAnimales';
import CuidadosPersonales from './CuidadosPersonales';

function Inicio() {
  return (
    <AOSWrapper>
      <div className='contenedor-inicio'>
        <Navbar />
        <Portada />
        <Consideraciones />
        <SobreNosotros />
        <VariedadMascotas />
        <PresentacionAnimales />
        <CuidadosPersonales />
      </div>
    </AOSWrapper>
  )
}

export default Inicio