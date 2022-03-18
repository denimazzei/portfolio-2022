import React from 'react'
import './testimonials.css'
import CLIENT1 from '../../assets/vader_1.jpeg'
import CLIENT2 from '../../assets/deni-beach1.jpeg'

const Testimonials = () => {
    return (
        <section id="testimonials">
            <h5> Reviews from Clients</h5>
            <h2>Testimonials</h2>

            <div className="container testimonials_container">
                <article className="testimonial">
                    <div className='client_avatar'>
                        <img src={CLIENT1} alt="client"/>
                    </div>    
                    <h5 className="client_name">Vader</h5>
                    <small className="client_review">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ducimus quia eos a praesentium maiores, ipsam corrupti impedit quam asperiores labore, reiciendis quo esse eligendi aut ab alias! Rerum, temporibus?
                    </small>
                </article>
                <article className="testimonial">
                    <div className='client_avatar'>
                        <img src={CLIENT2} alt="client"/>
                    </div>    
                    <h5 className="client_name">Beach</h5>
                    <small className="client_review">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ducimus quia eos a praesentium maiores, ipsam corrupti impedit quam asperiores labore, reiciendis quo esse eligendi aut ab alias! Rerum, temporibus?
                    </small>
                </article>
                
            </div>
        </section>
    )
}

export default Testimonials