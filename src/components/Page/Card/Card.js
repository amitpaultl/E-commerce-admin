import React from 'react';
import Cards from './Cards';

const Card = () => {
    return (
        <div>
            <div className=" section-padding bg-slate-200">
                <div className="container">
                    <div className="text-center">
                        <div className="column-title ">
                           All 
                            <span className="shape-bg">Product</span>
                            Show
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] pt-10">

                        <Cards></Cards>

                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Card;