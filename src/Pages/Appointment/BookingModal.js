import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ date, treatment, setTreatment }) => {
    const { name, slots } = treatment;

    const handleSubmit = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(slot);
        setTreatment(null)
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-center">Book Appointment : {name}</h3>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-4 mt-3 justify-items-center'>
                        <input type="text" disabled value={format(date, 'PP')} class="input input-bordered w-full max-w-xs" />
                        <select name='slot' class="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }

                        </select>
                        <input type="text" name='name' placeholder="Full Name" class="input input-bordered w-full max-w-xs" />
                        <input type="number" name='number' placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' placeholder="Email Address" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" value='submit' class="input input-bordered w-full max-w-xs
                        btn btn-primary uppercase font-bold text-white bg-gradient-to-r from-secondary to-primary" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;