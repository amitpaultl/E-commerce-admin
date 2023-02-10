import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Loading/Loading';
import TableProduct from './TableProduct';

const ProductList = () => {
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
            <div className="container">
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">

                        <thead>
                            <tr>

                                <th>Image</th>
                                <th>Name</th>
                                <th>Instructor</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                course?.data?.map(courses => <TableProduct data={courses} key={courses._id}></TableProduct>)
                            }
                            


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ProductList;