import React from 'react'
import Carousel from '../components/Carousel'
import Testimonials from '../components/Testimonials'
import Parallex from '../components/Parallex'
import SiteContent from '../components/SiteContent'
import Pagination from '../components/Pagination'
import Carousels from '../components/Carousels'
// import Ca from '../components/Car'



const Home = () => {
  return (
    <div className='mb-5'>
        <Carousel/>
        <Testimonials/>
        <Parallex/>
        <SiteContent/>
        <Pagination/>
        {/* <Carousels/> */}
        {/* <Ca/> */}
    </div>
  )
}

export default Home
