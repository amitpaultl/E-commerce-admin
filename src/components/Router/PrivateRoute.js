import React, { useContext } from 'react';
import { AuthProvider } from '../Context/AuthContext';
import load from '../Image/loadingc.gif'
import Loading from '../Loading/Loading';

const PrivateRoute = ({ children }) => {

    // usecontext
    const { user, loading } = useContext(AuthProvider)

    // // loading
    if (loading) {
        return (
            <Loading></Loading>
        )
    }

    if (user) {
        return children
    }

};

export default PrivateRoute;