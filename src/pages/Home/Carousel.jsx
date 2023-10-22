// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';


const Carousel = () => {
    return (
        <div>
            <Swiper
              
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide> <img src="/src/assets/image/carousel-img/carousel-1.jpg" alt="" /> </SwiperSlide>
                <SwiperSlide> <img src="/src/assets/image/carousel-img/carousel-2.jpg" alt="" /> </SwiperSlide>
                <SwiperSlide> <img src="/src/assets/image/carousel-img/carousel-3.jpg" alt="" /> </SwiperSlide>
                <SwiperSlide> <img src="/src/assets/image/carousel-img/carousel-4.jpg" alt="" /> </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Carousel;