import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import TestimonialCard from '../TestimonialCard/TestimonialCard';

const Testimonials = ({ secondaryBg }) => {

    const testimonials = [
        {
            _id: 1,
            name: "Dana Gilmore",
            title: "Developer",
            review: "I reviewed and purchased a number of different WordPress Themes before settling on Wp Residence.",
            photo: "https://main.wpresidence.net/wp-content/uploads/2023/12/testimonial.webp",
            rating: 4.5
        },
        {
            _id: 2,
            name: "Jessica Fowley",
            title: "Developer",
            review: "We hired the WP Estate team as our buyer agent because they are the perfect team for real estate projects.",
            photo: "https://main.wpresidence.net/wp-content/uploads/2023/12/testimonial-1.webp",
            rating: 4.5
        },
        {
            _id: 3,
            name: "Virginia Wolf",
            title: "Developer",
            review: "The WP Estate team did an outstanding job helping me buy and create my first real estate website.",
            photo: "https://main.wpresidence.net/wp-content/uploads/2023/12/testimonial1-1.webp",
            rating: 4.5
        },
        {
            _id: 4,
            name: "Sara Loreley",
            title: "Developer",
            review: "I reviewed and purchased a number of different WordPress Themes before settling on Wp Residence.",
            photo: "https://main.wpresidence.net/wp-content/uploads/2023/12/testimonial5-1.webp",
            rating: 4.5
        },
        {
            _id: 5,
            name: "Lisa Simpson",
            title: "Developer",
            review: "We hired the WP Estate team as our buyer agent because they are the perfect team for real estate projects.",
            photo: "https://main.wpresidence.net/wp-content/uploads/2023/12/testimonial4-1.webp",
            rating: 4.5
        },
        {
            _id: 6,
            name: "Susan Barkley",
            title: "Developer",
            review: "The WP Estate team did an outstanding job helping me buy and create my first real estate website.",
            photo: "https://main.wpresidence.net/wp-content/uploads/2023/12/testimonials6-1.webp",
            rating: 4.5
        },
    ]

    return (
        <section className={`section ${secondaryBg ? 'bg-[var(--secondary-bg)]' : ''}`}>
            <div className="my-container">
                <SectionTitle heading={'Testimonials'} description={'Real stories, real trust hear what our happy clients say about finding their dream homes.'} />

                <div className='cards-container'>
                    {
                        testimonials?.map(testimonial => <TestimonialCard key={testimonial?._id} testimonial={testimonial} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;