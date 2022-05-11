import React from 'react';
import doctor from '../../assets/images/doctor-small.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section className='flex justify-center items-center px-32 my-40' style={{
            background: `url(${appointment})`,
            height: '533px'
        }}>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" style={{ height: '636px' }} />
            </div>
            <div className='flex-1'>
                <h4 className='text-2xl text-secondary mb-4'>Appointment</h4>
                <h5 className='text-white text-4xl mb-4'>Make an appointment Today</h5>
                <p className='text-white text-justify mb-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;