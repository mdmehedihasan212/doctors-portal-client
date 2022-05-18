import React from 'react';

const DoctorRow = ({ doctor, index }) => {
    const { name, specialist, img } = doctor || {};
    console.log(doctor);
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
            <td><button class="btn btn-error text-white">Delete</button></td>
        </tr>
    );
};

export default DoctorRow;