import React from 'react';
import Banner from './Banner';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import OurServices from './OurServices';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <OurServices></OurServices>
            <MakeAppointment></MakeAppointment>
        </div>
    );
};

export default Home;