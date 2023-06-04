import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../Component/SectionTitle';
import UseMenu from '../Hoocks/UseMenu';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../Hoocks/useAxiosSecure';

const ManageItem = () => {
    const [menu, ,refetch] = UseMenu();
    const [axiosSecure] = useAxiosSecure();

    const handleDelete = item =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed){
                
                axiosSecure.delete(`/menu/${item._id}`)
                .then(res =>{
                    console.log('deleted res', res.data);
                    if(res.data.deletedCount > 0){
                        refetch();
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                    }
                })
            }
          })
    }

    return (
        <div className='w-full'>
            <Helmet>
                <title>BistroBoss | Manage item</title>
            </Helmet>
            <SectionTitle heading='Manage All item' subHeading="Hurry Up"></SectionTitle>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Item</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menu.map((item, index) =>
                                <tr key={item._id}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{item.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{item.category}</td>
                                    <td>{item.price}</td>
                                    <td><button onClick={()=>handleUpdate(item)} className="btn btn-ghost bg-orange-600 text-white"><FaTrashAlt></FaTrashAlt></button></td>
                                    <td><button onClick={()=>handleDelete(item)} className="btn btn-ghost bg-red-700 text-white"><FaTrashAlt></FaTrashAlt></button></td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageItem;