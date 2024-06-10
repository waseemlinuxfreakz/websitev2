import React from "react";
import "./Sidebar.css";

import Slider1 from "../../assets/img/Banner-placeholder.png";
import Slider2 from "../../assets/img/Banner-placeholder-2.png";
import Slider3 from "../../assets/img/Banner-placeholder-3.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

function SidebarSlider() {
  return (
    <div className="sidebarSliderArea">
      <Swiper
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="swiperAddSlider"
      >
        <SwiperSlide>
          <img src={Slider1} alt="Slider1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slider2} alt="Slider1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slider2} alt="Slider1" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default SidebarSlider;
