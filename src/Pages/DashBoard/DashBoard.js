import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const DashBoard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user)
    return (
        <div className="drawer drawer-mobile px-8">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* <!-- Page content here --> */}
                <h1 className='text-2xl text-primary mb-4'>My Appointment</h1>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-primary">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to={'/dashboard'}>My Appointment</Link></li>
                    <li><Link to={'/dashboard/review'}>My Review</Link></li>
                    {admin && <li><Link to={'/dashboard/users'}>Users</Link></li>}
                </ul>
            </div>
        </div>
    );
};

export default DashBoard;