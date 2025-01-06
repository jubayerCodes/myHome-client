import React from 'react';
import SectionTitle from '../../shared/SectionTitle/SectionTitle';
import { useGetFeaturedCitiesQuery } from '../../../Utilities/Redux/features/api/featuredCitiesApi';
import CityCard from '../../shared/CityCard/CityCard';

const PropertiesByArea = () => {

    const { data: cities } = useGetFeaturedCitiesQuery()

    return (
        <section className='section'>
            <div className="my-container">
                <SectionTitle heading={'Properties By Area'} description={'Highlight the best of your properties by using the List Category shortcode. You can list categories, types, cities, areas and states of your choice.'} />

                <div className='grid grid-cols-4 mt-10 gap-8'>

                    {cities?.map((city, idx) => <CityCard key={idx} city={city} />)}
                </div>
            </div>

        </section>
    );
};

export default PropertiesByArea;