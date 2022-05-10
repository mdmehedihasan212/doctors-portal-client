import React from 'react';

const InfoCard = ({ img, cardTitle, bgColor, cardDetails }) => {
    return (
        <div class={`card lg:card-side shadow-xl ${bgColor}`}>
            <figure>
                <img src={img} alt="icon" />
            </figure>
            <div class="card-body">
                <h2 class="card-title text-white">{cardTitle}</h2>
                <p>{cardDetails}</p>
            </div>
        </div>
    );
};

export default InfoCard;