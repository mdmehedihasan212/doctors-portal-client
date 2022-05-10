import React from 'react';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const Contact = () => {
    return (
        <section className='bg-primary px-10 py-14 ' style={{
            background: `url(${appointment})`
        }}>
            <article>
                <div className='text-center'>
                    <h4 className='text-secondary'>Contact Us</h4>
                    <h5 className='text-3xl text-white mb-10'>Stay connected with us</h5>
                </div>
                <div className='grid grid-cols-1 justify-items-center gap-5'>
                    <input
                        type="text"
                        className="input w-1/2 mx-w-md"
                        placeholder="Email Address" />
                    <input
                        type="text"
                        className="input w-1/2 mx-w-md"
                        placeholder="Subject" />
                    <textarea
                        type="text"
                        className="textarea w-1/2 mx-w-md"
                        placeholder="Your Message"
                        style={{ height: '136px' }} />
                    <PrimaryButton>Submit</PrimaryButton>
                </div>
            </article>
        </section>
    );
};

export default Contact;