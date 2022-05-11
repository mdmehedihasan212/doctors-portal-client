import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import bg from '../../assets/images/bg.png';
import chair from '../../assets/images/chair.png';

const Appointment = ({ date, setDate }) => {

    return (
        <div className="hero min-h-screen" style={{
            background: `url(${bg})`,
            backgroundSize: 'cover'
        }}>
            <div className="hero-content flex-col lg:flex-row-reverse gap-20 lg:gap-32">
                <img src={chair} className="max-w-sm lg:max-w-lg rounded-lg shadow-2xl" alt='img' />
                <div className='rounded-lg shadow-xl'>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default Appointment;