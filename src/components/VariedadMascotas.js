import React from 'react'

//componentes
import SwiperAnimalesComunes from './animations/SwiperAnimalesComunes';
import SwiperAnimalesExoticos from './animations/SwiperAnimalesExoticos';

function VariedadMascotas() {
    return (
        <div className='contenedor-variedad-mascotas'>
            <div className='variedad-mascotas'>
                <h2 data-aos='fade-up'>Podrás encontrar variedad de mascotas</h2>
                <div className='contenedor-swipers'>
                    <section>
                        <h1 data-aos='fade-up' className='mascotas-comunes-titulo'>Mascotas comunes</h1>
                        <SwiperAnimalesComunes />
                    </section>
                    <section>
                        <h1 data-aos='fade-up' className='mascotas-exoticas-titulo'>Mascotas exóticas</h1>
                        <SwiperAnimalesExoticos />
                    </section>
                </div>
            </div>
        </div>
    )
}

export default VariedadMascotas