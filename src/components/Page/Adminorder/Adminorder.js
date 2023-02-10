import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../Loading/Loading';

const Adminorder = () => {

    const { data: course, isLoading, refetch } = useQuery({
        queryKey: ['course'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/booking`, {
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
                                <th>Price</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                course?.data?.map(courses =>
                                    <tr key={courses._id}>

                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={courses.image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>

                                            </div>
                                        </td>
                                        <td>
                                            {courses.name}

                                        </td>
                                        <td>{courses.price}</td>
                                        <th>
                                            <Link to={`/cardDetails/${courses.id}`} className="btn btn-ghost btn-xs">details</Link>
                                        </th>


                                    </tr>
                                )
                            }



                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Adminorder;