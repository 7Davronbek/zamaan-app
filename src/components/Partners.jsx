import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper";


const Partners = () => {
  return (
    <div className='Partners'>
      <div className="img">
        <img className='w-100' src="img/partners.png" alt="" />
      </div>
      <h2>
      Нам доверяют
      </h2>
            <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 700,
          disableOnInteraction: false,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 5,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 7,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src="img/comp1.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="img/comp2.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="img/comp3.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="img/comp4.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="img/comp5.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="img/comp6.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="img/comp7.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="img/comp8.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="img/comp9.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="img/comp10.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="img/comp11.png" alt="" /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Partners