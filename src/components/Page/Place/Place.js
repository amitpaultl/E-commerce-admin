import React from 'react';
import about from '../../Image/about1.png'
import light from '../../Image/light.svg'
import target from '../../Image/target.svg'
const Place = () => {
    return (
        <div>
            <div class="about-area section-padding">
                <div class="container">
                    <div class="grid lg:grid-cols-2 grid-cols-1 gap-10">
                        <div>
                            <img src={about} alt="" class=" mx-auto"/>
                        </div>
                        <div>
                            <div class="mini-title">About Edumim</div>
                            <h4 class="column-title ">
                                The Place Where You Can
                                <span class="shape-bg">
                                    Achieve</span>
                            </h4>
                            <div>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
                            </div>
                            <ul class=" list-item space-y-6 pt-8">
                                <li class="flex">
                                    <div class="flex-none mr-6">
                                        <div class="h-[72px] w-[72px] rounded-full">
                                            <img src={light} alt="" class=" w-full h-full object-cover rounded-full block"/>
                                        </div>
                                    </div>
                                    <div class="flex-1">
                                        <h4 class=" text-xl mb-1">Our Mission</h4>
                                        <div>There are many variations of passages of the Lorem Ipsum available.</div>
                                    </div>
                                </li>
                                <li class="flex">
                                    <div class="flex-none mr-6">
                                        <div class="h-[72px] w-[72px] rounded-full">
                                            <img src={target} alt="" class=" w-full h-full object-cover rounded-full block"/>
                                        </div>
                                    </div>
                                    <div class="flex-1">
                                        <h4 class=" text-xl mb-1">Our Vision</h4>
                                        <div>There are many variations of passages of the Lorem Ipsum available.</div>
                                    </div>
                                </li>
                            </ul>
                            <div class="pt-8">
                                <a href="#" class=" btn fxt-btn-fill">Read More Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Place;