import React from 'react';
import Products from './products';
import './Product.css'
import Loading from '../../../Loading/Loading';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
const Product = () => {

    // course data load
    const { data: course, isLoading, refetch } = useQuery({
        queryKey: ['course'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/addProduct`, {
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

    const productSlice = course?.data?.slice( -3)

    
    return (
        <div>
            <div className=" section-padding bg-slate-200">
                <div className="container">
                    <div className="text-center">
                        <div className="mini-title">Popular Product</div>
                        <div className="column-title ">
                            Choose Our Top
                            <span className="shape-bg">Product</span>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] pt-10">
                        {
                            productSlice?.map(courses => <Products data={courses} key={courses._id 
                            }></Products>)
                        }
                        

                    </div>
                    <div className="text-center lg:pt-16 pt-10">
                        <Link  to={'/card'} className=" fxt-btn-fill">View All Product</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;