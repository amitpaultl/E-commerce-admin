import React from 'react';
import { Link } from 'react-router-dom';

const TableProduct = ({data}) => {
    const {image,name,instructor,_id } = data
    return (
        
            <tr>

                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={image} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>

                    </div>
                </td>
                <td>
                    {name}

                </td>
                <td>{instructor}</td>
                <th>
                    <Link to={`/cardDetails/${_id}`}className="btn btn-ghost btn-xs">details</Link>
                </th>
            </tr>
        
    );
};

export default TableProduct;