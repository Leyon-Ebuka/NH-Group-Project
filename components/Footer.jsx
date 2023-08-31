import React, {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import image17 from '../images/image17.jpg'
import image18 from '../images/image18.jpg'
import image19 from '../images/image19.jpg'
import image20 from '../images/image20.jpg'
import image21 from '../images/image21.jpg'
import image22 from '../images/image22.jpg'
import image23 from '../images/image23.jpg'
import image24 from '../images/image24.jpg'
import image25 from '../images/image25.jpg'
import image26 from '../images/image26.jpg'
import image27 from '../images/image27.jpg'
import image28 from '../images/image28.jpg'
import footer1 from '../images/footer1.jpg'
import footer2 from '../images/footer2.jpg'
import footer3 from '../images/footer3.jpg'
import footer4 from '../images/footer4.jpg'
import footer5 from '../images/footer5.jpg'
import facebook from '../images/facebook.png'
import twitter from '../images/twitter.png'
import pinterest from '../images/pinterest.png'
import vimeo from '../images/vimeo.png'
import youtube from '../images/youtube.png'
import instagram from '../images/instagram.png'
import linkedin from '../images/linkedin.png'
import wifi from '../images/wifi.png'

const Footer = () => {
  useEffect(()=>{
    AOS.init({duration:500});
  })
  return (
    <div>
          <div className='text-white bg-dark p-3'>
      {/* <div className=''> */}
      <div className="container d-md-flex">
        

      <div data-aos='fade-up'>
        <h3 style={{width:'50px'}} data-aos="fade-up" class='text-center mx-4 px-5'>Album Footer</h3>
      <div data-aos="fade-up">
      <div className='row row-cols-6 g-0  row-cols-md-3'>
      <a  src={image17} href={image17} class="img-fluid">
      <img id='footer_image' src={image17}></img>
    </a>
    <a  src={image18} href={image18} class="img-fluid">
      <img id='footer_image' src={image18}></img>
    </a>
      <a  src={image19} href={image19} class="img-fluid">
      <img id='footer_image' src={image19}></img>
    </a>

    <a  src={image20} href={image20} class="img-fluid">
      <img id='footer_image' src={image20}></img>
    </a>
      <a  src={image21} href={image21} class="img-fluid">
      <img id='footer_image' src={image21}></img>
    </a>
      <a  src={image22} href={image22} class="img-fluid">
      <img id='footer_image' src={image22}></img>
    </a>


    <a  src={image23} href={image23} class="img-fluid">
      <img id='footer_image' src={image23}></img>
    </a>
      <a  src={image24} href={image24} class="img-fluid">
      <img id='footer_image' src={image24}></img>
    </a>
      <a  src={image25} href={image25} class="img-fluid">
      <img id='footer_image' src={image25}></img>
    </a>


    <a  src={image26} href={image26} class="img-fluid">
      <img id='footer_image' src={image26}></img>
    </a>
      <a  src={image27} href={image27} class="img-fluid">
      <img id='footer_image' src={image27}></img>
    </a>
      <a  src={image28} href={image28} class="img-fluid">
      <img id='footer_image' src={image28}></img>
    </a>

      </div>
      </div>
</div>

      <div data-aos='fade-up'>
      <div className='recent'>
        <ul style={{listStyle: 'none'}}>
        <h3 className='text-light'>Recent Posts</h3>
            <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pin-angle-fill" viewBox="0 0 16 16">
  <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a5.927 5.927 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a5.922 5.922 0 0 1 1.013.16l3.134-3.133a2.772 2.772 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146z"/>
</svg> Model</li>
            <li> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pin-angle-fill" viewBox="0 0 16 16">
  <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a5.927 5.927 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a5.922 5.922 0 0 1 1.013.16l3.134-3.133a2.772 2.772 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146z"/>
</svg> Woman</li>
            <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pin-angle-fill" viewBox="0 0 16 16">
  <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a5.927 5.927 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a5.922 5.922 0 0 1 1.013.16l3.134-3.133a2.772 2.772 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146z"/>
</svg> Fashion</li>
            <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pin-angle-fill" viewBox="0 0 16 16">
  <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a5.927 5.927 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a5.922 5.922 0 0 1 1.013.16l3.134-3.133a2.772 2.772 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146z"/>
</svg> Elephant</li>
            <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pin-angle-fill" viewBox="0 0 16 16">
  <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a5.927 5.927 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707-.195-.195.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a5.922 5.922 0 0 1 1.013.16l3.134-3.133a2.772 2.772 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146z"/>
</svg> Mountains</li>
        </ul>
        </div>
        </div>

      <div data-aos='fade-up'>
        <div className='category'>
        <ul style={{listStyle: 'none'}}>
        <h3>Categories</h3>
            <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-folder-fill" viewBox="0 0 16 16">
  <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z"/>
</svg> Animals </li>
            <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-folder-fill" viewBox="0 0 16 16">
  <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z"/>
</svg> Cosmos</li>
            <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-folder-fill" viewBox="0 0 16 16">
  <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z"/>
</svg> Nature</li>
            <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-folder-fill" viewBox="0 0 16 16">
  <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z"/>
</svg> Other</li>
            <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-folder-fill" viewBox="0 0 16 16">
  <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z"/>
</svg> People</li>
        </ul>
        </div>
        </div>

      <div data-aos='fade-up'>
        <div className='p'>
        <ul style={{listStyle: 'none'}}>
        <h3>Products </h3>
        <div class='my-1'><li id='k'>Patient Ninja<img id='footer_products' src={footer1}/></li>
        <li>$35.00 </li></div>
        <div class='my-1'><li>Ship Your Idea <img id='footer_products' src={footer2}/></li>
        <li>$15.00</li></div>
        <div class='my-1'><li>Flying Ninja <img id='footer_products' src={footer3}/></li>
        <li class="text-decoration-line-through">$15.00</li>
        <li>$12.00</li></div>
        <div class='my-1'><li>Premium <img id='footer_products' src={footer4}/> <br/> Quality </li>
        <li class="text-decoration-line-through float-start pe-2">$15.00 </li>$12.00</div>
        <div class='my-1'><li>Woo Ninja <img id='footer_products' src={footer5}/></li>
        <li>$15.00</li></div>
        </ul>
        </div>
        </div>  

      </div>
{/* </div> */}
    </div>


        <div class='mak bg-black py-5'>
        <div className='botton_footer d-flex justify-content-center '>
        <div className='row row-md-cols-8 row-sm-cols-4'>
    <div className='col'>
        <img href="#" id='bottomfooter_img' src={facebook}/>
        <img href="#" id='bottomfooter_img' src={twitter}/>

        <img href="#" id='bottomfooter_img' src={youtube}/>

        <img href="#" id='bottomfooter_img' src={vimeo}/>
        
        <img href="#" id='bottomfooter_img' src={pinterest}/>

        <img href="#" id='bottomfooter_img' src={instagram}/>

        <img href="#" id='bottomfooter_img' src={linkedin}/>

        <img href="#" id='bottomfooter_img' src={wifi}/>
        </div>
        </div>
        </div>
        <p className=' d-flex justify-content-center m-3'>Your Custom © Copyright SEOS THEMES</p>
        </div>
  
        </div>
  )
}

export default Footer
