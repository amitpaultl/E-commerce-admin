import React from 'react';
import Products from './products';
import './Product.css'
const Product = () => {
    return (
        <div>
            <div className=" section-padding">
                <div className="container">
                    <div className="text-center">
                        <div className="mini-title">Popular Product</div>
                        <div className="column-title ">
                            Choose Our Top
                            <span className="shape-bg">Product</span>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] pt-10">

                        <Products></Products>           

                    </div>
                    <div className="text-center lg:pt-16 pt-10">
                        <a href="#" className=" fxt-btn-fill">View All Product</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;