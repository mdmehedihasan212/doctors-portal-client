import React from 'react';
import cavity from '../../assets/images/cavity.png';
import fluoride from '../../assets/images/fluoride.png';
import whitening from '../../assets/images/whitening.png';
import Service from './Service';

const OurServices = () => {
    const services = [
        {
            _id: 1,
            img: cavity,
            name: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            _id: 2,
            img: fluoride,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            _id: 3,
            img: whitening,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        }
    ];

    return (
        <section className='my-28'>
            <div className='text-center'>
                <h4 className='text-primary font-bold text-xl'>Our Services</h4>
                <h5 className='text-3xl'>Services We Provide</h5>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-24'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
            <div></div>
        </section>
    );
};

export default OurServices;
