import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from '../LayOut/SocialLogin';

const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const {createUser, updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        // console.log(data);
        createUser(data.email, data.password)
        .then(result =>{
            const loggedUser = result.user;
            // console.log(loggedUser);

            updateUserProfile(data.name, data.photoUrl)
            .then(()=>{
                const saveUser = {name: data.name, email: data.email}
                fetch('http://localhost:5000/users',{
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                .then(res => res.json())
                .then(data => {
                    if(data.insertedId){
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'User created successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                          navigate('/');
                    }
                })
            })
            .catch(error => console.log(error))
        })
    }


    return (
        <>
        <Helmet>
                <title>BistroBoss | Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">SignUp now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card md:w-1/ max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" {...register("name", { required: true })} name='name' className="input input-bordered" />
                                {errors.name && <span className='text-red-700'>Name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="photoURL" {...register("photoUrl", { required: true })} name='photoUrl' className="input input-bordered" />
                                {errors.name && <span className='text-red-700'>PhotoUrl is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" {...register("email", { required: true })} name='email' className="input input-bordered" />
                                {errors.email && <span className='text-red-700'>Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" {...register("password", {
                                    required: true, minLength: 6, maxLength: 15
                                })} name='password' className="input input-bordered" />
                            </div>
                            {errors.password?.type === 'required' && <span className='text-red-700'>Password is required</span>}
                            {errors.password?.type === 'minLength' && <span className='text-red-700'>Password must be 6 Characters</span>}
                            {errors.password?.type === 'maxLength' && <span className='text-red-700'>Password must be in 15 Characters</span>}
                            {/* {errors.password?.type === 'pattern' && <span className='text-red-700'>password must have one uppercase one lowercase one number one special characters</span>} pattern: /^(?=.*[A-Z])(?=.*[a-z])$/*/}
                            <div className="form-control mt-6">
                                <input className='btn btn-outline text-center border border-b-4  border-orange-500' type="submit" value="SignUp" />
                            </div>
                        </form>
                        <p className='mx-auto pb-10'><small>Already have an account? <Link className='text-orange-600' to="/login">Login</Link></small></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;