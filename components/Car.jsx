import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import image1 from '../images/image1.jpg'
import image2 from '../images/image2.jpg'
import image3 from '../images/image3.jpg'
import image4 from '../images/image4.jpg'
import image5 from '../images/image5.jpg'

const Car = () => {
return (
<div> 
<Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src={image1} style={{height:'200px'}}/></SwiperSlide>
      <SwiperSlide><img id='img' src={image2} style={{height:'200px'}}/></SwiperSlide>
      <SwiperSlide><img id='img' src={image3} style={{height:'200px'}}/></SwiperSlide>
      <SwiperSlide><img id='img' src={image4} style={{height:'200px'}}/></SwiperSlide>
      <SwiperSlide><img id='img' src={image5} style={{height:'200px'}}/></SwiperSlide>
      ...
    </Swiper>
</div>
)
}

export default Car
