import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'
import user from '../images/user.png'


const Navbar = () => {
  return (
    <div>
<nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container-fluid d-flex">
    {/* <Link to="/" className="navbar-brand" href="#"></Link > */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/" className="nav-link active dropdown-toggle" aria-current="page"  href="#"><div></div>Home</Link >
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Sample 1</a></li>
            <li><a className="dropdown-item" href="#">Level 1</a></li>
            <li><a className="dropdown-item" href="#">Level 1</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link to="/shop" className="nav-link dropdown-toggle" href="#" aria-expanded="false">Shop</Link >
        <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Product Page-Full Width</a></li>
            <li><a className="dropdown-item" href="#">Product Page-Left Sidebar</a></li>
            <li><a className="dropdown-item" href="#">Product Page-Right Sidebar</a></li>
          </ul>
        </li>
        <li className="nav-item">
        <Link to="/shortcodes" className="nav-link dropdown-toggle" href="#">Shortcodes</Link >
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Gallery</a></li>
            <li><a className="dropdown-item" href="#">Price List</a></li>
            <li><a className="dropdown-item" href="#">Image Slider</a></li>
            <li><a className="dropdown-item" href="#">Testimonials</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link to="/blog" className="nav-link dropdown-toggle">Blog</Link >
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Right Sidebar</a></li>
            <li><a className="dropdown-item" href="#">Left Sidebar</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link to="/categories" className="nav-link dropdown-toggle">Categories</Link >
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Nature</a></li>
            <li><a className="dropdown-item" href="#">People</a></li>
            <li><a className="dropdown-item" href="#">Cosmos</a></li>
            <li><a className="dropdown-item" href="#">Animals</a></li>
            <li><a className="dropdown-item" href="#">Others</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">Contact</Link >
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
      <div className='text-white'><img className='user mx-2' src={user}/><span>login/register</span> </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar