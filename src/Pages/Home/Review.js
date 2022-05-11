import React from 'react';

const Review = ({ review }) => {
    return (
        <section className="card w-96 bg-base-100 shadow-xl">
            <article className="card-body">
                <p>{review.reviews}</p>
            </article>
            <article className='flex p-8'>
                <div className="avatar">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={review.img} alt='img' />
                    </div>
                </div>
                <div className='px-4'>
                    <h2 className='font-bold'>{review.name}</h2>
                    <h4>{review.location}</h4>
                </div>
            </article>
        </section>
    );
};

export default Review;