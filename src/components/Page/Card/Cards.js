import React from 'react';
import product from '../../Image/751.jfif'
import { BsFileEarmarkPlus, BsStar } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import { Link } from 'react-router-dom';
const Cards = ({ data }) => {
    const { _id, name, lectures, duration, message, image, price, discount } = data;



    return (
        <div className=" bg-white shadow-box2 rounded-[8px] transition duration-100 hover:shadow-sm">
            <Link to={`/cardDetails/${_id}`}  >
                <div className="course-thumb h-[248px] rounded-t-[8px]  relative">
                    <img src={image} alt="" className=" w-full h-full object-cover rounded-t-[8px]" />
                    <span className="bg-green-600 py-1 px-3 text-lg font-semibold rounded text-white absolute left-6 top-6">{discount}%</span>
                </div>
                <div className="course-content p-8">
                    <div className="text-green-600 font-bold text-2xl mb-3">${price}</div>
                    <h4 className=" text-xl mb-3 font-bold">{name}</h4>
                    <div className="flex justify-between  space-x-3">
                        <span className=" flex items-center space-x-2">
                            <BsFileEarmarkPlus></BsFileEarmarkPlus>
                            <span>2 Lessons</span>
                        </span>
                        <span className=" flex items-center space-x-2">
                            <BiTimeFive></BiTimeFive>
                            <span>{duration}</span>
                        </span>
                        <span className=" flex items-center space-x-2">
                            <BsStar></BsStar>
                            <span>4.8</span>
                        </span>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Cards;