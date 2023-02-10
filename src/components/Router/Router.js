import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Addproduct from '../Page/Addproduct/Addproduct';
import Adminorder from '../Page/Adminorder/Adminorder';
import Card from '../Page/Card/Card';
import Cardproduct from '../Page/Cardproduct/Cardproduct';
import CardDetails from '../Page/Home/CardDetails/CardDetails';
import Home from '../Page/Home/Home';
import Login from '../Page/Login/Login';
import SingUp from '../Page/Login/SingUp';
import ProductList from '../Page/ProductList/ProductList';
import Root from '../Root/Root';
import PrivateRoute from './PrivateRoute';

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
                path:'/card',
                element:<Card></Card>
            },
            {
                path:'/cardDetails/:id',
                element:<PrivateRoute><CardDetails></CardDetails></PrivateRoute> 
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signUp',
                element:<SingUp></SingUp>
            },
            {
                path:'/cards',
                element:<PrivateRoute><Cardproduct></Cardproduct></PrivateRoute> 
            },
            {
                path:'/order',
                element:<PrivateRoute><Adminorder></Adminorder></PrivateRoute> 
            },
            {
                path:'/addproduct',
                element:<PrivateRoute><Addproduct></Addproduct></PrivateRoute>
            },
            {
                path:'/productList',
                element:<PrivateRoute><ProductList></ProductList></PrivateRoute>
            },
        ]
    }
])

export default Router;