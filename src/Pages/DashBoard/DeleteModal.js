import React from 'react';
import { toast } from 'react-toastify';

const DeleteModal = ({ deleteModal, refetch, setDeleteModal }) => {
    const { name, email } = deleteModal;

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
                    setDeleteModal(null);
                }
                else {
                    toast.error(`Failed doctor ${name} is delete`)
                }
            })

    }

    return (
        <div>
            <input type="checkbox" id="delete-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500">Are you sure you want to delete {name}?</h3>
                    <p className="py-4 text-red-500">Delete data no way to recover!</p>
                    <div className="modal-action">
                        <button onClick={handleDelete} className="btn btn-sm btn-error text-white">Delete</button>
                        <label for="delete-modal" className="btn btn-sm">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;