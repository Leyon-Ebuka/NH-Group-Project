import React from 'react'
import './login.css'
import shipYouridea from '../images/shipYouridea.jpg'
import wooSingle from '../images/wooSingle.jpg'
import flyingNinja from '../images/flyingNinja.jpg'
import shipYouridea2 from '../images/shipYouridea2.jpg'
import ninjaSilhouette from '../images/ninjaSilhouette.jpg'


const Login = () => {
  return (
   <div className='login'>
    <div data-aos="fade-right">
    <div className='oth'>
      <div className='search'>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
      


       <div className="products">
       <h3>Top Rated Products</h3>

       <ul>
        <li><span style={{fontWeight: 'bold'}}> Ninja Silhouette</span>
          <p> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg> 
           <img id='rated_products' src={ninjaSilhouette} alt="" />
<p>$20.00</p>
</p>      
        </li>
        <li><span style={{fontWeight: 'bold'}}>Ship your idea</span>
           <img id='rated_products' src={shipYouridea} alt="" />
           <p>$20.00</p>
        </li>
        <li><span style={{fontWeight: 'bold'}}>Flying Ninja</span>
           <img id='rated_products' src={flyingNinja} alt="" />
          <p> <span style={{textDecorationLine: 'line-through'}}>$15.00 </span>
          $12.00</p>
        </li>
        <li><span style={{fontWeight: 'bold'}}>Woo Single #1</span>
           <img id='rated_products' src={wooSingle} alt="" />
          <p>$3.00</p>
        </li>
        <li><span style={{fontWeight: 'bold'}}>Ship your idea</span>
           <img id='rated_products' src={shipYouridea2} alt="" />
          <p>$30.00-$35.00</p>
        </li>
       </ul>
       </div>

        <div className='archives'>
          <h3>Archives</h3>
          <li style={{listStyle: "none"}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
  <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
  <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg> <span style={{fontWeight: 'bold'}}>November 2020</span></li>
        </div>
       
        <div className='categories'>
          <h3>Categories</h3>
          <ul style={{listStyle: 'none'}}>
            <li><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-folder-fill" viewBox="0 0 16 16">
  <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z"/>
</svg> <span style={{fontWeight: 'bold'}}>Animals</span>
            </li>
            <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-folder-fill" viewBox="0 0 16 16">
  <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z"/>
</svg> <span style={{fontWeight: 'bold'}}>Cosmos</span>
            </li>
            <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-folder-fill" viewBox="0 0 16 16">
  <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z"/>
</svg> <span style={{fontweight: 'bold'}}>Nature</span>
            </li>
            <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-folder-fill" viewBox="0 0 16 16">
  <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z"/>
</svg> <span style={{fontWeight: 'bold'}}>Other</span>
            </li>
            <li>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-folder-fill" viewBox="0 0 16 16">
  <path d="M9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.825a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31L.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3zm-8.322.12C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139z"/>
</svg> <span style={{fontWeight: 'bold'}}>People</span>
            </li>
          </ul>
          
         
        </div>

    </div>

    </div>
    

    <div data-aos="fade-left">
      <div className='loginContainer'>
        <h1 style={{fontWeight: 'bold'}}>My account</h1>
       <h2 style={{marginTop: '1em', fontWeight: 'bold'}}>Login</h2>
        <span className="border border-2 p-2 border-opacity-10">
       <div className="input">
        <h6>Username Or Email address</h6>
        <input type="text" className='form-control' placeholder='username' aria-describedby='basic-addon1' />
        <h6>Password</h6>
        <input type="password" className='form-control' placeholder='password' aria-describedby='basic-addon1' />
        </div>
        <button className='btn btn-dark'>
            <h5>login</h5>
        </button>
        <label className='label'>
        <input type="checkbox" />Remember me
        </label>
        <a style={{justifyContent: 'left'}} href="#">forgot password</a>
      </span>
    </div>
  </div>
    
    <div data-aos="fade-left">

    <div className='loginContainer'>
      <h1 style={{color: 'white', cursor: 'default', userSelect: 'none'}}>My account</h1>
       <h3 style={{marginTop: '1em', fontWeight: 'bold'}}>Register</h3>
       <span className="border border-2 p-2 border-opacity-10">
       <div className="input">
        <h6>Email address</h6>
        <input type="email" className='form-control' placeholder='email' aria-describedby='basic-addon1' />

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
