import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Footer from './Footer';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import OurServices from './OurServices';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <OurServices></OurServices>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;