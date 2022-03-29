import React from 'react'
import './about.css'
import ME from '../../assets/me.jpeg'
import {FiAward} from "react-icons/fi"
import {FiUsers} from "react-icons/fi"
import {AiOutlineFolderOpen} from "react-icons/ai"

const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>
            <div className="about_content">
                <div className="about_cards">
                    <article className='about_card'>
                        <FiAward className="about_icon"/>
                        <h5>Experience</h5>
                        <small>1 Year + Bootcamp</small>
                    </article>

                    <article className='about_card'>
                        <FiUsers className="about_icon"/>
                        <h5>Clients</h5>
                        <small>3 Worldwide</small>
                    </article>

                    <article className='about_card'>
                        <AiOutlineFolderOpen className="about_icon"/>
                        <h5>Projects</h5>
                        <small>3 Completed </small>
                    </article>
                </div>

                <p>
                Full-stack web developer leveraging business management and business development experience to build engaging and intuitive user experiences. I've worked in the educational technology and SaaS marketplace for over 12 years, and am passionate about developing processes and apps that will engage audiences of all ages and provide both the consumer and businesses with impactful and problem-solving experiences. I’m excited to leverage my skills as part of an innovative, quality-driven team to build state of the art experiences on the web and help businesses streamline their operations. My problem-solving abilities, determination, organization, and unique perspectives would make me a strong addition to any development team.
                </p>

                <a href="#contact" className='btn btn-primary'>Let's Connect</a>
            </div>
            </div>
        </section>
    )
}

export default About