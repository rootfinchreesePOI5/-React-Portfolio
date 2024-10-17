import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
const Hero = () => {
  return (
    <div className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>Im Abdiaziz Mohamed</span> , frontend Developer based in Kenya.</h1>
      <p>I'm Abdiaziz, a frontend developer based in Kenya, passionate about building dynamic and user-friendly web experiences.</p>
      <div className="hero-action">
        <a href="#about" className="btn">About Me</a>
        <a href="#projects" className="btn">My Projects</a>
      </div>
    </div>
  )
}

export default Hero
