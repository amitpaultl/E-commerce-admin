import React from 'react';
import img from '../Image/loadingc.gif'
const Loading = () => {
    return (
        <div>
            <div className="loading">
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default Loading;