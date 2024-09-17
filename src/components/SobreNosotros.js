import React from 'react'

//imagenes
import mascotas from '../assets/mascotas.jpg'

function SobreNosotros() {
    return (
        <div className='contenedor-sobre-nosotros'>
            <div className='sobre-nosotros'>
                <h1 data-aos='fade-up'>¿Qué es VetYi?</h1>
                <p data-aos='fade-up'>
                    Es una plataforma que funciona como un medio informacion sobre servicios veterinarios, que busca brindar a los dueños de mascotas, tanto comunes como exóticas, una información adicional sobre estas y como pueden llevar una buena vida junto a sus "pequeños".
                </p>
            </div>
            <img data-aos='zoom-in-right' src={mascotas} alt='mascotas' className='imagen-mascotas' />
            {/*<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='primer-wave'>
          <path fill="#e0e0e0" fill-opacity="1" d="M0,64L48,80C96,96,192,128,288,154.7C384,181,480,203,576,186.7C672,171,768,117,864,122.7C960,128,1056,192,1152,197.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='segundo-wave'>
          <path fill="#e0e0e0" fill-opacity="1" d="M0,64L48,80C96,96,192,128,288,154.7C384,181,480,203,576,186.7C672,171,768,117,864,122.7C960,128,1056,192,1152,197.3C1248,203,1344,149,1392,122.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>*/}
        </div>
    )
}

export default SobreNosotros