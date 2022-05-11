import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../assets/images/footer.png';

const Footer = () => {
    return (
        <footer className="p-10" style={{
            background: `url(${footer})`,
            backgroundSize: 'cover'
        }}>
            <div className="footer lg:justify-items-center">
                <div>
                    <span className="footer-title font-bold text-xl">SERVICES</span>
                    <Link to={'/'} className="link link-hover text-base">Emergency Checkup</Link>
                    <Link to={'/'} className="link link-hover text-base">Monthly Checkup</Link>
                    <Link to={'/'} className="link link-hover text-base">Weekly Checkup</Link>
                    <Link to={'/'} className="link link-hover text-base">Deep Checkup</Link>
                </div>
                <div>
                    <span className="footer-title font-bold text-xl">ORAL HEALTH</span>
                    <Link to={'/'} className="link link-hover text-base">Fluoride Treatment</Link>
                    <Link to={'/'} className="link link-hover text-base">Cavity Filling</Link>
                    <Link to={'/'} className="link link-hover text-base">Teeth Whitening</Link>
                </div>
                <div>
                    <span className="footer-title font-bold text-xl">OUR ADDRESS</span>
                    <Link to={'/'} className="link link-hover text-base">New York - 101010 Hudson</Link>
                </div>
            </div>
            <div className='mt-36 text-center'>
                <p>Copyright © 2022 - All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;