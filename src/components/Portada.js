import React from 'react'

function Portada() {
    return (
        <div className='contenedor-portada'>
            <div className='overlay'>
                <h1 data-aos="fade-up" className='titulo-portada'><strong>VetYi: </strong>Página sobre las mascotas<br />comunes y exóticas</h1>
                <p data-aos="fade-up" className='descripcion-pagina'>Dentro de esta página conocerás muchas cosas sobre tus mascotas</p>
                <a data-aos="fade-up" className='boton-conoce-mas' href='/'>Conoce más</a>
            </div>
        </div>
    )
}

export default Portada