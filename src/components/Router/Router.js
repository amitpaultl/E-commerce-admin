import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Page/Home/Home';
import Login from '../Page/Login/Login';
import SingUp from '../Page/Login/SingUp';
import Root from '../Root/Root';

const Router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signUp',
                element:<SingUp></SingUp>
            },
        ]
    }
])

export default Router;