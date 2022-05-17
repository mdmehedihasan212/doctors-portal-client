import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch }) => {
    const { email, role } = user

    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed make an admin')
                }
                return res.json()
            })
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('Successfully made an admin')
                }
            })
    }

    return (
        <tr>
            <th>1</th>
            <td>{user.email}</td>
            <td >{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-sm">Make Admin</button>}</td>
            <td><button className="btn btn-sm">Remove</button></td>
        </tr>
    );
};

export default UserRow;