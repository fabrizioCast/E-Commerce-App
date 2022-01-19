import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "swiper/css/zoom";

import { Navigation, Pagination, Zoom } from "swiper";
import { SliderWrapper } from "./styles";
import { SlideClose } from "./styles";

const Slider = ({ img, setShowSlider }) => {
  return (
    <SliderWrapper>
      <Swiper
        modules={[Navigation, Pagination, Zoom]}
        loop
        navigation
        pagination={{ clickable: true }}
        slidesPerView={1}
        zoom={true}
      >
        {img.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="swiper-zoom-container">
              <img src={item.url} alt="img" width="100%" height="100%" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <SlideClose onClick={() => setShowSlider(false)}>X</SlideClose>
    </SliderWrapper>
  );
};

export default Slider;
