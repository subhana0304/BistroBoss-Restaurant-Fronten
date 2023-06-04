import React from 'react';
import SectionTitle from './SectionTitle';
import featuredImg from '../assets/home/featured.jpg';
import './Featured.css'
import { Link } from 'react-router-dom';

const Featured = () => {
    return (
        <div className='feature-item text-white bg-fixed py-20 px-16 bg-gradient-to-r from-black to-black bg-opacity-100 mb-16'>
            <SectionTitle subHeading='Check it Out' heading='Featured Item'></SectionTitle>
            <div className='md:flex justify-center items-center gap-10 px-16 py-8 bg-slate-600 bg-opacity-30'>
            <div>
                <img src={featuredImg} alt="" />
            </div>
            <div className='md:ml-10 '>
                <p>Aug 20, 2029</p>
                <p className='uppercase'>Where can i get some?</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi cum et minus, amet quis voluptate quos quidem maxime autem cumque provident obcaecati earum dolores voluptatum laborum deserunt tenetur necessitatibus praesentium voluptas iure. A aliquam, quaerat, vitae aut mollitia laudantium numquam ea, modi quisquam corrupti est? Suscipit perferendis deserunt ullam dolorum.</p>
                <Link to="/order"><button className="btn btn-outline border-0 border-b-4 text-white">Order Now</button></Link>
            </div>
            </div>
        </div>
    );
};

export default Featured;