import React from 'react';

const DoctorRow = ({ doctor, index, setDeleteModal }) => {
    const { name, specialist, img } = doctor;

    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div class="avatar">
                    <div class="w-12">
                        <img src={img} alt="doctors img" />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{specialist}</td>
            <td><label onClick={() => setDeleteModal(doctor)} for="delete-modal" class="btn btn-sm btn-error text-white modal-button">Delete</label></td>
        </tr>
    );
};

export default DoctorRow;