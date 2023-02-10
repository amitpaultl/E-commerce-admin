import React from 'react';
import { toast } from 'react-hot-toast';
import Loading from '../../Loading/Loading';
import './Addproduct.css'
const Addproduct = () => {

    // add product
    const submitHandel = (e) => {
        e.preventDefault()
        const common = e.target;
        const name = common.name.value;
        const instructor = common.instructor.value;
        const lectures = common.lectures.value;
        const duration = common.duration.value;
        const price = common.price.value;
        const discount = common.discount.value;
        const message = common.message.value;


        const image = common.image.files[0]
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=9b886ea0069808da69e30cf31f29ca72`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(image => {
                if (image.success) {
                    const productData = {
                        name, instructor, lectures, duration, message,
                        image: image.data.display_url,price,discount
                    }
                    fetch(`https://repliq-server-gules.vercel.app/addProduct`, {
                        method: 'POST',
                        headers: {

                            'content-type': 'application/json',
                            
                        },
                        body: JSON.stringify(productData)
                    })
                        .then(res => res.json())
                        .then(data => {
                            toast.success(data.message)
                            
                            
                        })
                        .catch((error) => {
                            // Handle Errors here.
                            const errorMessage = error.message;
                            toast.error(errorMessage)
                            // setLoading(false)
                        });
                } else {
                    return <Loading></Loading>
                }
            })
    }

    return (
        <div className=' bg-slate-200 py-16'>
            <div className="container">
                <h2 className=' text-4xl font-bold text-center'>Add Product </h2>
                <form onSubmit={submitHandel}>
                    <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-[30px] pt-10">
                        <div className="input-area">
                            <input name='name' type="text" className='border-none focus:ring-0 w-full px-5 py-3 rounded-md  text-lg outline-none' placeholder='Name' />
                        </div>
                        <div className="input-area">
                            <input name='instructor' type="text" className='border-none focus:ring-0 w-full px-5 py-3 rounded-md  text-lg outline-none' placeholder='Instructor' />
                        </div>
                        <div className="input-area">
                            <input name='lectures' type="text" className='border-none focus:ring-0 w-full px-5 py-3 rounded-md  text-lg outline-none' placeholder='Lectures' />
                        </div>
                        <div className="input-area">
                            <input type="text" name='duration' className='border-none focus:ring-0 w-full px-5 py-3 rounded-md  text-lg outline-none' placeholder='Duration' />
                        </div>
                        <div className="input-area">
                            <input type="text" name='discount' className='border-none focus:ring-0 w-full px-5 py-3 rounded-md  text-lg outline-none' placeholder='Discount' />
                        </div>
                        <div className="input-area">
                            <input type="text" name='price' className='border-none focus:ring-0 w-full px-5 py-3 rounded-md  text-lg outline-none' placeholder='price' />
                        </div>
                        <div className="input-area">
                            <input type="file" name='image' className='border-none focus:ring-0 w-full px-5 py-3 rounded-md  text-lg outline-none' placeholder='Name' />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-[30px] pt-10">
                        <textarea placeholder='Message' name="message" className='border-none focus:ring-0 w-full px-5 py-3 rounded-md  text-lg outline-none' id="" cols="30" rows="10"></textarea>


                    </div>
                    <button type='submit' className='mt-6 mx-auto btn btn-primary block  text-center'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Addproduct;