import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthProvider } from '../../Context/AuthContext';
import { toast } from 'react-hot-toast';
import { FaUserCircle, IconName } from "react-icons/fa";
import './Header.css'
const Header = () => {
    const { logOut, user } = useContext(AuthProvider)

    // singOut
    const singOut = () => {
        logOut()
            .then(() => {
            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage)

            });
    }

    console.log(user);
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to={'/'}>Home</Link></li>

                            <li><Link to={'/card'}>Card</Link></li>


                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">REPLIQ</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            user?.email ? <>
                                <li><Link to={'/'}>Home</Link></li>
                                <li><Link to={'/card'}>All Product</Link></li>
                                <li><Link to={'/productList'}>Product List</Link></li>
                                <li><Link to={'/order'}>Order</Link></li>
                                <li><Link to={'/addproduct'}>Add product</Link></li>
                                <li><Link to={'/cards'}>Card</Link></li>
                                <li><Link to={'/signUp'}>Add Customer</Link></li>
                            </> : <>
                                <li><Link to={'/'}>Home</Link></li>
                                <li><Link to={'/card'}>All Product</Link></li>
                            </>
                        }

                    </ul>
                </div>
                <div className="navbar-end ">
                    {
                        user?.email ? <div className='flex items-center'>
                            {
                                user?.photoURL ? <img className='user-img ' src={user.photoURL} alt="" /> : <FaUserCircle></FaUserCircle>
                            }
                            <Link to={'/login'} onClick={singOut} className=" ml-3 text-emerald-800">Log Out</Link>


                        </div> : <div>
                            <Link to={'/login'} className=" text-emerald-800">Login</Link>
                            <Link to={'/signUp'} className=" text-emerald-800 ml-3">Sing Up</Link>
                        </div>
                    }

                    {

                    }

                </div>
            </div>
        </div >
    );
};

export default Header;