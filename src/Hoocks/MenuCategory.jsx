import React from 'react';
import MenuItem from '../Component/MenuItem';
import Cover from '../Component/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({items, title, img}) => {
    return (
        <div className='pt-8 flex flex-col items-center'>
            {title && <Cover img={img} title={title}></Cover>}
            <div className='grid md:grid-cols-2 t-16 gap-10'>
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className='my-12 mx-auto'>
            <Link to="/order"><button className="btn btn-outline text-center border-0 border-b-4 border-orange-500">Order Now</button></Link>
            </div>
        </div>
    );
};

export default MenuCategory;