import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../Component/SectionTitle';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../Hoocks/useAxiosSecure';
import Swal from 'sweetalert2';

const img_hosting_token =  import.meta.env.VITE_Image_Upload_token;
const AddItem = () => {
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    const onSubmit = data => {
        console.log(data);
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse => {
            console.log(imgResponse);
            if(imgResponse.success){
                const imgURL = imgResponse.data.display_url;
                const {name, price, category, recipe} = data;
                const newItem = {name, price: parseFloat(price), category, recipe, image:imgURL}
                console.log(newItem);
                axiosSecure.post('/menu', newItem)
                .then(data => {
                    console.log('after posting new menu Item', data.data);
                    if(data.data.insertedId){
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your work has been saved',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
            }
        })
    };

    return (
        <div className='w-full px-10'>
            <Helmet>
                <title>BistroBoss | Add item</title>
            </Helmet>
            <SectionTitle subHeading="What's new" heading="Add an Item"></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe name<span className='text-orange-500'>*</span></span>
                    </label>
                    <input type="text" placeholder="Recipe name" {...register("name", {required: true, maxLength: 120})} className="input input-bordered w-full " />
                </div>
                <div className='grid md:grid-cols-2 gap-5'>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text">Category<span className='text-orange-500'>*</span></span>
                    </label>
                    <select defaultValue="Pick One" {...register("category", { required: true })} className="select select-bordered">
                        <option disabled>Pick One</option>
                        <option>Pizza</option>
                        <option>Salad</option>
                        <option>Soup</option>
                        <option>Drinks</option>
                        <option>Dessert</option>
                    </select>
                </div>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Price<span className='text-orange-500'>*</span></span>
                    </label>
                    <input type="number" placeholder="price" {...register("price", { required: true })} className="input input-bordered w-full " />
                </div>
                </div>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe Details<span className='text-orange-500'>*</span></span>
                    </label>
                    <textarea {...register("recipe", { required: true })} className='textarea textarea-bordered h-24 w-full ' placeholder='Bio'></textarea>
                </div>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text">Item Image<span className='text-orange-500'>*</span></span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                </div>
                <input className='btn bg-orange-600 border-0 mt-5' type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;