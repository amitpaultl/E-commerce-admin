import React from 'react';
import './Testimonial.css'
const Testimonial = () => {
    return (
        <div>
            <div class=" section-padding ">
                <div class="container lg:-mt-[250px] xl:pb-[136px] lg:pb-20 pb-10">
                    <div class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] bg-white shadow-box14 rounded-md
                divide-x-2 divide-[#E4EEED] py-20">
                        <div class=" text-center ">
                            <h2 class="text-secondary font-bold ">
                                <span class=" counter">82</span>K+
                            </h2>
                            <span class="block text-black font-semibold">Enrolled Students</span>
                        </div>
                        <div class="  text-center">
                            <h2 class="text-secondary font-bold ">
                                <span class=" counter">348</span>+
                            </h2>
                            <span class="block text-black font-semibold">Academic Programs</span>
                        </div>
                        <div class=" text-center">
                            <h2 class="text-secondary font-bold ">
                                <span class=" counter">125</span>+
                            </h2>
                            <span class="block text-black font-semibold">Winning Award</span>
                        </div>
                        <div class="  text-center">
                            <h2 class="text-secondary font-bold ">
                                <span class=" counter">37</span>+
                            </h2>
                            <span class="block text-black font-semibold">Certified Students</span>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="grid grid-cols-12 lg:gap-10 gap-6 ">
                        <div class="xl:col-span-7 lg:col-span-6 col-span-12">
                            <img src="assets/images/all-img/testi-left.png" alt="" draggable="false" />
                        </div>
                        <div class="xl:col-span-5 lg:col-span-6 col-span-12 flex flex-col justify-center ">
                            <div class="mini-title">Testimonial</div>
                            <h4 class="column-title ">
                                What Says Our
                                <span class="shape-bg">
                                    Students</span>
                                About Us
                            </h4>
                            <div>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered. There are many
                                variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected
                                humour.
                            </div>
                            <div class="mt-12">
                                <a href="#" class="btn btn-primary">View All Reviews</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;