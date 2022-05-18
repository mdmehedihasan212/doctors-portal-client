import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteModal from './DeleteModal';
import DoctorRow from './DoctorRow';

const ManageDoctor = () => {
    const [deleteModal, setDeleteModal] = useState(null)

    const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch('http://localhost:5000/doctors', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Specialist</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors?.map((doctor, index) => <DoctorRow
                                key={doctor._id}
                                index={index}
                                doctor={doctor}
                                refetch={refetch}
                                setDeleteModal={setDeleteModal}
                            ></DoctorRow>)
                        }
                    </tbody>
                </table>
            </div>
            {deleteModal && <DeleteModal
                deleteModal={deleteModal}
                refetch={refetch}
                setDeleteModal={setDeleteModal}
            ></DeleteModal>}
        </div>
    );
};

export default ManageDoctor;