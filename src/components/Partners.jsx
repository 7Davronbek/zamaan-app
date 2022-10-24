import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper";
import { getText } from '../locales';


const Partners = () => {
  return (
    <div className='Partners'>
      <div className="img">
        <img className='w-100' src="img/partners.png" alt="" />
      </div>
      <h2>
        {getText('beliveUs')}
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
          0: {
            slidesPerView: 1.8,
            spaceBetween: 10,
          },
          767: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          992: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper text-center"
      >
        <SwiperSlide><img src="/img/company/1.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/img/company/2.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/img/company/3.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/img/company/4.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/img/company/5.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/img/company/6.png" alt="" /></SwiperSlide>
        <SwiperSlide><img src="/img/company/7.png" alt="" /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Partners