import React from 'react';
import SectionTitle from '../../shared/SectionTitle/SectionTitle';
import { Link } from '@mui/material';
import { useGetPropertiesFilterOptionsQuery } from '../../../Utilities/Redux/features/api/propertiesApi';

const PropertiesByArea = () => {



    const { data, isLoading } = useGetPropertiesFilterOptionsQuery()

    const cities = data?.cities?.slice(0, 8)

    return (
        <section className='section'>
            <div className="my-container">
                <SectionTitle heading={'Properties By Area'} description={'Highlight the best of your properties by using the List Category shortcode. You can list categories, types, cities, areas and states of your choice.'} />

                <div className='grid grid-cols-4 mt-10 gap-8'>

                    {/* // TODO: Make it dynamic */}
                    {cities?.map((city, idx) => (
                        <div key={idx} className='flex items-center justify-start gap-4'>
                            <div>
                                <img src='https://main.wpresidence.net/wp-content/uploads/2023/12/jersey_city.webp' className='h-[75px] w-[100px] rounded-md' />
                            </div>
                            <div>
                                <Link color={'black.main'} fontWeight={'bold'} underline='none' href={`/properties?city=${city}`} className='text-base transition-colors hover:text-[var(--btn-bg)]'>
                                    <h4>{city}</h4>
                                </Link>
                                <span className='font-light text-sm'>25 listings</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default PropertiesByArea;