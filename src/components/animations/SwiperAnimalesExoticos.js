import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'

import slide_image from './../../assets/cabra-swiper.jpeg'
import slide_image2 from './../../assets/gineta-swiper.jpeg'
import slide_image3 from './../../assets/cuy-swiper.jpeg'
import slide_image4 from './../../assets/serpiente-swiper.jpeg'
import slide_image5 from './../../assets/gecko-swiper.jpeg'
import slide_image6 from './../../assets/erizo-swiper.jpeg'
import slide_image7 from './../../assets/tarantula-swiper.jpeg'

function SwiperAnimalesExoticos() {
  return (
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      }}
      pagination={{
        el: '.swiper-pagination',
        clickable: true,
      }}
      navigation={{
        nextEl: '.swiper-boton-next',
        prevEl: '.swiper-boton-prev',
        clickable: true,
      }}
      modules={[EffectCoverflow, Pagination, Navigation]}

      data-aos='fade-up'
      className='swiper-contenedor'
    >
      <SwiperSlide className='swiper-slide'>
        <img src={slide_image} alt='perro-swiper' />
      </SwiperSlide>
      <SwiperSlide className='swiper-slide'>
        <img src={slide_image2} alt='gato-swiper' />
      </SwiperSlide>
      <SwiperSlide className='swiper-slide'>
        <img src={slide_image3} alt='conejo-swiper' />
      </SwiperSlide>
      <SwiperSlide className='swiper-slide'>
        <img src={slide_image4} alt='pez-dorado-swiper' />
      </SwiperSlide>
      <SwiperSlide className='swiper-slide'>
        <img src={slide_image5} alt='huron-swiper' />
      </SwiperSlide>
      <SwiperSlide className='swiper-slide'>
        <img src={slide_image6} alt='perico-swiper' />
      </SwiperSlide>
      <SwiperSlide className='swiper-slide'>
        <img src={slide_image7} alt='mini-pig-swiper' />
      </SwiperSlide>
      <div className='controlador-slider'>
        {/*<div className='swiper-boton-prev slider-arrow'>
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className='swiper-boton-next slider-arrow'>
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>*/}
        <div className='swiper-pagination'></div>
      </div>
    </Swiper>
  )
}

export default SwiperAnimalesExoticos