import React from 'react'
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Laborum omnis eos delectus doloribus
                     quaerat sapiente nisi culpa qui quod cupiditate quia, incidunt ex quibusdam porro perferendis voluptatibus .</p>
                     <div className="footer-social-icon">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                     </div>
        </div>
        <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
        </div>
        <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91-9938772692</li>
                    <li>freshbreathtomato@gmail.com</li>
                </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>CopyRight 2024  @ Tomato.com - all Right Reserved</p>
    </div>
  )
}


export default Footer
