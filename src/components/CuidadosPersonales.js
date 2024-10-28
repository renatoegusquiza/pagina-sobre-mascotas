import React from 'react'

//imagenes
import NecesidadesNutricionales from './../assets/necesidades-nutricionales.png'
import Vacunas from './../assets/vacunas.png'
import Entrenamiento from './../assets/entrenamiento.png'
import visitasAlVeterinario from './../assets/visitas-al-veterinario.png'

function CuidadosPersonales() {
    return (
        <div className='contenedor-cuidados-principales'>
            <div className='cuidados-principales'>
                <h1 data-aos="fade-up">Cuidados Principales</h1>
                <div className='seccion-cuidados-principales'>
                    <div className='cuidado-principal' data-aos="zoom-in-up">
                        <img src={NecesidadesNutricionales} alt='necesidades-nutricionales'></img>
                        <h3>Necesidades nutricionales</h3>
                    </div>
                    <div className='cuidado-principal' data-aos="zoom-in-up">
                        <img src={Vacunas} alt='vacunas'></img>
                        <h3>Vacunas</h3>
                    </div>
                    <div className='cuidado-principal' data-aos="zoom-in-up">
                        <img src={Entrenamiento} alt='entrenamiento'></img>
                        <h3>Entrenamiento</h3>
                    </div>
                    <div className='cuidado-principal' data-aos="zoom-in-up">
                        <img src={visitasAlVeterinario} alt='visitas'></img>
                        <h3>Visitas al veterinario</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CuidadosPersonales