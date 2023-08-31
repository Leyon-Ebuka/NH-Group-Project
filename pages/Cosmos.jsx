import React from 'react'
import '../css/cosmos.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import star from '../images/star.png'
import satelite from '../images/satelite.jpg'
import moon from '../images/moon.jpg'
import landscape from '../images/landscape.jpg'
import stars from '../images/stars.jpg'
import astronaut from '../images/astronaut.jpg'

import footer1 from '../images/footer1.jpg'
import footer2 from '../images/footer2.jpg'
import footer3 from '../images/footer3.jpg'
import footer4 from '../images/footer4.jpg'
import footer5 from '../images/footer5.jpg'

import { AiOutlineCalendar } from 'react-icons/ai';
import { FaUserTie } from 'react-icons/fa';
import { AiFillFolderOpen } from 'react-icons/ai';
import { FaCommentAlt } from 'react-icons/fa';

const Cosmos = () => {
  return (
    <div className='k my-5 d-md-flex' style={{marginBottom:'200px'}}>

      <div data-aos='fade-right'>
          <div className='my-5' style={{marginRight:'70px'}}>
        <div className='products'>
        <div id='product_search'>
            <input placeholder='Search ...'/>
            <button className='product_search_button mx-1 text-white'>SEARCH</button>
        </div>
        </div>

      <div data-aos='fade-right'>
        <div id='top_rated' style={{listStyle:'none'}}>
        

          <h3 id='head'>Top rated products</h3>
          {/* <Link to="/Ninja" className="nav-link active" aria-current="page"  href="#">Ninja Shiloutte</Link > */}
          
          
          <div class='my-1'><li id='product' style={{fontWeight: 'bold'}}>Ninja Silhoutte<img id='product-image' src={footer1}/></li>
          <img id='star' src={star}/>
          <img id='star' src={star}/>
          <img id='star' src={star}/>
          <img id='star' src={star}/>
          <img id='star' src={star}/>
        <li>$20.00 </li></div>
        <div class='my-1'><li style={{fontWeight: 'bold'}}>Ship Your Idea <img id='product-image' src={footer2}/></li>
        <li>$20.00</li></div>
        <div class='my-1'><li style={{fontWeight: 'bold'}}>Flying Ninja <img id='product-image' src={footer3}/></li>
        <li class="text-decoration-line-through float-start" style={{marginRight:'5px'}}>$15.00</li>$12.00</div>
        <div class='my-1'><li style={{fontWeight: 'bold'}}>Woo Single #1 <img id='product-image' src={footer4}/></li>
        <li>$3.00</li></div>
        <div class='my-1'><li style={{fontWeight: 'bold'}}>Ship Your Idea<img id='product-image' src={footer5}/></li>
        <li>$30.00 - $35.00</li></div>
      </div>
    </div>
    </div>

    <div data-aos='fade-right'>
    <div className='archive'>
      <h3 id='head'>Archives</h3>
      November 2020
    </div>

    <div className='categories' style={{listStyle:'none', marginBottom:'30px'}}>
      <h3 id='head' style={{paddingBottom:'10px'}}>Categories</h3>
        <li style={{paddingBottom:'10px'}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-folder-fill" viewBox="0 0 16 16">
          <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z"/>
        </svg> Animals </li>
         <li style={{paddingBottom:'10px'}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-folder-fill" viewBox="0 0 16 16">
          <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z"/>
        </svg> Cosmos</li>
          <li style={{paddingBottom:'10px'}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-folder-fill" viewBox="0 0 16 16">
          <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z"/>
        </svg> Nature</li>
         <li style={{paddingBottom:'10px'}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-folder-fill" viewBox="0 0 16 16">
          <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z"/>
        </svg> Other</li>
        <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-folder-fill" viewBox="0 0 16 16">
          <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z"/>
        </svg> People</li>
    </div>
      </div>
      </div>
      
      
      <div data-aos='fade-left'>
      <div className='satelite'>
          <h3 style={{textAlign:'center', fontWeight:'bold'}}>Category: Cosmos</h3>

         <h3 style={{fontWeight: 'bold'}}>Satelite</h3>
        <div className='flex d-md-flex'>
          <img class='images mb-4' src={satelite}/>
          <p>What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make <p><button id='btn'>READ MORE</button></p></p>


        </div>
        <hr/>
        <AiOutlineCalendar/> November 16, 2020  <FaUserTie/> administrator  <AiFillFolderOpen/> Cosmos, Other
        <hr/>

      <div data-aos='fade-left'>
        <h3 style={{fontWeight: 'bold'}}>Moon</h3>
        <div className='flex d-md-flex'>
          <img class='images mb-4' src={moon}/>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. <p><button id='btn'>READ MORE</button></p></p>
        </div>
       <hr/>
        <AiOutlineCalendar/> November 16, 2020  <FaUserTie/> administrator  <AiFillFolderOpen/> Cosmos, Other
        <hr/>
        </div>
        
      <div data-aos='fade-left'>
        <h3 style={{fontWeight: 'bold'}}>landscape</h3>
        <div className='flex d-md-flex'>
          <img class='images landscape mb-4' src={landscape}/>
          <p>Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney <p><button id='btn'>READ MORE</button></p></p>
        </div>
        <hr/>
        <AiOutlineCalendar/> November 16, 2020  <FaUserTie/> administrator  <AiFillFolderOpen/> Cosmos, Other <FaCommentAlt/> Leave a Comment
        <hr/>
        </div>

      <div data-aos='fade-left'>
        <h3 style={{fontWeight: 'bold'}}>Stars</h3>
        <div className='flex d-md-flex'>
          <img class='images mb-4' src={stars}/>
          <p>Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney <p><button id='btn'>READ MORE</button></p></p>
        </div>
        <hr/>
        <AiOutlineCalendar/> November 16, 2020  <FaUserTie/> administrator  <AiFillFolderOpen/> Cosmos, Other <FaCommentAlt/> Leave a Comment
        <hr/>
        </div>

      <div data-aos='fade-left'>
        <h3 style={{fontWeight: 'bold'}}>Astronaut</h3>
        <div className='flex d-md-flex'>
          <img class='images mb-4' src={astronaut}/>
          <p>What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make <p><button id='btn'>READ MORE</button></p></p>
        </div>
        <hr/>
        <AiOutlineCalendar/> November 16, 2020  <FaUserTie/> administrator  <AiFillFolderOpen/> Cosmos, Other <FaCommentAlt/> Leave a Comment
        <hr/>
      </div>
      </div>
     </div>

 
    </div>
  )
}

export default Cosmos
