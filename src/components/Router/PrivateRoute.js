import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthProvider } from '../Context/AuthContext';
import load from '../Image/loadingc.gif'
import Loading from '../Loading/Loading';

const PrivateRoute = ({ children }) => {

    // usecontext
    const { user, loading } = useContext(AuthProvider)

    // location
    const location = useLocation()

    // // loading
    if (loading) {
        return (
            <Loading></Loading>
        )
    }

    if (user) {
        return children
    }

    return (
        <Navigate to='/login' state={{ from: location }} replace></Navigate>
    );

};

export default PrivateRoute;