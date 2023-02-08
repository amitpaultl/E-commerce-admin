import React from 'react';
import { TfiAndroid, TfiSettings, TfiWorld } from "react-icons/tfi";
import './Choose.css'
const Choose = () => {
    return (
        <div>
            <div class="feature-area  bg-cover bg-no-repeat bg-center section-padding">
                <div class="container">
                    <div class="text-center">
                        <div class="mini-title">Core Features</div>
                        <div class="column-title ">
                            Why 
                            <span class="shape-bg"> Choose </span>
                             Edumim
                        </div>
                    </div>
                    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] pt-10">


                        <div class="bg-white shadow-box rounded-[8px]  p-10 group hover:bg-red-500 transition duration-150 hover:-translate-y-1">
                            <div class="h-[72px] w-[72px] rounded-full flex flex-col items-center justify-center  bg-green-paste mb-8
                text-5xl group-hover:bg-black group-hover:bg-opacity-[0.1] group-hover:text-white transition duration-150">
                                <TfiWorld></TfiWorld>
                            </div>
                            <h4 class=" lg:text-2xl text-[22px] leading-[30px] mb-4 transition duration-150 group-hover:text-white">Learn More Anywhere</h4>
                            <div class="transition duration-150 group-hover:text-white">Learn from anywhere in world on desktop, mobile or tablet with an Internet connection.</div>
                        </div>

                        <div class="bg-white shadow-box rounded-[8px]  p-10 group hover:bg-red-500 transition duration-150 hover:-translate-y-1">
                            <div class="h-[72px] w-[72px] rounded-full flex flex-col items-center justify-center  bg-green-paste mb-8
                text-5xl group-hover:bg-black group-hover:bg-opacity-[0.1] group-hover:text-white transition duration-150">
                                <TfiSettings></TfiSettings>
                            </div>
                            <h4 class=" lg:text-2xl text-[22px] leading-[30px] mb-4 transition duration-150 group-hover:text-white">Expert Instructor</h4>
                            <div class="transition duration-150 group-hover:text-white">Learn from anywhere in world on desktop, mobile or tablet with an Internet connection.</div>
                        </div>

                        <div class="bg-white shadow-box rounded-[8px]  p-10 group hover:bg-red-500  transition duration-150 hover:-translate-y-1">
                            <div class="h-[72px] w-[72px] rounded-full flex flex-col items-center justify-center  bg-green-paste mb-8
                text-5xl group-hover:bg-black group-hover:bg-opacity-[0.1] group-hover:text-white transition duration-150">
                                <TfiAndroid></TfiAndroid>
                            </div>
                            <h4 class=" lg:text-2xl text-[22px] leading-[30px] mb-4 transition duration-150 group-hover:text-white">24/7 Strong Support</h4>
                            <div class="transition duration-150 group-hover:text-white">Learn from anywhere in world on desktop, mobile or tablet with an Internet connection.</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Choose;