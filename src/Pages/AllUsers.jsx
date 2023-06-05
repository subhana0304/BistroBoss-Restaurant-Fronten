import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../Hoocks/useAxiosSecure';

const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('users')
        return res.data;
    })

    const handleMakeAdmin = user =>{
        fetch(`https://bistro-boss-server-green.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an admin`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

    const handleDelete = user =>{

    }

    return (
        <div>
            <Helmet>
                <title>BistroBoss | All Users</title>
            </Helmet>
            <div>
                <h1 className='text-3xl font-semibold'>Total Users: {users.length}</h1>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) =>
                                <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{ user.role === 'admin' ? 'admin' : <button onClick={()=>handleMakeAdmin(user)} className="btn btn-ghost bg-orange-600 text-white"><FaUserShield></FaUserShield></button> }</td>
                                    <td><button onClick={()=>handleDelete(user)} className="btn btn-ghost bg-red-700 text-white"><FaTrashAlt></FaTrashAlt></button></td>
                                </tr>)
                            }
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;