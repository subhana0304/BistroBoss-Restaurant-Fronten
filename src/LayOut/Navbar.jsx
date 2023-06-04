import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

import { AuthContext } from '../Provider/AuthProvider';
import useCart from '../Hoocks/UseCart';
import UseAdmin from '../Hoocks/UseAdmin';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] =useCart();
    const [isAdmin] = UseAdmin();
    // console.log(cart);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navOptions = <div className=' items-center'>
        <Link className='me-3' to="/">Home</Link>
        <Link className='me-3' to="/menu">Our Menu</Link>
        <Link className='me-3' to="/order">Order</Link>
        {
            isAdmin 
            ? <Link className='me-3' to="/dashboard/adminHome">Dashboard</Link> 
            : <Link className='me-3' to="/dashboard/userHome">Dashboard</Link>
        }
        <Link className='me-3' to="/dashboard/myCart">My Cart</Link>
        <Link className='me-3' to="/">
            <button className="btn gap-2">
                <FaShoppingCart />
                <div className="badge badge-warning">+{cart?.length || 0}</div>
            </button>
        </Link>
        {
            user
                ? <>
                    {/* <span>{user.displayName}</span> */}
                    <button onClick={handleLogOut} className='btn bg-orange-500 border-0'>LogOut</button>
                </>
                : <Link className='me-3' to="/login">Login</Link>
        }
    </div>
    return (
        <div className="navbar fixed z-10 max-w-screen-xl mx-auto bg-black bg-opacity-25 text-white ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact space-x-3 dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;