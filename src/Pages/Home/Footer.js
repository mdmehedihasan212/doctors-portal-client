import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../assets/images/footer.png';

const Footer = () => {
    return (
        <footer class="p-10" style={{
            background: `url(${footer})`,
            backgroundSize: 'cover'
        }}>
            <div className="footer">
                <div>
                    <span class="footer-title">SERVICES</span>
                    <Link to={'/'} class="link link-hover">Emergency Checkup</Link>
                    <Link to={'/'} class="link link-hover">Monthly Checkup</Link>
                    <Link to={'/'} class="link link-hover">Weekly Checkup</Link>
                    <Link to={'/'} class="link link-hover">Deep Checkup</Link>
                </div>
                <div>
                    <span class="footer-title">ORAL HEALTH</span>
                    <Link to={'/'} class="link link-hover">Fluoride Treatment</Link>
                    <Link to={'/'} class="link link-hover">Cavity Filling</Link>
                    <Link to={'/'} class="link link-hover">Teath Whitening</Link>
                </div>
                <div>
                    <span class="footer-title">OUR ADDRESS</span>
                    <Link to={'/'} class="link link-hover">New York - 101010 Hudson</Link>
                </div>
            </div>
            <div className='mt-10 my-3 text-center'>
                <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
            </div>
        </footer>
    );
};

export default Footer;