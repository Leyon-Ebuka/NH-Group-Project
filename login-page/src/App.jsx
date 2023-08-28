import React from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import Contact from './pages/Contact'
import About from './pages/About'
import Services from './pages/Services'
import Register from './pages/Register'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from './components/footer'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <Router>
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      <Footer/>
    </div>
    </Router>
  )
}

export default App
