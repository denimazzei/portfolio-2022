import React from 'react'
import './testimonials.css'
import CLIENT1 from '../../assets/vader_1.jpeg'
import CLIENT2 from '../../assets/deni-beach1.jpeg'

// import Swiper core and required modules
import { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const data = [
    {
        avatar: CLIENT1,
        name: "Vader",
        review: "I find your lack of faith disturbing."
    },
    {
        avatar: CLIENT2,
        name: "Beach",
        review: "Let's go!"
    },

]

const Testimonials = () => {
    return (
        <section id="testimonials">
            <h5> Reviews from Clients</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials_container"
            // install Swiper modules
            modules={[Pagination, Navigation]}
            spaceBetween={40}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            >
                {
                    data.map(({avatar, name, review}, index) => {
                        return(
                            <SwiperSlide key={index} className="testimonial">
                            <div className='client_avatar'>
                                <img src={avatar} alt="client"/>
                            </div>    
                            <h5 className="client_name">{name}</h5>
                            <small className="client_review">{review}
                            </small>
                            </SwiperSlide>
                        )
                    })
                }
                
               
                
            </Swiper>
        </section>
    )
}

export default Testimonials