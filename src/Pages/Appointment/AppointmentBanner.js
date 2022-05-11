import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import bg from '../../assets/images/bg.png';
import chair from '../../assets/images/chair.png';

const Appointment = () => {
    const [date, setDate] = useState(new Date())

    return (
        <div class="hero min-h-screen" style={{
            background: `url(${bg})`,
            backgroundSize: 'cover'
        }}>
            <div class="hero-content flex-col lg:flex-row-reverse mt-40 gap-20 lg:gap-32">
                <img src={chair} class="max-w-sm lg:max-w-lg rounded-lg shadow-2xl" alt='img' />
                <div className='rounded-lg shadow-xl'>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
                <p>You picked {format(date, 'PP')}.</p>
            </div>
        </div>
    );
};

export default Appointment;