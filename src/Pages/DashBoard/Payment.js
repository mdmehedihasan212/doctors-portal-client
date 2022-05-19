import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L14KjAQv1S3Cord0vDrT20jYMa3eYBQSBilQWwbqEyzfWXHTyxdBiR80ii7WQdW3JBPjKKtnI4HB2P9RMBQsyNA00fqQLFUas');

const Payment = () => {
    const { id } = useParams();

    const url = `http://localhost:5000/payment/${id}`
    const { data: payment, isLoading } = useQuery('payment', () => fetch(url, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    const { date, slot, patientName, price, treatment } = payment || {};

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='flex h-screen w-full justify-center items-center gap-4'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h1 className="card-title font-bold text-primary">Patient: {patientName}</h1>
                    <h3 className="card-title">Treatment: {treatment}</h3>
                    <p>Your appointment: {date} at {slot}</p>
                    <p>Service Charge: ${price}</p>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h1 className="card-title font-bold text-primary">Card Details</h1>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm payment={payment} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;