import React, { useState } from 'react'
import "./Navbar.css"
import { NavLink } from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'

const Navbar = () => {
    const [toggleNav,setToggleNav]=useState(true);

    const clickHandler = () =>{
        setToggleNav(!toggleNav);
    }
  return (
    <div className='navbar'>
        <div className='navbar_right'>
            <div className='navbar_logo'>
                <h1>Nasir <span>Lala</span> </h1>
            </div>
        </div>

        <div className='hamburger_icon'>
            <GiHamburgerMenu onClick={clickHandler }/>
        </div>

        <div className={toggleNav ? 'navbar_left' : 'navbar_left_toggle'}>
            <ul className='navbar_menu'>
                <li><NavLink exact to="/" activeClassName='active_navbar'>Home</NavLink></li>
                <li><NavLink exact to="/services" activeClassName='active_navbar'>Services</NavLink></li>
                <li><NavLink exact to="/about" activeClassName='active_navbar'>About</NavLink></li>
                <li><NavLink exact to="/blog" activeClassName='active_navbar'>Blog</NavLink></li>
                <li><NavLink exact to="/contact" activeClassName='active_navbar'>Contact</NavLink></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar