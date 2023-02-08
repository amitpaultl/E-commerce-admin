import React from 'react';
import './Blogs.css'
import blog from '../../Image/blog-1.png'
import blog2 from '../../Image/blog-2.png'
import blog3 from '../../Image/blog-3.png'
import { AiOutlineCalendar, AiOutlineUser, IconName } from "react-icons/ai";
const Blog = () => {
    return (
        <div>
            <div className=" section-padding platfrom-area">
                <div className="container">
                    <div className="lg:flex justify-between items-center ">
                        <div className="mb-3">
                            <div className="mini-title">Team Member</div>
                            <div className="column-title ">
                                Our Latest
                                <span className="shape-bg">Blogs</span>
                            </div>
                        </div>
                        <div className="mb-3">
                            <a href="#" className=" btn btn-primary">Read All Blogs</a>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] pt-7">


                        <div className=" bg-white shadow-box5 rounded-[8px] transition duration-100 hover:shadow-box3">
                            <div className="course-thumb h-[260px] rounded-t-[8px]  relative">
                                <img src={blog} alt="" className=" w-full h-full object-cover rounded-t-[8px]" />
                                <span className="bg-green-600 py-1 px-3 text-lg font-semibold rounded text-white absolute left-6 top-6">Education</span>
                            </div>
                            <div className="course-content p-8">
                                <div className="flex   lg:space-x-10 space-x-5 mb-5">
                                    <a className=" flex items-center space-x-2" href="blog-single.html">
                                        <AiOutlineUser></AiOutlineUser>
                                        <span>Admin</span>
                                    </a>
                                    <a className=" flex items-center space-x-2" href="blog-single.html">
                                        <AiOutlineCalendar></AiOutlineCalendar>

                                        <span>Jan 29, 2022</span>
                                    </a>
                                </div>
                                <h4 className=" text-xl mb-5 font-bold">
                                    <a href="blog-single.html" className=" hover:text-orange-500 transition duration-150">
                                        Professional Mobile Painting and Sculpting
                                    </a>
                                </h4>
                                <a href="blog-single.html" className=" text-black font-semibold hover:underline transition duration-150">Read More</a>
                            </div>
                        </div>

                        <div className=" bg-white shadow-box5 rounded-[8px] transition duration-100 hover:shadow-box3">
                            <div className="course-thumb h-[260px] rounded-t-[8px]  relative">
                                <img src={blog2} alt="" className=" w-full h-full object-cover rounded-t-[8px]" />
                                <span className="bg-green-600 py-1 px-3 text-lg font-semibold rounded text-white absolute left-6 top-6">Education</span>
                            </div>
                            <div className="course-content p-8">
                                <div className="flex   lg:space-x-10 space-x-5 mb-5">
                                    <a className=" flex items-center space-x-2" href="blog-single.html">
                                        <AiOutlineUser></AiOutlineUser>
                                        <span>Admin</span>
                                    </a>
                                    <a className=" flex items-center space-x-2" href="blog-single.html">
                                        <AiOutlineCalendar></AiOutlineCalendar>
                                        <span>Jan 29, 2022</span>
                                    </a>
                                </div>
                                <h4 className=" text-xl mb-5 font-bold">
                                    <a href="blog-single.html" className=" hover:text-orange-500 transition duration-150">
                                        Professional Ceramic Moulding for Beginners
                                    </a>
                                </h4>
                                <a href="blog-single.html" className=" text-black font-semibold hover:underline transition duration-150">Read More</a>
                            </div>
                        </div>

                        <div className=" bg-white shadow-box5 rounded-[8px] transition duration-100 hover:shadow-box3">
                            <div className="course-thumb h-[260px] rounded-t-[8px]  relative">
                                <img src={blog3} alt="" className=" w-full h-full object-cover rounded-t-[8px]" />
                                <span className="bg-green-600 py-1 px-3 text-lg font-semibold rounded text-white absolute left-6 top-6">Education</span>
                            </div>
                            <div className="course-content p-8">
                                <div className="flex   lg:space-x-10 space-x-5 mb-5">
                                    <a className=" flex items-center space-x-2" href="blog-single.html">
                                        <AiOutlineUser></AiOutlineUser>
                                        <span>Admin</span>
                                    </a>
                                    <a className=" flex items-center space-x-2" href="blog-single.html">
                                        <AiOutlineCalendar></AiOutlineCalendar>
                                        <span>Jan 29, 2022</span>
                                    </a>
                                </div>
                                <h4 className=" text-xl mb-5 font-bold">
                                    <a href="blog-single.html" className=" hover:text-orange-500 transition duration-150">
                                        Education Is About Create Leaders For Tomorrow
                                    </a>
                                </h4>
                                <a href="blog-single.html" className=" text-black font-semibold hover:underline transition duration-150">Read More</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;