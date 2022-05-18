import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, index, refetch }) => {
    const { name, specialist, img, email } = doctor;

    const handleDelete = () => {
        fetch(`http://localhost:5000/doctors/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`Doctor: ${name} is delete`)
                    refetch();
                }
                else {
                    toast.error(`Failed doctor ${name} is delete`)
                }
            })
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div class="avatar">
                    <div class="w-16 rounded">
                        <img src={img} alt="doctors img" />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{specialist}</td>
            <td><button onClick={handleDelete} class="btn btn-error text-white">Delete</button></td>
        </tr>
    );
};

export default DoctorRow;