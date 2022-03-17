import React from 'react'
import './services.css'
import {BsCheckSquare} from 'react-icons/bs'

const Services = () => {
    return (
        <section id="services">
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services_container">
                <article className="service">
                    <div className="service_head">
                        <h3>UI/UX Design</h3>
                    </div>

                    <ul className="service_list">
                        <li>
                            <BsCheckSquare className='service_list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod quaerat maiores nihil debitis consequatur sit itaque, harum dolores ex eveniet corrupti neque ipsam repellat quam perspiciatis autem sequi. Deleniti, illum.</p>
                        </li>
                        <li>
                            <BsCheckSquare className='service_list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod quaerat maiores nihil debitis consequatur sit itaque, harum dolores ex eveniet corrupti neque ipsam repellat quam perspiciatis autem sequi. Deleniti, illum.</p>
                        </li>
                        <li>
                            <BsCheckSquare className='service_list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod quaerat maiores nihil debitis consequatur sit itaque, harum dolores ex eveniet corrupti neque ipsam repellat quam perspiciatis autem sequi. Deleniti, illum.</p>
                        </li>
                        <li>
                            <BsCheckSquare className='service_list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod quaerat maiores nihil debitis consequatur sit itaque, harum dolores ex eveniet corrupti neque ipsam repellat quam perspiciatis autem sequi. Deleniti, illum.</p>
                        </li>
                    </ul>
                </article>
                {/* END OF DESIGN */}

                <article className="service">
                    <div className="service_head">
                        <h3>Web Development</h3>
                    </div>

                    <ul className="service_list">
                        <li>
                            <BsCheckSquare className='service_list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod quaerat maiores nihil debitis consequatur sit itaque, harum dolores ex eveniet corrupti neque ipsam repellat quam perspiciatis autem sequi. Deleniti, illum.</p>
                        </li>
                        <li>
                            <BsCheckSquare className='service_list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod quaerat maiores nihil debitis consequatur sit itaque, harum dolores ex eveniet corrupti neque ipsam repellat quam perspiciatis autem sequi. Deleniti, illum.</p>
                        </li>
                        <li>
                            <BsCheckSquare className='service_list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod quaerat maiores nihil debitis consequatur sit itaque, harum dolores ex eveniet corrupti neque ipsam repellat quam perspiciatis autem sequi. Deleniti, illum.</p>
                        </li>
                        <li>
                            <BsCheckSquare className='service_list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod quaerat maiores nihil debitis consequatur sit itaque, harum dolores ex eveniet corrupti neque ipsam repellat quam perspiciatis autem sequi. Deleniti, illum.</p>
                        </li>
                    </ul>
                </article>
                {/* END OF DEVELOPMENT */}

                <article className="service">
                    <div className="service_head">
                        <h3>Content Creation</h3>
                    </div>

                    <ul className="service_list">
                        <li>
                            <BsCheckSquare className='service_list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod quaerat maiores nihil debitis consequatur sit itaque, harum dolores ex eveniet corrupti neque ipsam repellat quam perspiciatis autem sequi. Deleniti, illum.</p>
                        </li>
                        <li>
                            <BsCheckSquare className='service_list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod quaerat maiores nihil debitis consequatur sit itaque, harum dolores ex eveniet corrupti neque ipsam repellat quam perspiciatis autem sequi. Deleniti, illum.</p>
                        </li>
                        <li>
                            <BsCheckSquare className='service_list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod quaerat maiores nihil debitis consequatur sit itaque, harum dolores ex eveniet corrupti neque ipsam repellat quam perspiciatis autem sequi. Deleniti, illum.</p>
                        </li>
                        <li>
                            <BsCheckSquare className='service_list-icon' />
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod quaerat maiores nihil debitis consequatur sit itaque, harum dolores ex eveniet corrupti neque ipsam repellat quam perspiciatis autem sequi. Deleniti, illum.</p>
                        </li>
                    </ul>
                </article>
                {/* END OF CONTENT CREATION */}
            </div>
        </section>
    )
}

export default Services