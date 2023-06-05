import React from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import useCart from '../Hoocks/UseCart';

const FoodCard = ({item}) => {
    const {name, image, price, recipe, _id} = item;
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [,refetch] = useCart();

    const handleAddToCard = item =>{
        console.log(item);
        if(user && user.email){
            const cartItem = {menuItemId: _id, name, image, price, email: user.email};
            fetch('https://bistro-boss-server-green.vercel.app/carts',{
                method: 'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Food Added On the carts',
                    showConfirmButton: false,
                    timer: 1500
                  })
                }
            })
        }
                else{
                    Swal.fire({
                        title: 'Please login to order the food',
                        text: "You won't be able to revert this!",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Login now!'
                      }).then((result) => {
                        if (result.isConfirmed) {
                          navigate('/login', {state: {from: location}});
                        }
                      })
                } 
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className='absolute bg-orange-600 text-white p-2 rounded mt-4 mr-5 right-0'>{price}</p>
            <div className="card-body text-center flex flex-col justify-center items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                <Link to="">
                <button onClick={()=>handleAddToCard(item)} className="btn btn-outline text-center border-0 border-b-4 border-orange-500">Add To Card</button>
                </Link>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;