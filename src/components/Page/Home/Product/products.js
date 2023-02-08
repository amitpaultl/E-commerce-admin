import React from 'react';
import product from '../../../Image/751.jfif'
import { BsFileEarmarkPlus, BsStar } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
const Products = () => {
    return (
        <div className=" bg-white shadow-box2 rounded-[8px] transition duration-100 hover:shadow-sm">
            <a  href="#">
                <div className="course-thumb h-[248px] rounded-t-[8px]  relative">
                    <img src={product} alt="" className=" w-full h-full object-cover rounded-t-[8px]" />
                    <span className="bg-green-600 py-1 px-3 text-lg font-semibold rounded text-white absolute left-6 top-6">50%</span>
                </div>
                <div className="course-content p-8">
                    <div className="text-green-600 font-bold text-2xl mb-3">$29.28</div>
                    <h4 className=" text-xl mb-3 font-bold">Basic Fundamentals of Interior &amp; Graphics Design</h4>
                    <div className="flex justify-between  space-x-3">
                        <span className=" flex items-center space-x-2">
                            <BsFileEarmarkPlus></BsFileEarmarkPlus>
                            <span>2 Lessons</span>
                        </span>
                        <span className=" flex items-center space-x-2">
                            <BiTimeFive></BiTimeFive>
                            <span>4h 30m</span>
                        </span>
                        <span className=" flex items-center space-x-2">
                            <BsStar></BsStar>
                            <span>4.8</span>
                        </span>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default Products;