import React from 'react';
import heroImg from '../../../Image/man3.png'
const Hero = () => {
    return (
        <div className=''>
            <section className=" xl:min-h-screen ">
                <div className="container relative">
                    <div className="xl:max-w-[570px] lg:max-w-[770px] xl:py-[174px] lg:py-28 md:py-20 py-14">


                        <div className="text ">
                            <div className="column-title ">
                                <h2 className='text-xl lg:text-6xl'>
                                    Classical
                                    <span className="shape-bg">Education</span>
                                    Future
                                </h2>

                            </div>
                            <div className=" plain-text text-gray leading-[30px] mt-8 mb-14 text-2xl">
                                It is long established fact that reader distracted by the readable content.
                            </div>
                        </div>
                        <div className="md:flex  md:space-x-4 space-y-3 md:space-y-0 text-center">
                            <a href="#" className="btn fxt-btn-fill">Learn From Today</a>
                        </div>
                    </div>
                    <div className="imge-box absolute right-[-60px] top-1/2  -translate-y-1/2 hidden xl:block   ">
                        <img src={heroImg} alt="" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Hero;