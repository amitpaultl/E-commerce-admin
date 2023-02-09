import React from 'react';
import thembel from '../../../Image/single-course-thumb.png'
const CardDetails = () => {
    return (
        <div>
            <div className="nav-tab-wrapper tabs  section-padding">
                <div className="container">
                    <div className="grid grid-cols-12 gap-[30px]">
                        <div className="lg:col-span-8 col-span-12">
                            <div className="single-course-details">
                                <div className="xl:h-[470px] h-[350px] mb-10 course-main-thumb">
                                    <img src={thembel} alt="" className=" rounded-md object-fut w-full h-full block" />
                                </div>
                                <div className=" mb-6">
                                    <span className="bg-secondary py-1 px-3 text-lg font-semibold rounded text-white ">Data Science</span>
                                </div>
                                <h2>UI/UX Design and Graphics Learning Bootcamp 2022</h2>
                                <div className="author-meta mt-6 sm:flex  lg:space-x-16 sm:space-x-5 space-y-5 sm:space-y-0 items-center">
                                    <div className="flex space-x-4 items-center group">
                                        <div className="flex-none">
                                            <div className="h-12 w-12 rounded">
                                                <img src="assets/images/all-img/author-1.png" alt="" className=" object-cover w-full h-full rounded" />
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <span className=" text-secondary  ">Trainer
                                                <a href="#" className=" text-black">
                                                    : Md Shamim Hossain</a>
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <span className=" text-secondary  ">Last Update:
                                            <a href="#" className=" text-black">
                                                10 February, 2022</a>
                                        </span>
                                    </div>
                                </div>
                                <div className="nav-tab-wrapper mt-12">
                                    <ul id="tabs-nav" className=" course-tab mb-8">
                                        <li className="active">
                                            <a href="#tab1">
                                                Overview
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#tab2">
                                                Carriculum
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#tab3">
                                                Instructor
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#tab4">
                                                Reviews
                                            </a>
                                        </li>
                                    </ul>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-4 col-span-12">


                            <div className="sidebarWrapper space-y-[30px]">
                                <div className="wdiget custom-text space-y-5 ">
                                    
                                    <h3>Free</h3>
                                    <button className="btn btn-primary w-full text-center ">
                                        Enroll Now
                                    </button>
                                    <ul className="list  ">

                                        <li className=" flex space-x-3 border-b border-[#ECECEC] mb-4 pb-4 last:pb-0 past:mb-0 last:border-0">
                                            <div className="flex-1 space-x-3 flex">
                                                <img src="assets/images/icon/user.svg" alt="" />
                                                <div className=" text-black font-semibold">Instructor</div>
                                            </div>
                                            <div className="flex-none">
                                                Daniel Smith
                                            </div>
                                        </li>

                                        <li className=" flex space-x-3 border-b border-[#ECECEC] mb-4 pb-4 last:pb-0 past:mb-0 last:border-0">
                                            <div className="flex-1 space-x-3 flex">
                                                <img src="assets/images/icon/file2.svg" alt="" />
                                                <div className=" text-black font-semibold">Lectures</div>
                                            </div>
                                            <div className="flex-none">
                                                23
                                            </div>
                                        </li>

                                        <li className=" flex space-x-3 border-b border-[#ECECEC] mb-4 pb-4 last:pb-0 past:mb-0 last:border-0">
                                            <div className="flex-1 space-x-3 flex">
                                                <img src="assets/images/icon/clock.svg" alt="" />
                                                <div className=" text-black font-semibold">Duration</div>
                                            </div>
                                            <div className="flex-none">
                                                2Hr 36Minutes
                                            </div>
                                        </li>

                                        <li className=" flex space-x-3 border-b border-[#ECECEC] mb-4 pb-4 last:pb-0 past:mb-0 last:border-0">
                                            <div className="flex-1 space-x-3 flex">
                                                <img src="assets/images/icon/star.svg" alt="" />
                                                <div className=" text-black font-semibold">Enrolled</div>
                                            </div>
                                            <div className="flex-none">
                                                2k Students
                                            </div>
                                        </li>

                                        <li className=" flex space-x-3 border-b border-[#ECECEC] mb-4 pb-4 last:pb-0 past:mb-0 last:border-0">
                                            <div className="flex-1 space-x-3 flex">
                                                <img src="assets/images/icon/target.svg" alt="" />
                                                <div className=" text-black font-semibold">Course level</div>
                                            </div>
                                            <div className="flex-none">
                                                Intermediate
                                            </div>
                                        </li>

                                        <li className=" flex space-x-3 border-b border-[#ECECEC] mb-4 pb-4 last:pb-0 past:mb-0 last:border-0">
                                            <div className="flex-1 space-x-3 flex">
                                                <img src="assets/images/icon/web.svg" alt="" />
                                                <div className=" text-black font-semibold">Language</div>
                                            </div>
                                            <div className="flex-none">
                                                English
                                            </div>
                                        </li>

                                    </ul>
                                    <ul className="flex space-x-4 items-center pt-3 ">
                                        <li className=" text-black font-semibold">
                                            Share On:
                                        </li>
                                        <li>
                                            <a href="#" className="flex h-10 w-10">
                                                <img src="assets/images/icon/fb.svg" alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex h-10 w-10">
                                                <img src="assets/images/icon/tw.svg" alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex h-10 w-10">
                                                <img src="assets/images/icon/pn.svg" alt="" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex h-10 w-10">
                                                <img src="assets/images/icon/ins.svg" alt="" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="wdiget">
                                    <h4 className=" widget-title">Related Courses</h4>
                                    <ul className="list">
                                        <li className=" flex space-x-4 border-[#ECECEC] pb-6 mb-6 last:pb-0 last:mb-0 last:border-0 border-b">
                                            <div className="flex-none ">
                                                <div className="h-20 w-20  rounded">
                                                    <img src="assets/images/all-img/rc-1.png" alt="" className=" w-full h-full object-cover rounded" />
                                                </div>
                                            </div>
                                            <div className="flex-1 ">
                                                <div className="flex space-x-3 mb-2">
                                                    <iconify-icon icon="heroicons:star-20-solid" className=" text-tertiary"></iconify-icon>
                                                    <iconify-icon icon="heroicons:star-20-solid" className=" text-tertiary"></iconify-icon>
                                                    <iconify-icon icon="heroicons:star-20-solid" className=" text-tertiary"></iconify-icon>
                                                    <iconify-icon icon="heroicons:star-20-solid" className=" text-tertiary"></iconify-icon>
                                                    <iconify-icon icon="heroicons:star-20-solid" className=" text-tertiary"></iconify-icon>
                                                </div>
                                                <div className="mb-1 font-semibold text-black">
                                                    Greatest Passion In...
                                                </div>
                                                <span className=" text-secondary font-semibold">$38.00</span>
                                            </div>
                                        </li>
                                        <li className=" flex space-x-4 border-[#ECECEC] pb-6 mb-6 last:pb-0 last:mb-0 last:border-0 border-b">
                                            <div className="flex-none ">
                                                <div className="h-20 w-20  rounded">
                                                    <img src="assets/images/all-img/rc-2.png" alt="" className=" w-full h-full object-cover rounded" />
                                                </div>
                                            </div>
                                            <div className="flex-1 ">
                                                <div className="flex space-x-3 mb-2">
                                                    <iconify-icon icon="heroicons:star-20-solid" className=" text-tertiary"></iconify-icon>
                                                    <iconify-icon icon="heroicons:star-20-solid" className=" text-tertiary"></iconify-icon>
                                                    <iconify-icon icon="heroicons:star-20-solid" className=" text-tertiary"></iconify-icon>
                                                    <iconify-icon icon="heroicons:star-20-solid" className=" text-tertiary"></iconify-icon>
                                                    <iconify-icon icon="heroicons:star-20-solid" className=" text-tertiary"></iconify-icon>
                                                </div>
                                                <div className="mb-1 font-semibold text-black">
                                                    Greatest Passion In...
                                                </div>
                                                <span className=" text-secondary font-semibold">$38.00</span>
                                            </div>
                                        </li>
                                        <li className=" flex space-x-4 border-[#ECECEC] pb-6 mb-6 last:pb-0 last:mb-0 last:border-0 border-b">
                                            <div className="flex-none ">
                                                <div className="h-20 w-20  rounded">
                                                    <img src="assets/images/all-img/rc-3.png" alt="" className=" w-full h-full object-cover rounded" />
                                                </div>
                                            </div>
                                            <div className="flex-1 ">
                                                <div className="flex space-x-3 mb-2">
                                                    <iconify-icon icon="heroicons:star-20-solid" className=" text-tertiary"></iconify-icon>
                                                    <iconify-icon icon="heroicons:star-20-solid" className=" text-tertiary"></iconify-icon>
                                                    <iconify-icon icon="heroicons:star-20-solid" className=" text-tertiary"></iconify-icon>
                                                    <iconify-icon icon="heroicons:star-20-solid" className=" text-tertiary"></iconify-icon>
                                                    <iconify-icon icon="heroicons:star-20-solid" className=" text-tertiary"></iconify-icon>
                                                </div>
                                                <div className="mb-1 font-semibold text-black">
                                                    Greatest Passion In...
                                                </div>
                                                <span className=" text-secondary font-semibold">$38.00</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;