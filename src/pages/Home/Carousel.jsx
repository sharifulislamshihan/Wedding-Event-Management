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
        <div className='relative overflow-visible'>
            <Swiper

                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide> <img src="https://i.ibb.co/jZpxcsb/carousel-1.jpg" alt="" /> </SwiperSlide>
                <SwiperSlide> <img src="https://i.ibb.co/M6VL2tg/carousel-2.jpg" alt="" /> </SwiperSlide>
                <SwiperSlide> <img src="https://i.ibb.co/FB1fhqS/carousel-3.jpg" alt="" /> </SwiperSlide>
                <SwiperSlide> <img src="https://i.ibb.co/vD09yCQ/carousel-4.jpg" alt="" /> </SwiperSlide>
                <SwiperSlide> <img src="https://i.ibb.co/4jZxgN8/carousel-5.jpg" alt="" /> </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Carousel;