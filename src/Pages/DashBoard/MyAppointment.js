import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyAppointment = () => {

    const [appointments, setAppointments] = useState([]);
    const [user, loading] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patient=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    return res.json()
                })
                .then(data => {
                    setAppointments(data)
                    console.log(data);
                })
        }
    }, [user])

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map((appoint, index) => <tr
                                key={index}>
                                <th>{index + 1}</th>
                                <td>{appoint.patientName}</td>
                                <td>{appoint.date}</td>
                                <td>{appoint.slot}</td>
                                <td>{appoint.treatment}</td>
                                <td>{(appoint.price && !appoint.paid) &&
                                    <Link to={`/dashboard/payment/${appoint._id}`}>
                                        <button className='btn btn-sm btn-primary text-white'>Pay</button>
                                    </Link>}</td>
                                <td>{(appoint.price && appoint.paid) &&
                                    <button className='btn btn-sm btn-success text-white'>Paid</button>
                                }</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;