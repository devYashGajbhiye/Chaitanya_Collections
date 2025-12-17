import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { FiUser, FiHeart, FiShoppingBag, FiSearch, FiChevronDown } from 'react-icons/fi'
import "../styles/Navbar.css";
import logo from "../assets/images/logo.png";
import MegaMenu from '../components/MegaMenu';
import megaMenuData from '../data/megaMenuData';
const Navbar = () => {
  const  [showLogin, setShowLogin] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");


  const wishlistCount = 2;
  const cartCount = 3;

  const suggestions = ["T-Shirts", "Jeans", "Sneakers", "Dresses", "Jackets", "Men Shirts","Women Sarees","Kids Wear", "Traditional Kurta"];

  return (
    <div>
      <header className='navbar-wrapper'>

        <div className='top-nav'>
          <img src={logo}  alt='Chaitanya Collection' className='logo-img'/>

          <div className='search-box'>
            <FiSearch className='search-icon'/>
            <input type='text' placeholder='What are you looking for'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false),200)}
            />

            {showSuggestions && (
               <div className="search-suggestions">
                  {suggestions
                    .filter(item =>
                      item.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((item, index) => (
                  <div
                    key={index}
                    className="suggestion-item"
                    onMouseDown={() => {
                      setSearchTerm(item);
                      setShowSuggestions(false);
                    }}
                  >
                  {item}
                      </div>
                      ))}
                  </div>
              )}
              </div>

          <div className='nav-icons'>
            <div className='icon login'
            onMouseEnter={() => setShowLogin(true)}
            onMouseLeave={() => setShowLogin(false)}
            >
              <FiUser/>
              <span>Login</span>
              <FiChevronDown />

              {showLogin && (
                <div className='dropdown-menu'>
                  <a href='#'>Login</a>
                  <a href='#'>Register</a>
                  <a href='#'>My Orders</a>
                </div>
                )}
            </div>

            <div className="icon badge-container">
                <FiHeart />
                <span className="badge">{wishlistCount}</span>
            </div>

            <div className="icon badge-container">
               <FiShoppingBag />
               <span className="badge">{cartCount}</span>
            </div>

            
          </div>
        </div>


        <nav className='bottom-nav'>
         <div
  className="nav-item-container"
  onMouseEnter={() => setActiveMenu("men")}
  onMouseLeave={() => setActiveMenu(null)}
>
  <NavLink to="/men">Men</NavLink>
  {activeMenu === "men" && (
    <MegaMenu data={megaMenuData.men}  visible={true}/>
  )}
</div>

<div
  className="nav-item-container"
  onMouseEnter={() => setActiveMenu("women")}
  onMouseLeave={() => setActiveMenu(null)}
>
  <NavLink to="/women">Women</NavLink>
  {activeMenu === "women" && (
    <MegaMenu data={megaMenuData.women} visible={true}/>
  )}
</div>

<div
  className="nav-item-container"
  onMouseEnter={() => setActiveMenu("kids")}
  onMouseLeave={() => setActiveMenu(null)}
>
  <NavLink to="/kids">Kids</NavLink>
  {activeMenu === "kids" && (
    <MegaMenu data={megaMenuData.kids} visible={true} />
  )}
</div>


            <span className='divider'>|</span>

            <NavLink to='/stylehub' className="highlight">STYLE HUB</NavLink>
            <NavLink to='/bargains' className="bargain">BARGAINS</NavLink>
            <NavLink to='/luxe' className="luxe">LUXE</NavLink>
        </nav>

      </header>
    </div>
  )
}

export default Navbar
