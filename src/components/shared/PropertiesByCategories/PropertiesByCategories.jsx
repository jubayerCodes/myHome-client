import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import { useGetFeaturedCategoriesQuery } from '../../../Utilities/Redux/features/api/featuredPropertiesApi';
import CategoryCard from '../CategoryCard/CategoryCard';
import Spinner from '../Spinner/Spinner';

const PropertiesByCategories = ({ secondaryBg }) => {

    const { data: categories, isLoading } = useGetFeaturedCategoriesQuery()

    return (
        <section className={`section ${secondaryBg ? 'bg-[var(--secondary-bg)]' : ''}`}>
            <div className="my-container">
                <SectionTitle heading={'Find Your Dream Here'} description={'Highlight the best of your properties by using the List Category shortcode. You can list specific properties categories, types, cities, areas.'} />

                <div className='grid grid-cols-1 md:grid-cols-2 justify-between gap-8 mt-10'>
                    {
                        categories?.map(category => <CategoryCard key={category?._id} category={category} />)
                    }
                </div>

                {
                    isLoading && <Spinner />
                }
            </div>
        </section>
    );
};

export default PropertiesByCategories;