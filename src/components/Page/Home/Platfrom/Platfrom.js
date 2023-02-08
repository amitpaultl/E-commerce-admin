import React from 'react';
import './Platfrom.css'
import about from '../../../Image/about2.png'
import { FcApproval } from "react-icons/fc";
import email from '../../../Image/big-mail.svg'
const Platfrom = () => {
    return (
        <div>
            <div className=" platfrom-area section-padding">
                <div className="container">
                    <div className="lg:grid grid-cols-12 gap-[30px]">
                        <div className="xl:col-span-5 lg:col-span-6 col-span-12">
                            <div className="mini-title">Best Online Learning Platform</div>
                            <h4 className="column-title ">
                                One Platfrom &amp; Many
                                <span className="shape-bg">
                                    Courses</span>
                                For You
                            </h4>
                            <div>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                            </div>
                            <ul className=" space-y-2 pt-8">
                                <li className="flex flex-wrap">
                                    <div className="flex-none mr-3">
                                        <div className="">
                                            <FcApproval></FcApproval>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className=" text-lg mb-1 font-semibold">9/10 Average Satisfaction Rate</h4>
                                    </div>
                                </li>
                                <li className="flex flex-wrap">
                                    <div className="flex-none mr-3">
                                        <div className="">
                                            <FcApproval></FcApproval>

                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className=" text-lg mb-1 font-semibold">96% Completitation Rate</h4>
                                    </div>
                                </li>
                                <li className="flex flex-wrap">
                                    <div className="flex-none mr-3">
                                        <div className="">
                                            <FcApproval></FcApproval>

                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className=" text-lg mb-1 font-semibold">Friendly Environment &amp; Expert Teacher</h4>
                                    </div>
                                </li>
                            </ul>
                            <div className="pt-8">
                                <a href="#" className=" fxt-btn-fill">Explore Our Courses</a>
                            </div>
                        </div>
                        <div className="xl:col-span-7 lg:col-span-6 col-span-12 lg:pt-0 md:pt-10 pt-6">
                            <img src={about} alt="" className=" mx-auto block w-full" />
                        </div>
                    </div>
                </div>
            </div>
            {/* email area */}
            <div className="bg-center bg-emerald-500 py-20">
                <div className="container">
                    <div className="lg:flex lg:items-center lg:space-x-[70px]">
                        <div className=" flex-none">
                            <div className="flex items-center space-x-8 text-white max-w-[327px] mx-auto lg:mb-0 md:mb-10 mb-5">
                                <div className=" flex-none ">
                                    <img src={email} alt=""/>
                                </div>
                                <div className="flex-1 lg:text-[32px] lg:leading-[51px] md:text-3xl text-2xl font-bold">
                                    Subscribe to My Newsletter
                                </div>
                            </div>
                        </div>
                        <div className=" flex-1">
                            <div className="md:flex   items-center  relative md:space-x-6 md:space-y-0  space-y-4   ">
                                <div className="flex-1 relative">
                                    
                                    <input type="text" placeholder="Enter your mail address" className=" border-b w-full border-t-0 border-l-0 border-r-0 border-[#B2E2DF] ring-0 focus:ring-0 bg-transparent text-white
                                placeholder:text-[#B2E2DF] focus:outline-0 focus:border-[#B2E2DF] transition pl-8 text-lg"/>
                                </div>
                                <div className="flex-none">
                                    <button className="fxt-btn-fill">Get Started Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Platfrom;