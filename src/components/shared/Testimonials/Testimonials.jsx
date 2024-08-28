import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';

const Testimonials = ({ secondaryBg }) => {
    return (
        <section className={`section ${secondaryBg ? 'bg-[var(--secondary-bg)]' : ''}`}>
            <div className="my-container">
                <SectionTitle heading={'Testimonials'} description={'Publish the best of your client testimonials and let the world know what a great agent or real estate agency you are. Testimonials build trust.'} />
            </div>
        </section>
    );
};

export default Testimonials;