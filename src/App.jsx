import React from 'react'
import { Routes, Route} from "react-router-dom";

// Components
import Navbar from './components/Navbar'
import Categories from './components/Categories'
import Footer from './components/Footer';

//Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

import './App.css'

function App() {

  return (
    <>
      <Navbar />

     <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
     </Routes>

      <Footer/>
    </>
  )
}

export default App
