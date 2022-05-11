import React from 'react';
import chair from '../../assets/images/chair.png';
import bg from '../../assets/images/bg.png';
import PrimaryButton from '../Shared/PrimaryButton';

const Banner = () => {
    return (
        <section className="hero min-h-screen" style={{
            background: `url(${bg})`,
            backgroundSize: 'cover'
        }}>
            <div className="hero-content flex-col lg:flex-row-reverse px-12">
                <img src={chair} alt='img' className="max-w-sm lg:max-w-lg rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </section>
    );
};

export default Banner;