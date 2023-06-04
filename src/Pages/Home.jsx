import React from 'react';
import Banner from '../Component/Banner';
import Category from '../Component/Category';
import PopulerMenu from '../Component/PopulerMenu';
import Featured from '../Component/Featured';
import Testimonial from '../Component/Testimonial';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>BistroBoss | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <PopulerMenu></PopulerMenu>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;