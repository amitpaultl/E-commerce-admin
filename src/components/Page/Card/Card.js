import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Loading/Loading';
import Cards from './Cards';

const Card = () => {
        // course data load
        const { data: course, isLoading, refetch } = useQuery({
            queryKey: ['course'],
            queryFn: async () => {
                try {
                    const res = await fetch(`https://repliq-server-gules.vercel.app/addProduct`, {
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
    
        if (course?.data?.length === 0) {
            return (
                <div className="featured-car">
                    <div className="featured-title">
                        <div className="main-title">
                            <h1><span className='text-uppercase'>No course Available</span></h1>
                        </div>
                    </div>
                </div>
            )
        }
    return (
        <div>
            <div className=" section-padding bg-slate-200">
                <div className="container">
                    <div className="text-center">
                        <div className="column-title ">
                           All 
                            <span className="shape-bg">Product</span>
                            Show
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] pt-10">

                        {
                            course?.data?.map(courses => <Cards data={courses} key={courses._id 
                            }></Cards>)
                        }
                        

                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Card;