import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import { useGetFeaturedCategoriesQuery } from '../../../Utilities/Redux/features/api/featuredPropertiesApi';
import CategoryCard from '../CategoryCard/CategoryCard';

const PropertiesByCategories = ({ secondaryBg }) => {

    const { data: categories } = useGetFeaturedCategoriesQuery()

    return (
        <section className={`section ${secondaryBg ? 'bg-[var(--secondary-bg)]' : ''}`}>
            <div className="my-container">
                <SectionTitle heading={'Find Your Dream Here'} description={'Highlight the best of your properties by using the List Category shortcode. You can list specific properties categories, types, cities, areas.'} />

                <div className='grid grid-cols-2 justify-between gap-8 mt-10'>
                    {
                        categories?.map(category => <CategoryCard key={category?._id} category={category} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default PropertiesByCategories;