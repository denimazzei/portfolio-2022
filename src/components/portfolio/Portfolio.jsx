import React from 'react'
import './portfolio.css'
import PROJ1 from '../../assets/group-project-1.png'
import PROJ2 from '../../assets/workday-scheduler.png'
import PROJ3 from '../../assets/space-ems2.png'
import PROJ4 from '../../assets/a2l-p3.png'
import PROJ5 from '../../assets/password-generator2.png'

const data = [
    {
        id: 1,
        image: PROJ1,
        title: 'Stick It To Starbucks',
        description: 'Local coffee shop locator application to support small businesses.',
        stack: 'HTML, CSS, JavaScript',
        github: 'https://bit.ly/3w3Jjdy',
        demo: 'https://bit.ly/36i70UU'
    },
    {
        id: 2,
        image: PROJ2,
        title: 'Workday Scheduler',
        description: 'App that adds and stores events in a users schedule. Features include efficient local storage management and moment-js.',
        stack: 'HTML, CSS, JavaScript',
        github: 'https://github.com/denimazzei/Deni-Workday-Scheduler-hw5',
        demo: 'https://denimazzei.github.io/Deni-Workday-Scheduler-hw5/'
    },
    {
        id: 3,
        image: PROJ3,
        title: 'Space EMS',
        description: 'Web-based, space-themed, multi-directional shooter-style game.',
        stack: 'HTML, CSS, JavaScript, Handlebars, p5.js',
        github: 'https://bit.ly/3CF9lFv',
        demo: 'https://bit.ly/3JsGLKd'
    },
    {
        id: 4,
        image: PROJ4,
        title: 'Adventure 2 Learning App',
        description: 'Providing classroom teachers with a PWA tool for accessing A2Ls online streaming library of educational videos with students.',
        stack: 'React, Node, Express, Apollo, GraphQL, MongoDB',
        github: 'https://bit.ly/3MNTb13',
        demo: 'https://bit.ly/3JdbCu1'
    },
    {
        id: 5,
        image: PROJ5,
        title: 'Password Generator',
        description: 'Dedicated webpage to generate safe passwords for employees',
        stack: 'HTML, CSS, JavaScript',
        github: 'https://github.com/denimazzei/Deni-Password-Generator-hw3',
        demo: 'https://denimazzei.github.io/Deni-Password-Generator-hw3/'
    },

]


const Portfolio = () => {
    return (
        <section id="portfolio">
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio_container">
                {
                    data.map(({id, image, title, description, stack, github, demo}) => {
                        return(
                            <article key={id} className='portfolio_item'>
                                <div className="portfolio_item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <h5>{description}</h5>
                                <h6>{stack}</h6>
                                <div className="portfolio_item-cta">
                                    <a href={github} className='btn' target='_blank'>GitHub</a>
                                    <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Portfolio