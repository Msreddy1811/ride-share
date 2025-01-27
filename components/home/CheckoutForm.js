import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React from 'react'

function CheckoutForm({amount}) {
    const stripe=useStripe();
    const elements=useElements();

    const handleSubmit = async(event)=>{
        event.preventDefault();
        if(elements==null)
        {
            return ;
        }
        const {error:submitError}=await elements.submit();
        if(submitError)
        {
            return ;
        }
        const res=await fetch('/api/create-intent',{
            method:'POST',
            body:JSON.stringify({
                amount:amount
            })
        });

        const secretKey=await res.json();
        console.log(secretKey);

        const {error}=await stripe.confirmPayment({
            clientSecret:secretKey,
            elements,
            confirmParams:{
                return_url:"http://https://ride-shr.vercel.app/Payment Conform"
            }
        })
        }

    return (
    <div className='flex flex-col justify-center items-center w-full mt-6'>
        <h2 className='m-5 font-bold'>Amount to pay: {amount}</h2>
        <form onSubmit={handleSubmit}
        className='max-w-middle'>
            <PaymentElement/>
            <button className='w-full bg-black text-white p-2 rounded-lg mt-2'>pay</button>
        </form>
    </div>
    )
}


export default CheckoutForm