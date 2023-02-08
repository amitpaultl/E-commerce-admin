import React from 'react';
import Blog from '../Blogs/Blog';
import Place from '../Place/Place';
import Choose from './Choose/Choose';
import Hero from './Hero/Hero';
import './Home.css'
import Instructors from './Instructors/Instructors';
import Platfrom from './Platfrom/Platfrom';
import Product from './Product/Product';
import Testimonial from './Testimonial/Testimonial';
import Topics from './Topics/Topics';
const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Choose></Choose>
            <Product></Product>
            <Place></Place>
            <Platfrom></Platfrom>
            <Topics></Topics>
            <Testimonial></Testimonial>
            <Instructors></Instructors>
            <Blog></Blog>
        </div>
    );
};

export default Home;