import React from 'react'
import '../css/testimonials.css'
import image3 from'../images/image3.jpg'
import image4 from'../images/image4.jpg'
import image5 from'../images/image5.jpg'
import image6 from'../images/image6.jpg'
import image7 from'../images/image7.jpg'
import image8 from'../images/image8.jpg'
import image9 from'../images/image9.jpg'
import image10 from'../images/image10.jpg'

const Testimonials = () => {
  return (
    <div>
      <h3 className='text-center mb-5 my-5'>Testimonials</h3>
        <div className='container row mx-md-5 px-md-5 mx-sm-5 d-flex'>
        <div class="column"><img id='testimonials_img' src={image3}/></div>
        <div class="column"><img id='testimonials_img' src={image4}/></div>
        <div class="column"><img id='testimonials_img' src={image5}/></div>
        <div class="column"><img id='testimonials_img' src={image6}/></div>
        
        <div class="column"><img id='testimonials_img' src={image7}/></div>
        <div class="column"><img id='testimonials_img' src={image8}/></div>
        <div class="column"><img id='testimonials_img' src={image9}/></div>
        <div class="column"><img id='testimonials_img' src={image10}/></div>
    </div>
        </div>
  )
}

export default Testimonials
