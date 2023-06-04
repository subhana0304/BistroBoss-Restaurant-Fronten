import React from 'react';
import SectionTitle from '../Component/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from '../Component/CheckOutForm';
import { Helmet } from 'react-helmet-async';
import useCart from '../Hoocks/UseCart';

// TODO: provide publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)

const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))
    return (
        <div>
            <Helmet>
                <title>BistroBoss | Payment</title>
            </Helmet>
            <SectionTitle subHeading="Please Process" heading="Payment"></SectionTitle>
            
            <Elements stripe ={stripePromise}>
                <CheckOutForm cart={cart} price={price}></CheckOutForm>
            </Elements>
        </div>
    );
};

export default Payment;