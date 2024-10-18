import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/footer_logo.svg'
import user_icon from '../../assets/user_icon.svg'
const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={footer_logo} alt="" />
                    <p>Iam a Frontend developer from , USA with 10 years of experience in companies like Microsoft, Tesla and Apple</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder='Enter Your Email' />
                    </div>
                    <div className="footer-subscribe">
                        Subscribe
                    </div>
                </div>
            </div>

            <hr />

            <div className="footer_bottom">
                <div className="footer_bottom_left">
                    @ 2023 Abdiaziz Mohamed.All rights Reserved
                </div>
                <div className="footer_bottom_right">
                    <p>Term of Servces</p>
                    <p>Privacy policy</p>
                    <p>Connect with Me</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
