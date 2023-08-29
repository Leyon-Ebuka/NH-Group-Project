import React from 'react'
import image1 from '../images/image1.jpg'
import image2 from '../images/image2.jpg'
import '../css/carousel.css'


const Carousel = () => {
  return (
    <div>
      <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={image2} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block mb-5">
        <h5>Happy New Year!!!</h5>
    <button id='carousel_readmore_one'>READ MORE</button>
      </div>
    </div>
    <div class="carousel-item">
      <img src={image1} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Home Page Slider</h5>
        <button id='carousel_readmore_one'>READ MORE</button>
      </div>
    </div>
   
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next" >
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
  </button>
</div>
    </div>
  )
}

export default Carousel
