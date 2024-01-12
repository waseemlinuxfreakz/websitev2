import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './NetworkSlider.css';

import Network1 from '../../../assets/img/web/network/network-1.svg';
import Network2 from '../../../assets/img/web/network/network-2.svg';
import Network3 from '../../../assets/img/web/network/network-3.svg';
import Network4 from '../../../assets/img/web/network/network-4.svg';
import Network5 from '../../../assets/img/web/network/network-5.svg';
import Network6 from '../../../assets/img/web/network/network-6.svg';
import Network7 from '../../../assets/img/web/network/network-7.svg';
import Network8 from '../../../assets/img/web/network/network-8.svg';
import Network9 from '../../../assets/img/web/network/network-9.svg';
import Network10 from '../../../assets/img/web/network/network-10.svg';
import Network11 from '../../../assets/img/web/network/network-11.svg';
import Network12 from '../../../assets/img/web/network/network-12.svg';
import Network13 from '../../../assets/img/web/network/network-13.svg';

export default function NetworkSlider() {
  return (
    <>
      <div className="networkSliderWrap">
        <div className="container">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper networkSlider"
          >
            <SwiperSlide><img src={Network1} alt="Nwtwork" /></SwiperSlide>
            <SwiperSlide><img src={Network2} alt="Nwtwork" /></SwiperSlide>
            <SwiperSlide><img src={Network3} alt="Nwtwork" /></SwiperSlide>
            <SwiperSlide><img src={Network4} alt="Nwtwork" /></SwiperSlide>
            <SwiperSlide><img src={Network5} alt="Nwtwork" /></SwiperSlide>
            <SwiperSlide><img src={Network6} alt="Nwtwork" /></SwiperSlide>
            <SwiperSlide><img src={Network7} alt="Nwtwork" /></SwiperSlide>
            <SwiperSlide><img src={Network8} alt="Nwtwork" /></SwiperSlide>
            <SwiperSlide><img src={Network9} alt="Nwtwork" /></SwiperSlide>
            <SwiperSlide><img src={Network10} alt="Nwtwork" /></SwiperSlide>
            <SwiperSlide><img src={Network11} alt="Nwtwork" /></SwiperSlide>
            <SwiperSlide><img src={Network12} alt="Nwtwork" /></SwiperSlide>
            <SwiperSlide><img src={Network13} alt="Nwtwork" /></SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
