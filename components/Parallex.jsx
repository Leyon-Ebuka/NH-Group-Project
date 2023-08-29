import React from 'react'
import parallex_image from "../Images/parallex-image.jpg"
import "../css/Parallex.css"

const Parallex = () => {

  return (
    <div className='parallex_content' style={{ backgroundImage: `url(${parallex_image})` }}>
            <h1 className='parallex_text'>Parallex Image</h1>
    </div>
  )
}

export default Parallex



  