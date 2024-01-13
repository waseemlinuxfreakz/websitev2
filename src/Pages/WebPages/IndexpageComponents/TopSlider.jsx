import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './TopSlider.css';
import ArtDesk from '../../../assets/img/web/parasuit.svg';
import Fire from '../../../assets/img/web/fire.svg';

export default function TopSlider() {
  return (
    <>
      <div className="topSliderWrap">
        <div className="topSliderOuter">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide> <p> <img src={Fire} alt="Fire" /> Airdrop <span>EMMET</span> Inscription <img src={Fire} alt="Fire" /></p> </SwiperSlide>
            <SwiperSlide> <p> <img src={Fire} alt="Fire" /> Airdrop <span>EMMET</span> Inscription <img src={Fire} alt="Fire" /></p> </SwiperSlide>
            <SwiperSlide> <p> <img src={Fire} alt="Fire" /> Airdrop <span>EMMET</span> Inscription <img src={Fire} alt="Fire" /></p> </SwiperSlide>
          </Swiper>
        </div>
          <img src={ArtDesk} alt="ArtDesk" className="sliderArtDesk" />
      </div>
    </>
  );
}
