import React from 'react';

const InfoCard = ({ img, cardTitle, bgColor, cardDetails }) => {
    return (
        <div className={`card max-h-screen lg:card-side shadow-xl ${bgColor}`}>
            <figure>
                <img className='p-5 ' src={img} alt="icon" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-white">{cardTitle}</h2>
                <p className='text-white'>{cardDetails}</p>
            </div>
        </div>
    );
};

export default InfoCard;