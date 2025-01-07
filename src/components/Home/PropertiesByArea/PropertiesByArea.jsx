import React from 'react';
import SectionTitle from '../../shared/SectionTitle/SectionTitle';
import { useGetFeaturedCitiesQuery } from '../../../Utilities/Redux/features/api/featuredCitiesApi';
import CityCard from '../../shared/CityCard/CityCard';
import Spinner from '../../shared/Spinner/Spinner';

const PropertiesByArea = () => {

    const { data: cities, isLoading } = useGetFeaturedCitiesQuery()

    return (
        <section className='section'>
            <div className="my-container">
                <SectionTitle heading={'Properties By Area'} description={'Explore properties by area to find your dream home in the perfect neighborhood effortlessly.'} />

                <div className='grid grid-cols-1 xl:grid-cols-4 mt-5 xl:mt-10 gap-5 xl:gap-8'>

                    {cities?.map((city, idx) => <CityCard key={idx} city={city} />)}
                </div>
            </div>

            {
                isLoading && <Spinner />
            }

        </section>
    );
};

export default PropertiesByArea;