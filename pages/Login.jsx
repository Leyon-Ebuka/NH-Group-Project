import React from 'react'
import '../css/cosmos.css'
import '../css/login.css'
import footer1 from '../images/footer1.jpg'
import footer2 from '../images/footer2.jpg'
import footer3 from '../images/footer3.jpg'
import footer4 from '../images/footer4.jpg'
import footer5 from '../images/footer5.jpg'
import star from '../images/star.png'



const Login = () => {
  return (
   <div className='login' style={{marginBottom:'100px'}}>
    <div data-aos="fade-right">
    <div className='my-5' style={{marginRight:'70px'}}>
        <div className='products'>
        <div id='product_search'>
            <input placeholder='Search ...'/>
            <button className='product_search_button mx-1 text-white'>SEARCH</button>
        </div>
        <div id='top_rated' style={{listStyle:'none', marginBottom:'30px'}}>
        

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

    <div className='archive'style={{ marginBottom:'30px'}}>
      <h3 id='head'>Archives</h3>
      November 2020
    </div>

    <div className='categories' style={{listStyle:'none'}}>
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
    

    <div data-aos="fade-left">
      <div className='loginContainer'>
        <h1 style={{fontWeight: 'bold'}}>My account</h1>
       <h2 style={{marginTop: '1em', fontWeight: 'bold'}}>Login</h2>
        <span className="fir border border-2 p-2 border-opacity-10">
       <div className="input">
        <h6>Username Or Email address</h6>
        <input type="text" className='form-control' aria-describedby='basic-addon1' />
        <h6>Password</h6>
        <input type="password" className='form-control' aria-describedby='basic-addon1' />
        </div>
        <button className='btn btn-dark'>
            <h5>login</h5>
        </button>
        <label className='label mx-3'><input type="checkbox"/>Remember me</label>
        
        <br/>
        <a style={{marginLeft: '-0px'}} href="#">forgot password</a>
      </span>
    </div>
  </div>
    
    <div data-aos="fade-left">

    <div className='loginContainer'>
      <h1 style={{color: 'white', cursor: 'default', userSelect: 'none'}}>My account</h1>
       <h3 style={{marginTop: '1.3em', fontWeight: 'bold'}}>Register</h3>
       <span className="sec border border-2 p-2 border-opacity-10">
       <div className="input">
        <h6>Email address</h6>
        <input type="email" className='form-control'  aria-describedby='basic-addon1' />

        <h6>
        A link to set a new password will be sent to your email address. <br />

Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
        </h6>
       </div>
        <button className='btn btn-dark'>
            <h5>Register</h5>
        </button>
       </span>
    </div>
    </div>
   </div>

   
  )
}

export default Login