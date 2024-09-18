"use client"
import CheckoutForm from '@/components/home/CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useSearchParams } from 'next/navigation'
import React from 'react'

function payment() {
    const searchParam=useSearchParams();
    const amount=searchParam.get('amount');

    const stripePromise=loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
    const options={
        mode:'payment',
        amount:Math.round(amount*100),
        currency:'all'
    }
    return (
        <Elements stripe={stripePromise} options={options}>
            <CheckoutForm amount={amount}/>
            </Elements>
    )
}

export default payment