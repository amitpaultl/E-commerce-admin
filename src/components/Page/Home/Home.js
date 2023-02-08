import React from 'react';
import Choose from './Choose/Choose';
import Hero from './Hero/Hero';
import './Home.css'
import Platfrom from './Platfrom/Platfrom';
import Product from './Product/Product';
import Topics from './Topics/Topics';
const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Choose></Choose>
            <Product></Product>
            <Platfrom></Platfrom>
            <Topics></Topics>
        </div>
    );
};

export default Home;