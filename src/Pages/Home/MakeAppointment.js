import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section className='flex justify-center items-center' style={{
            background: `url(${appointment})`
        }}>
            <div className='flex-1'>
                <img className='mt-[100]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h4 className='text-2xl text-primary'>Appointment</h4>
                <h5 className='text-white'>Make an appointment Today</h5>
                <p className='text-white'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;