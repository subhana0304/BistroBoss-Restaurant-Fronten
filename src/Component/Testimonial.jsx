import React, { useEffect, useState } from 'react';
import SectionTitle from './SectionTitle';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';


const Testimonial = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className='mb-16'>
            <SectionTitle subHeading='What our Clients Say' heading='Testimonials'></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review =>
                        <SwiperSlide key={review._id}>
                            <div className='my-10 mx-24 text-center flex flex-col items-center'>
                                <h1 className="text-7xl font-extrabold mt-3">"</h1>
                                <p className='pb-3'>{review.details}</p>
                                <h3 className="text-2xl mb-2">{review.name}</h3>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                            </div>
                        </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonial;