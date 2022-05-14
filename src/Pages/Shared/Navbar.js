import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from './Loading';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const [user, loading] = useAuthState(auth);

    const menu = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/appointment'}>Appointment</Link></li>
        <li><Link to={'/reviews'}>Reviews</Link></li>
        <li><Link to={'/about'}>About</Link></li>
        <li><Link to={'/contact'}>Contact Us</Link></li>
        {
            user ?
                <button onClick={() => signOut(auth)} class="btn btn-ghost">Sign Out</button>
                :
                <li><Link to={'/login'}>Login</Link></li>
        }
    </>

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menu}
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost normal-case text-2xl pl-12 font-bold">Doctors Portal</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal pl-20">
                    {menu}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;