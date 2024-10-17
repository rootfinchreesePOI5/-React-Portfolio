import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'

const Navbar = () => {
    return (
        <div className='navbar'>
            <img src={logo} alt="" />
            <ul className='nav-Menu'>
                <a href="#home">Home</a>
                <a href="#aboutme">About Me</a>
                <a href="#projects">Projects</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#contact">Contact Me</a>
            </ul>
            <div className="nav-connect">
                Connect With Me
            </div>
        </div>
    )
}

export default Navbar
