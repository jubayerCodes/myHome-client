import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';

const PropertiesByCategories = ({ secondaryBg }) => {
    return (
        <section className={`section ${secondaryBg ? 'bg-[var(--secondary-bg)]' : ''}`}>
            <div className="my-container">
                <SectionTitle heading={'Find Your Dream Home'} description={'Highlight the best of your properties by using the List Category shortcode. You can list specific properties categories, types, cities, areas.'} />
            </div>
        </section>
    );
};

export default PropertiesByCategories;