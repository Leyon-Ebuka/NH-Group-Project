import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/ninja.css'
import {Link} from 'react-router-dom'
import star from '../images/star.png'
import image16 from '../images/image16.jpg'
import hoodie1 from '../images/hoodie1.jpg'
import hoodie2 from '../images/hoodie2.jpg'
import hoodie3 from '../images/hoodie3.jpg'
import hoodie4 from '../images/hoodie4.jpg'
import hoodie5 from '../images/hoodie5.jpg'
import profile1 from '../images/profile1.png'
import tote from '../images/tote-bag.png'
import eye from '../images/eye.png'

const Ninja = () => {
  const [tab, setTab] = useState('description');
  const [iterate, setIterate] = useState(0)

  const get = (t) => {
    setTab(t);
  };
  const plus = ()=>{
    if(iterate<10){
        setIterate(iterate + 1)   
    }
    
}
const minus = ()=>{
    if(iterate>0){
      setIterate(iterate - 1)  
    }
    
}
  return (
    <div className='main'>
      <div className='ninja_page'>
          <img className='ninja_image float-start me-5 my-5' src={image16} />
        <div className='ninja_content'>
        <h3>Ninja Silhouette</h3>
        <p id='rating' style={{fontSize:'20px'}}><img id='star' src={star}/><img id='star' src={star}/><img id='star' src={star}/><img id='star' src={star}/><img id='star' src={star}/> (<u>1 customer review)</u></p>
        $20.00
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
        </div>
        <div className='add d-flex'>
          <div id='plus' onClick={plus}>+</div>
          <div id='iteration'>{iterate}</div>
          <div id='minus' onClick={minus}>-</div>
          <div id='cart'>ADD TO CART</div>
        </div>
        <div className=''>
            <p className='my-4'>SKU: T-SHIRT-NINJA-SILHOUETTE Categories: <Link to="/clothing"href="#">Clothing</Link> ,  <Link to="/tshirt"href="#">T-shirts</Link>
            Description Reviews (1)</p>
        </div>
      </div>
      
      
      {/* <div className='kk'>
      <ul class="nav nav-tabs">
        <div class="nav-item">
        <a
            className='nav-link active'>{tab == 'description'}
          
            <div onClick={() => get('description')}>Description</div>
          </a>
        </div>

        <div class="nav-item">
        <a
            className='nav-link'>{tab == 'reviews'}
           
          
            <div onClick={() => get('reviews')}>Reviews(1)</div>
          </a>
        </div>
      </ul>
      <div className={tab === 'description' ? 'description' : 'description hidden'}>
      <p>Description</p>
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</div>

      <div className={tab === 'reviews' ? 'reviews' : 'reviews hidden'}>
      <h3>1 review for Ninja Silhouette</h3>
      <div className='d-flex mx-5'>
        <img id='profile' src={profile1}/>
        <div className='comment'>
          <p>thinhnqc - June 22, 2023</p>
          <p>Good products</p>
        </div>
      </div>
        Add a review
        <div>You must be logged in to post a review</div>
      </div>

      </div> */}


      <div className='kk'></div>
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link active" id='description-tab' data-bs-toggle="tab" data-bs-target="#description-tab-pane" type="button" role="tab" aria-controls="description-tab-pane" aria-selected="true">Description</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id='review-tab' data-bs-toggle="tab" data-bs-target="#review-tab-pane" type="button" role="tab" aria-controls="review-tab-pane" aria-selected="false">Reviews (1)</button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="description-tab-pane" role="tabpanel" arial-aria-labelledby="description-tab" tabIndex="0">
        <p>Description</p>
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
        </div>
        <div class="tab-pane fade" id="review-tab-pane" role="tabpanel" arial-aria-labelledby="review-tab" tabIndex="0">
        <h3>1 review for Ninja Silhouette</h3>
      <div className='d-flex mx-5 mb-3'>
        <img id='profile' src={profile1}/>
        <div className='comment'>
          <div id='ratings' style={{float:'right'}}><img id='star' src={star}/><img id='star' src={star}/><img id='star' src={star}/><img id='star' src={star}/><img id='star' src={star}/></div>
          <p>thinhnqc - June 22, 2023</p>
          <p>Good products</p>
          
        </div>
      </div>
        Add a review
        <div>You must be <u>logged in</u> to post a review.</div>
        </div>
      </div>


      <div className='like'>
      <p></p>
        <h3>You may also like...</h3>
        <div className='main-hoodie'>
          <img className='main-hoodie-one mb-3' src={hoodie1}/>
          <div id='center'>$30.00</div>
          <hr/>
          <p id='center'><img id='tote' src={tote}/>SELECT OPTIONS</p>
          <hr/>
          <p id='center'><img id='eye' src={eye}/>VIEW PRODUCT</p>
        </div>
      </div>

      <div className='related mb-5'>
        <p></p>
        <h3>Related products</h3>
        <div className='row g-0 d-flex'>
    <div className='col'>

        <div className='hoodie'>
          <img className='hoodie-one mb-3' src={hoodie4}/>
          <div id='center'>$30.00</div>
          <hr/>
          <p id='center'><img id='tote' src={tote}/>SELECT OPTIONS</p>
          <hr/>
          <p id='center'><img id='eye' src={eye}/>VIEW PRODUCT</p>
        </div>
        </div>
    <div className='col'>

        <div className='hoodie'>
          <img className='hoodie-one mb-3' src={hoodie2}/>
          <div id='center'>$30.00</div>
          <hr/>
          <p id='center'><img id='tote' src={tote}/>SELECT OPTIONS</p>
          <hr/>
          <p id='center'><img id='eye' src={eye}/>VIEW PRODUCT</p>
        </div>
        </div>
    <div className='col'>


        <div className='hoodie l'>
          <img className='hoodie-one mb-3' src={hoodie3}/>
          <div id='center'>$30.00</div>
          <hr/>
          <p id='center'><img id='tote' src={tote}/>SELECT OPTIONS</p>
          <hr/>
          <p id='center'><img id='eye' src={eye}/>VIEW PRODUCT</p>
          </div>
          </div>
    <div className='col'>

       
        <div className='hoodie l'>
          <img className='hoodie-one mb-3' src={hoodie5}/>
          <div id='center'>$30.00</div>
          <hr/>
          <p id='center'><img id='tote' src={tote}/>SELECT OPTIONS</p>
          <hr/>
          <p id='center'><img id='eye' src={eye}/>VIEW PRODUCT</p>
          </div>
          
        </div>
        </div>

      </div>


      </div>
  )
}

export default Ninja
