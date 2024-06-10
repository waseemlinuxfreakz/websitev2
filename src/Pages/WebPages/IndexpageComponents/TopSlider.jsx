import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./TopSlider.css";
import ArtDesk from "../../../assets/img/web/parasuit.png";
import ArtMob1 from "../../../assets/img/web/ArtMob1.png";
import ArtMob2 from "../../../assets/img/web/ArtMob2.png";
import Fire from "../../../assets/img/web/fire.svg";

export default function TopSlider() {
  // Determine whether it's a mobile device based on the screen width
  const isMobile = window.innerWidth <= 768;

  return (
    <>
      <div className="topSliderWrap">
        <div className="topSliderOuter">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 5000,
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
            <SwiperSlide>
              {" "}
              <p>
                {" "}
                <img src={Fire} alt="Fire" /> Airdrop <span>EMMET</span>{" "}
                Inscription <img src={Fire} alt="Fire" />
              </p>{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <p>
                {" "}
                <img src={Fire} alt="Fire" /> Airdrop <span>EMMET</span>{" "}
                Inscription <img src={Fire} alt="Fire" />
              </p>{" "}
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <p>
                {" "}
                <img src={Fire} alt="Fire" /> Airdrop <span>EMMET</span>{" "}
                Inscription <img src={Fire} alt="Fire" />
              </p>{" "}
            </SwiperSlide>
          </Swiper>
        </div>
        {isMobile ? null : (
          <img src={ArtDesk} alt="ArtDesk" className="sliderArtDesk" />
        )}

        <img src={ArtMob1} alt="ArtDesk" className="sliderArtMob-1" />
        <img src={ArtMob2} alt="ArtDesk" className="sliderArtMob-2" />
      </div>
    </>
  );
}
