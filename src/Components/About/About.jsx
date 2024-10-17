import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile from '../../assets/profile_img.svg'
const About = () => {
  return (
    <div className='about'> 
    <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
    </div>
    <div className="about-section">
        <div className="about-1">
        <div className="left">
            <img src={profile} alt="" />
        </div>
        <div className="right">
            <div className="about-para">
                <p>I'm Abdiaziz, a frontend developer from Kenya with a focus on creating seamless, interactive websites.</p>
                <p>With a strong passion for coding, I continuously learn and adapt to new technologies and trends in web development.</p>
            </div>
            <div className="skills">
                <div className="about_skill"><p>Html & CSS</p><hr style={{width:"50%"}} /></div>
                <div className="about_skill"><p>React Js</p><hr style={{width:"70%"}} /></div>
                <div className="about_skill"><p>JavaScript</p><hr style={{width:"60%"}} /></div>
                <div className="about_skill"><p>Next js</p><hr style={{width:"50%"}} /></div>
            </div>
        </div>
        </div>
        <div className="achievements">
            <div className="about-achievements">
                <h1>10+</h1>
                <p>Years of Experience</p>
            </div>
            <hr />
            <div className="about-achievements">
                <h1>90+</h1>
                <p>Projects Completed</p>
            </div>
            <hr />
            <div className="about-achievements">
                <h1>15+</h1>
                <p>Happy Clients</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default About
