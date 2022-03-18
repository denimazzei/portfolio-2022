import React from 'react'
import './portfolio.css'
import PROJ1 from '../../assets/group-project-1.png'
import PROJ2 from '../../assets/workday-scheduler.png'
import PROJ3 from '../../assets/space-ems.png'
import PROJ4 from '../../assets/a2l-p3.png'
import PROJ5 from '../../assets/password-generator.png'

const data = [
    {
        id: 1,
        image: PROJ1,
        title: 'Stick It To Starbucks',
        github: 'https://bit.ly/3w3Jjdy',
        demo: 'https://bit.ly/36i70UU'
    },
    {
        id: 2,
        image: PROJ2,
        title: 'Workday Scheduler',
        github: 'https://github.com/denimazzei/Deni-Workday-Scheduler-hw5',
        demo: 'https://denimazzei.github.io/Deni-Workday-Scheduler-hw5/'
    },
    {
        id: 3,
        image: PROJ3,
        title: 'Space EMS',
        github: 'https://bit.ly/3CF9lFv',
        demo: 'https://bit.ly/3JsGLKd'
    },
    {
        id: 4,
        image: PROJ4,
        title: 'Adventure 2 Learning App',
        github: 'https://bit.ly/3MNTb13',
        demo: 'https://bit.ly/3JdbCu1'
    },
    {
        id: 5,
        image: PROJ5,
        title: 'Password Generator',
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
                <article className="portfolio_item">
                    <div className="portfolio_item-image">
                        <img src={PROJ1} alt="project 1"></img>
                    </div>
                    <h3>Stick It To Starbucks</h3>
                    <div className="portfolio_item-cta">
                        <a href="https://bit.ly/3w3Jjdy" className='btn' target='_blank'>GitHub</a>
                        <a href="https://bit.ly/36i70UU" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
                
                
            </div> 
        </section>
    )
}

export default Portfolio