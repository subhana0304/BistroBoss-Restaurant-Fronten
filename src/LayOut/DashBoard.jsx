import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaCalendar, FaHome, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from 'react-icons/fa';
import useCart from '../Hoocks/UseCart';
import UseAdmin from '../Hoocks/UseAdmin';
// import UseAdmin from '../Hoocks/UseAdmin';

const DashBoard = () => {
    const [cart] = useCart();

    // const isAdmin = true;
    const [isAdmin] = UseAdmin();

    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* <!-- Page content here --> */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side bg-[#d1a054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80  text-base-content">
                    {
                        isAdmin ?
                        <>
                        {/* <!-- Sidebar content here --> */}
                    <li><NavLink to="/dashboard/adminHome"><FaHome></FaHome> Admin Home</NavLink></li>
                    <li><NavLink to="/dashboard/addItem"><FaUtensils></FaUtensils> Add Item</NavLink></li>
                    <li><NavLink to="/dashboard/manageItem"><FaWallet></FaWallet> Manage Item</NavLink></li>
                    <li><NavLink to="/dashboard/allUsers"><FaUsers></FaUsers> All Users</NavLink></li>
                    <div className="divider"></div>
                    <li><NavLink to='/'><FaHome></FaHome> Home</NavLink></li>
                    <li><NavLink to="/menu"> Our Menu</NavLink></li>
                    <li><NavLink to="/order">Order</NavLink></li>
                        </> :
                        <>
                        {/* <!-- Sidebar content here --> */}
                    <li><NavLink to="/dashboard/userHome"><FaHome></FaHome> User Home</NavLink></li>
                    <li><NavLink to="/dashboard/reservation"><FaCalendar></FaCalendar> Reservation</NavLink></li>
                    <li><NavLink to="/dashboard/myCart"><FaShoppingCart></FaShoppingCart> My Cart <div className="badge badge-warning">+{cart?.length || 0}</div></NavLink></li>
                    <li><NavLink to="/dashboard/paymentHistory"><FaWallet></FaWallet> Payment History</NavLink></li>
                    <div className="divider"></div>
                    <li><NavLink to='/'><FaHome></FaHome> Home</NavLink></li>
                    <li><NavLink to="/menu"> Our Menu</NavLink></li>
                    <li><NavLink to="/order">Order</NavLink></li>
                        </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;