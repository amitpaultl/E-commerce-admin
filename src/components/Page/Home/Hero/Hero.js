import React from 'react';
import video from '../../../Image/4K Abstract Sci-Fi Tunnel VJ Motion Background __ Neon Light Tunnel Free VJ Loops __ 4K VJ Loops.mp4'

const Hero = () => {
    return (
        <div className='hero-area'>
            <div className="hero-bg">
                    <video src={video} autoPlay loop muted></video>

                </div>
            <div className="hero text-hero" >
                <div className=" "></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Welcome </h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn fxt-btn-fill">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;