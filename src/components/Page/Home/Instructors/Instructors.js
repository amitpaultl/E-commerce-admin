import React from 'react';
import './Instructors.css'
import team from '../../../Image/team1.png'
import team2 from '../../../Image/team2.png'
import team3 from '../../../Image/team3.png'
import team4 from '../../../Image/team4.png'
import { FaFacebookF, FaLinkedinIn, FaTwitter, IconName } from "react-icons/fa";
const Instructors = () => {
    return (
        <div>
            <div className=" section-padding instructors-area">
                <div className="container">
                    <div className="text-center">
                        <div className="mini-title">Team Member</div>
                        <div className="column-title ">
                            Our Expert
                            <span className="shape-bg">Instructors</span>
                        </div>
                    </div>
                    <div className="grid xl:grid-cols-4 lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-[30px] pt-10">


                        <div className=" bg-white shadow-box3 rounded-[8px] transition-all duration-100 pt-10 pb-[28px] px-6 text-center hover:shadow-box4
            border-t-4 border-transparent hover:border-secondary ">
                            <div className="w-[170px] h-[170px] rounded-full  relative mx-auto mb-8">
                                <img src={
                                    team
                                } alt="" className=" w-full h-full object-cover rounded-full" />
                            </div>
                            <div className="course-content">
                                <h4 className=" lg:text-2xl text-1xl mb-1 font-bold">Erics Widget</h4>
                                <div>UI/UX Designer</div>
                                <ul className="space-x-4 flex justify-center pt-6">
                                    <li>
                                        <a href="#" className=" h-10 w-10 rounded bg-red-paste text-primary flex flex-col justify-center items-center text-2xl transition
                                hover:bg-primary hover:text-white">
                                            <FaFacebookF></FaFacebookF>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className=" h-10 w-10 rounded bg-green-paste text-secondary flex flex-col justify-center items-center text-2xl transition
                                hover:bg-secondary hover:text-white">
                                            <FaTwitter></FaTwitter>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className=" h-10 w-10 rounded bg-[#EEE8FF] text-#8861DB flex flex-col justify-center items-center text-2xl transition
                                hover:bg-[#8861DB] hover:text-white">
                                            <FaLinkedinIn></FaLinkedinIn>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className=" bg-white shadow-box3 rounded-[8px] transition-all duration-100 pt-10 pb-[28px] px-6 text-center hover:shadow-box4
            border-t-4 border-transparent hover:border-secondary ">
                            <div className="w-[170px] h-[170px] rounded-full  relative mx-auto mb-8">
                                <img src={team2} alt="" className=" w-full h-full object-cover rounded-full" />
                            </div>
                            <div className="course-content">
                                <h4 className=" lg:text-2xl text-1xl mb-1 font-bold">Daniel Steven</h4>
                                <div>UI/UX Designer</div>
                                <ul className="space-x-4 flex justify-center pt-6">
                                    <li>
                                        <a href="#" className=" h-10 w-10 rounded bg-red-paste text-primary flex flex-col justify-center items-center text-2xl transition
                                hover:bg-primary hover:text-white">
                                            <FaFacebookF></FaFacebookF>

                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className=" h-10 w-10 rounded bg-green-paste text-secondary flex flex-col justify-center items-center text-2xl transition
                                hover:bg-secondary hover:text-white">
                                            <FaTwitter></FaTwitter>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className=" h-10 w-10 rounded bg-[#EEE8FF] text-#8861DB flex flex-col justify-center items-center text-2xl transition
                                hover:bg-[#8861DB] hover:text-white">
                                            <FaLinkedinIn></FaLinkedinIn>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className=" bg-white shadow-box3 rounded-[8px] transition-all duration-100 pt-10 pb-[28px] px-6 text-center hover:shadow-box4
            border-t-4 border-transparent hover:border-secondary ">
                            <div className="w-[170px] h-[170px] rounded-full  relative mx-auto mb-8">
                                <img src={team3} alt="" className=" w-full h-full object-cover rounded-full" />
                            </div>
                            <div className="course-content">
                                <h4 className=" lg:text-2xl text-1xl mb-1 font-bold">Nelson Decosta</h4>
                                <div>UI/UX Designer</div>
                                <ul className="space-x-4 flex justify-center pt-6">
                                    <li>
                                        <a href="#" className=" h-10 w-10 rounded bg-red-paste text-primary flex flex-col justify-center items-center text-2xl transition
                                hover:bg-primary hover:text-white">
                                            <FaFacebookF></FaFacebookF>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className=" h-10 w-10 rounded bg-green-paste text-secondary flex flex-col justify-center items-center text-2xl transition
                                hover:bg-secondary hover:text-white">
                                            <FaTwitter></FaTwitter>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className=" h-10 w-10 rounded bg-[#EEE8FF] text-#8861DB flex flex-col justify-center items-center text-2xl transition
                                hover:bg-[#8861DB] hover:text-white">
                                            <FaLinkedinIn></FaLinkedinIn>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className=" bg-white shadow-box3 rounded-[8px] transition-all duration-100 pt-10 pb-[28px] px-6 text-center hover:shadow-box4
            border-t-4 border-transparent hover:border-secondary ">
                            <div className="w-[170px] h-[170px] rounded-full  relative mx-auto mb-8">
                                <img src={team4} alt="" className=" w-full h-full object-cover rounded-full" />
                            </div>
                            <div className="course-content">
                                <h4 className=" lg:text-2xl text-1xl mb-1 font-bold">Selina Gomez</h4>
                                <div>UI/UX Designer</div>
                                <ul className="space-x-4 flex justify-center pt-6">
                                    <li>
                                        <a href="#" className=" h-10 w-10 rounded bg-red-paste text-primary flex flex-col justify-center items-center text-2xl transition
                                hover:bg-primary hover:text-white">
                                            <FaFacebookF></FaFacebookF>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className=" h-10 w-10 rounded bg-green-paste text-secondary flex flex-col justify-center items-center text-2xl transition
                                hover:bg-secondary hover:text-white">
                                            <FaTwitter></FaTwitter>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className=" h-10 w-10 rounded bg-[#EEE8FF] text-#8861DB flex flex-col justify-center items-center text-2xl transition
                                hover:bg-[#8861DB] hover:text-white">
                                            <FaLinkedinIn></FaLinkedinIn>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Instructors;