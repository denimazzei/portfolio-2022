import React from 'react'
import './footer.css'
import {FaFacebookF} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import {FaLinkedin} from "react-icons/fa"
import LOGO from "../../assets/logo.4.png"

const Footer = () => {
    return (
        <footer>
            
            <img src={LOGO} alt='logo' className='footer_logo' href="#"/>

            

            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer_copyright">
                <small>&copy; {new Date().getFullYear()} Deni Mazzei</small>
            </div>

            <div className="footer_socials">
                <a href="https://facebook.com/denimazzei"><FaFacebookF /></a>
                <a href="https://instagram.com/denimazzei"><FaInstagram /></a>
                <a href="https://linkedin.com/deni-mazzei"><FaLinkedin /></a>
            </div>

           
        </footer>
    )
}

export default Footer