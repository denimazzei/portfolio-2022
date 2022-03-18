import React from 'react'
import './contact.css'
import {MdOutlineEmail} from "react-icons/md"
import {RiMessengerLine} from "react-icons/ri"
import {AiOutlineLinkedin} from "react-icons/ai"
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_t4j2kju', 'template_o0hbkgg', form.current, 'HW72T4ozoJXre7xH5')
        
        e.target.reset()
    };  
    
    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact_container">
                <div className="contact_options">
                    <article className="contact_option">
                        <MdOutlineEmail className='contact_option-icon' />
                        <h4>Email</h4>
                        <h5>dconkell@gmail.com</h5>
                        <a href="mailto:dconkell@gmail.com" target="_blank">Send a Message</a>
                    </article>
                    <article className="contact_option">
                        <RiMessengerLine className='contact_option-icon'/>
                        <h4>Messenger</h4>
                        <h5>@denimazzei</h5>
                        <a href="https://m.me/denimazzei" target="_blank">Send a Message</a>
                    </article>
                    <article className="contact_option">
                        <AiOutlineLinkedin className='contact_option-icon'/>
                        <h4>LinkedIn</h4>
                        <h5>@deni-mazzei</h5>
                        <a href="https://www.linkedin.com/in/deni-mazzei/" target="_blank">Send a Message</a>
                    </article>
                </div>
                {/*END OF CONTACT OPTIONS */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder="Your Full Name" required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                    <p type="alert" className="alert"></p>
                </form>
                
            </div>
        </section>
    )
}

export default Contact