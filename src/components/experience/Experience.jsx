import React from 'react'
import './experience.css'
import {BsCheckCircle} from 'react-icons/bs'

const Experience = () => {
    return (
        <section id="experience">
            <h5>The Skills I Have</h5>
            <h2>My Experience</h2>

            <div className="container experience_container">
                <div className="experience_frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience_content">
                        <article className="experience_details">
                            <BsCheckCircle className="experience_details-icon" />
                            <div>
                                <h4>HTML</h4>
                            </div>
                        </article>

                        <article className="experience_details">
                            <BsCheckCircle className="experience_details-icon"/>
                            <div>
                                <h4>CSS</h4>
                            </div>
                        </article>

                        <article className="experience_details">
                            <BsCheckCircle className="experience_details-icon"/>
                            <div>
                                <h4>JavaScript</h4>
                            </div>
                        </article>

                        <article className="experience_details">
                            <BsCheckCircle className="experience_details-icon"/>
                            <div>
                                <h4>jQuery</h4>
                            </div>
                        </article>

                        <article className="experience_details">
                            <BsCheckCircle className="experience_details-icon"/>
                            <div>
                                <h4>Bootstrap</h4>
                            </div>
                        </article>

                        <article className="experience_details">
                            <BsCheckCircle className="experience_details-icon"/>
                            <div>
                                <h4>React</h4>
                            </div>
                        </article>
                    </div>
                </div>
                {/*END OF FRONTEND */}

                <div className="experience_backend">
                <h3>Backend Development</h3>
                    <div className="experience_content">
                        <article className="experience_details">
                            <BsCheckCircle className="experience_details-icon"/>
                            <div>
                                <h4>Node JS</h4>
                            </div>
                        </article>

                        <article className="experience_details">
                            <BsCheckCircle className="experience_details-icon"/>
                            <div>
                                <h4>Mongo DB</h4>
                            </div>
                        </article>

                        <article className="experience_details">
                            <BsCheckCircle className="experience_details-icon"/>
                            <div>
                                <h4>MySQL</h4>
                            </div>
                        </article>

                        <article className="experience_details">
                            <BsCheckCircle className="experience_details-icon"/>
                            <div>
                                <h4>Express</h4>
                            </div>
                        </article>

                        <article className="experience_details">
                            <BsCheckCircle className="experience_details-icon"/>
                            <div>
                                <h4>Handlebars</h4>
                            </div>
                        </article>

                        
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Experience