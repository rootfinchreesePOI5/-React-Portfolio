import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
const Hero = () => {
  return (
    <div className='hero' id='home'>
      <img src={profile_img} alt="" />
      <h1><span>Im Abdiaziz Mohamed</span> , frontend Developer based in Kenya.</h1>
      <p>I'm Abdiaziz, a frontend developer based in Kenya, passionate about building dynamic and user-friendly web experiences.</p>
      <div className="hero-action">
        <button className="btn"> <AnchorLink className='anchor-link' offset={50} href='#about'>About Me </AnchorLink></button>
        <button className="btn"><AnchorLink className='anchor-link' offset={50} href='#work'>My Projects </AnchorLink></button>
      </div>
    </div>
  )
}

export default Hero
