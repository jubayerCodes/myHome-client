import { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import PropertyCard from '../PropertyCard/PropertyCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import './LatestPropertiesForRent.css'
import { useGetLatestRentsQuery } from '../../../Utilities/Redux/features/api/latestPropertiesApi';
import { Link } from '@mui/material';
import Spinner from '../Spinner/Spinner';

const LatestPropertiesForRent = () => {

    const { data: latestPropertiesForRent, isLoading } = useGetLatestRentsQuery()

    return (
        <section className='section'>

            <div className='my-container'>
                <SectionTitle description={'These are the latest properties in the Sales category. You can create the list using the “latest listing shortcode” and show items by specific categories.'} heading={'Latest Properties for Rent'} />


                <div className='flex flex-col gap-10 items-center'>
                    <div className="mt-12 latestProperties grid grid-cols-3 gap-8">
                        {
                            latestPropertiesForRent?.slice(0, 3)?.map((property) => <PropertyCard key={property._id} property={property} />)
                        }
                    </div>

                    <Link className={`${isLoading && 'hidden'}`} href='/properties?type=rent'>
                        <button className='primary-btn'>More Rents</button>
                    </Link>
                </div>
                {
                    isLoading && <Spinner />
                }
            </div>

        </section>
    );
};

export default LatestPropertiesForRent;