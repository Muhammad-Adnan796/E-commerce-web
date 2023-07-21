import { SliderProducts } from "../../data/products";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// imports of swiper slider
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Slider.css";

function Slider() {
  const swiperSetting = {
    modules: [Navigation, Pagination],
    spaceBetween: 40,
    slidesPerView: 3,
    slidesPerGroup: 1,
    navigation: true,
    className: "mySwiper",
    loop: true,
    breakpoints:{
      // when window width is >= 0px
      0: {
       slidesPerView: 1,
     },
      // when window width is >= 440px
      440: {
       slidesPerView: 2,
     },
     // when window width is >= 640px
     640: {
       slidesPerView: 3,
     },
     // when window width is >= 768px
     768: {
       slidesPerView: 3,
     },
   }
  };

  return (
    <>
      <div className="s-container">
        <Swiper
          {...swiperSetting}
         
        >
          {SliderProducts.map((slide, i) => (
            <SwiperSlide>
              <div className="left-s" key={i}>
                <div className="name">
                  <span> {slide.name} </span>
                  <span> {slide.detail} </span>
                </div>

                <span>{slide.price}$</span>
                <div>Shop now</div>
              </div>
              <img src={slide.img} alt="product" className="img-p" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Slider;
