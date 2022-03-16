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
                        <small>1 year coding || 10+ biz dev</small>
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse voluptate culpa aliquid exercitationem nihil? Reiciendis suscipit optio quidem nobis velit neque beatae, ratione ea laboriosam quia! Quam, dolores impedit? Consequatur?
                </p>

                <a href="#contact" className='btn btn-primary'>Let's Connect</a>
            </div>
            </div>
        </section>
    )
}

export default About