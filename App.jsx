import React from 'react'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Shop from './pages/Shop'
import Blog from './pages/Blog'
import Categories from './pages/Categories'
import Shortcodes from './pages/Shortcodes'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Ninja from './pages/Ninja'
import Tshirt from './components/Tshirt'
import Clothing from './components/Clothing'
import Footer from './components/Footer'
import Cosmos from './pages/Cosmos'
import Right from './pages/Right'
import Login from './pages/Login'
import ScrollToTopButton from './components/ScrollToTopButton';


const App = () => {
  

  return (
    <Router>
    <div>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/categories" element={<Categories/>}/>
      <Route path="/shortcodes" element={<Shortcodes/>}/>

      <Route path="/contact" element={<Contact/>}/>
    
      <Route path="/Cosmos" element={<Cosmos/>}/>
      <Route path="/ninja" element={<Ninja/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/tshirt" element={<Tshirt/>}/>
      <Route path="/right" element={<Right/>}/>
      <Route path="/clothing" element={<Clothing/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    {/* <ScrollToTopButton /> */}
  <Footer/>

  </div>
    </Router>
  )
}

export default App
