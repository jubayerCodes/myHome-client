import { Rating } from '@mui/material';
import React from 'react';
import './TestimonialCard.css'

const TestimonialCard = ({ testimonial }) => {

    const { name, title, review, rating, photo } = testimonial

    return (
        <div className='bg-white testimonial-card p-8 shadow-xl rounded-md'>
            <div className='flex justify-start items-center gap-3 mb-5'>
                <img src={photo} alt="" className='h-[45px] w-[45px] rounded-full' />
                <div>
                    <h5 className='mb-1 font-medium'>{name}</h5>
                    <p className='text-xs text-[var(--text-color)]'>{title}</p>
                </div>
            </div>

            <p className='text-[var(--text-color)] text-sm mb-3'>{review}</p>
            <Rating sx={{ fontSize: '18px' }} name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
        </div>
    );
};

export default TestimonialCard;