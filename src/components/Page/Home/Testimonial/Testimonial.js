import React from 'react';
import './Testimonial.css'
import user from '../../../Image/team4.png'
const Testimonial = () => {
    return (
        <div>

            <div className=" section-padding ">
                <div className="container">
                    <div className="grid grid-cols-12 lg:gap-10 gap-6 ">
                        <div className="xl:col-span-7 lg:col-span-6 col-span-12">
                            <div className="w-full  flex flex-col items-center justify-center gap-8">
                                <h1 className="text-xl text-gray-600 leading-relaxed text-center w-4/5">
                                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                                </h1>
                                <div className="flex items-center gap-4">
                                    <div className="rounded-full w-12 h-12 bg-black overflow-hidden">
                                        <img src={user} />
                                    </div>
                                    <div className="flex flex-col tracking-wider">
                                        <label className="text-gray-600 font-bold text-base">Rai Raksa Muhamad</label>
                                        <label className="text-gray-400 font-normal text-sm">Fullstack React Developer</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-5 lg:col-span-6 col-span-12 flex flex-col justify-center ">
                            <div className="mini-title">Testimonial</div>
                            <h4 className="column-title ">
                                What Says Our
                                <span className="shape-bg">
                                    Students</span>
                                About Us
                            </h4>
                            <div>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered. There are many
                                variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected
                                humour.
                            </div>
                            <div className="mt-12">
                                <a href="#" className="btn fxt-btn-fill">View All Reviews</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;