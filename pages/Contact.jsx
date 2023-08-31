import React, {useState, useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../css/contact.css'
import rocket from '../images/rocket.png'

const Contact = () => {
  const [show, setShow] = useState('')
  // const remove = () => {
  //   let filter = show.filter(item)
  //   setShow(filter)
  //   setShow(remove)
  // }
  const handleClick = () =>{
    setShow(show)
  }
  const [fadeOut, setFadeOut] = useState(false)
      const click = () =>{
        setFadeOut(true)
        AOS.refresh()
        setShow(true)
      }
      useEffect(()=>{
    AOS.init({duration:3000});
      });

  return (
    <div>
      <div className='contact-main text-center text-white'>
      <p className='mb-5 text-bold'>Click on button shooting!</p>
      
      <div data-aos='fade-left'>
      <p><input placeholder="Name" id='contact-input'/>{show}</p>
      </div>
      <div data-aos='fade-right'>
      <p><input placeholder="Email" id='contact-input'/></p>
      </div>
      <div data-aos='fade-left'>
      <p><input placeholder="Subject" id='contact-input'/></p>
      </div>
      <div data-aos='fade-right'>
      <p><textarea placeholder="Message" id='message'/></p>
      </div>
      <div data-aos='flip-up'>
      <p><button className='button' onClick={click}>SHOOTING</button></p>
      </div>
      <div data-aos='fade-up'>
        <img src={rocket}/>
      </div>
      {show && <p className='text-white'>Your message is on it's way</p>}
      </div>
    </div>
  )
}

export default Contact