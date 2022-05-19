import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';

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
        <div className='hero min-h-screen bg-base-200'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h1 class="card-title font-bold text-primary">{patientName}</h1>
                    <h2 class="card-title">Treatment: {treatment}</h2>
                    <h4>Your appointment: {date} at {slot}</h4>
                    <h4>Service Charge: ${price}</h4>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary text-white">Payment</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;