import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthProvider } from '../../Context/AuthContext';
import Loading from '../../Loading/Loading';

const Cardproduct = () => {
    const { user } = useContext(AuthProvider)

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

    const userCard = course?.data?.filter(myCard => myCard?.email === user?.email);

    // delete
    const deleteHandel = (id) => {

   
            fetch(`http://localhost:5000/booking/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json',
                }
            })
                .then(res => res.json())
                .then(data => {
                    toast.success(data.message)

                    refetch()
                })
        
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
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                userCard?.map(courses =>
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
                                            <Link to={`/cardDetails/${courses._id}`} className="btn btn-ghost btn-xs">details</Link>
                                        </th>
                                        <th>
                                            <button onClick={() => deleteHandel(courses._id)} className="btn btn-ghost bg-red-500 text-white hover:bg-green-500 btn-xs">details</button>
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

export default Cardproduct;