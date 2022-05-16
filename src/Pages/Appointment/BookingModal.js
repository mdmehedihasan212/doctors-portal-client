import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const BookingModal = ({ date, treatment, setTreatment, refetch }) => {
    const { _id, name, slots } = treatment;
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return <Loading></Loading>
    }

    const handleSubmit = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        const formattedDate = format(date, 'PP')
        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            patientName: user.displayName,
            patient: user.email,
            phone: event.target.number.value

        }

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast(`Appointment is on ${formattedDate} at ${slot}`)
                }
                else {
                    toast.error(`Already an appointment on ${data.booking?.date} at ${data.booking?.slot}`)
                }
                setTreatment(null);
                refetch();
            })

    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-center text-secondary">Book Appointment : {name}</h3>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-4 mt-3 justify-items-center'>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option
                                    key={index}
                                    value={slot}
                                >{slot}</option>)
                            }

                        </select>
                        <input type="text" disabled name='name' value={user?.displayName} className="input input-bordered w-full max-w-xs" />
                        <input type="email" disabled name='email' value={user?.email} className="input input-bordered w-full max-w-xs" />
                        <input type="number" name='number' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value='submit' className="input input-bordered w-full max-w-xs
                        btn btn-primary uppercase font-bold text-white bg-gradient-to-r from-secondary to-primary" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;