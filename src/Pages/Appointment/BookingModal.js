import React from 'react';

const BookingModal = ({ treatment }) => {
    const { name, slots } = treatment;

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-center">Book Appointment : {name}</h3>
                    <form className='grid grid-cols-1 gap-4 mt-3 justify-items-center'>
                        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" value='submit' class="input input-bordered w-full max-w-xs
                        btn btn-primary uppercase font-bold text-white bg-gradient-to-r from-secondary to-primary" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;