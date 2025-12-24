import React from 'react'
import { Routes, Route} from "react-router-dom";

// Components
import Navbar from './components/Navbar'
import Categories from './components/Categories'
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

//Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import CategoryPage from './pages/CategoryPage';

import './App.css'

function App() {

  return (
    <>
    <ScrollToTop />
      <Navbar />

     <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />

        <Route path='/:category' element={<CategoryPage />} />
        <Route path='/:category/:subCategory' element={<CategoryPage />} />

     </Routes>

      <Footer/>
    </>
  )
}

export default App
