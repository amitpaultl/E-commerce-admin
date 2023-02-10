import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useParams } from 'react-router';
import { AuthProvider } from '../../../Context/AuthContext';
import thembel from '../../../Image/single-course-thumb.png'
import Loading from '../../../Loading/Loading';
const CardDetails = () => {
    const {user} = useContext(AuthProvider)
    const { id } = useParams();

    // course data load
    const { data: course, isLoading, refetch } = useQuery({
        queryKey: ['course'],
        queryFn: async () => {
            try {
                const res = await fetch(`https://repliq-server-gules.vercel.app/addProduct/${id}`, {
                    headers: {
                        'content-type': 'application/json',
                    },

                })
                const data = await res.json();
                return data;
            } catch (error) {
                console.log(error);
            }
        }
    })

    // loading
    if (isLoading) {
        return <Loading></Loading>
    }

    // cardAdd
    const productData ={
        id:course._id, 
        name:course.name,  
        lectures:course.lectures, 
        duration:course.duration, 
        message:course.message,
        image:course.image,
        price:course.price,
        email:user.email,
        discount:course.discount
    }
    const cardAdd = () => {

        fetch(`https://repliq-server-gules.vercel.app/booking`, {
            method: 'POST',
            headers: {

                'content-type': 'application/json',

            },
            body: JSON.stringify(productData)
        })
            .then(res => res.json())
            .then(data => {
                toast.success(data.message)


            })
            .catch((error) => {
                // Handle Errors here.
                const errorMessage = error.message;
                toast.error(errorMessage)
                // setLoading(false)
            });
    }
    console.log(course);

    return (
        <div>
            <div className="nav-tab-wrapper tabs  section-padding">
                <div className="container">
                    <div className="grid grid-cols-12 gap-[30px]">
                        <div className="lg:col-span-8 col-span-12">
                            <div className="single-course-details">
                                <div className="xl:h-[470px] h-[350px] mb-10 course-main-thumb">
                                    <img src={course.image} alt="" className=" rounded-md object-fut w-full h-full block" />
                                </div>
                                <div className=" mb-6">
                                    <span className="bg-secondary py-1 px-3 text-lg font-semibold rounded text-white ">Data Science</span>
                                </div>
                                <h2 className='text-3xl font-bold mb-3'>{course.name}</h2>
                                <p>{course.message}</p>


                            </div>
                        </div>
                        <div className="lg:col-span-4 col-span-12">


                            <div className="sidebarWrapper space-y-[30px]">
                                <div className="wdiget custom-text space-y-5 ">

                                    <h3 className='text-3xl text-green-600 font-bold mb-3'>{course.price}</h3>
                                    <button onClick={cardAdd} className="btn btn-primary w-full text-center ">
                                        Enroll Now
                                    </button>
                                    <ul className="list  ">

                                        <li className=" flex space-x-3 border-b border-[#ECECEC] mb-4 pb-4 last:pb-0 past:mb-0 last:border-0">
                                            <div className="flex-1 space-x-3 flex">
                                                <img src="assets/images/icon/user.svg" alt="" />
                                                <div className=" text-black font-semibold">Instructor</div>
                                            </div>
                                            <div className="flex-none">
                                                {course.instructor}
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
                                                {course.duration}
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