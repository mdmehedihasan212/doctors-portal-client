import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;

    return (
        <div className="card max-w-sm lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body items-center">
                <h2 className="card-title text-2xl text-secondary">{name}</h2>
                <p className='uppercase'>{
                    slots.length ?
                        <span>{slots[0]}</span>
                        :
                        <span className='text-red-600'>Please try another day</span>
                }</p>
                <p className='uppercase'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions mt-2">

                    <label
                        for="booking-modal"
                        onClick={() => setTreatment(service)}
                        disabled={slots.length === 0}
                        className='btn btn-primary uppercase font-bold text-white bg-gradient-to-r from-secondary to-primary'>Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;