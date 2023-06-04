import React from 'react';
import FoodCard from './FoodCard';

const OrderTab = ({items}) => {
    // todo: pagination here
    return (
        <div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {
                        items.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                    }
                    </div>
        </div>
    );
};

export default OrderTab;