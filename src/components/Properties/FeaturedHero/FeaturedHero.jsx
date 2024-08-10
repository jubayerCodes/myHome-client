import React from 'react';
import { useGetFeaturedPropertiesQuery } from '../../../Utilities/Redux/features/api/featuredPropertiesApi';
import './FeaturedHero.css'
import { Link } from '@mui/material';
import Loader from '../../shared/Loader/Loader';

const FeaturedHero = () => {

    const { data, isLoading } = useGetFeaturedPropertiesQuery(true)

    const property = data && data[0]

    if (isLoading) {
        return <Loader />
    }

    return (
        <section className='flex w-full mt-[125px] gap-[1px] items-stretch'>
            <div className='w-1/2 relative'>
                <div className="featured-img h-full">
                    <img src={property?.photos[0]} alt="" className='w-full h-full' />
                    <div className="overlay"></div>
                </div>
                <div className="featured-info">
                    <div>
                        <span className='text-[var(--btn-bg)] text-base mb-4 block'>$ {property?.price.toLocaleString()}</span>
                        <Link href={`/properties/${property?._id}`} fontSize={30} fontWeight={'medium'} color={'black.main'} lineHeight={1.2} underline='none' className='hover:text-[var(--btn-bg)] transition-colors'>
                            <h3>{property?.title}</h3>
                        </Link>
                    </div>
                    <div className='mt-2 flex justify-start gap-3 mb-3'>
                        <span className='text-base font-semibold'>
                            {property?.bedrooms} BD
                        </span>
                        <span className='text-base font-semibold'>
                            {property?.bathrooms} BA
                        </span>
                        <span className='text-base font-semibold'>
                            {property?.property_size} ft<sup>2</sup>
                        </span>
                    </div>
                    <div>
                        <p className='mb-3 text-sm font-light'>{property?.description.split(' ').slice(0, 20).join(' ')}...</p>
                    </div>
                    <div>
                        <Link href={`/properties/${property?._id}`} fontSize={14} underline='none' color={'black.main'} fontWeight={'medium'} className='hover:text-[var(--btn-bg)] transition-colors'>
                            discover more {`>`}
                        </Link>
                    </div>
                </div>
            </div>
            <div className='w-1/2 grid grid-cols-2 gap-[1px]'>
                <div className="featured-img">
                    <img src={property?.photos[1]} alt="" className='w-full' />
                    <div className="overlay"></div>
                </div>
                <div className="featured-img">
                    <img src={property?.photos[2]} alt="" className='w-full' />
                    <div className="overlay"></div>
                </div>
                <div className="featured-img">
                    <img src={property?.photos[3]} alt="" className='w-full' />
                    <div className="overlay"></div>
                </div>
                <div className="featured-img">
                    <img src={property?.photos[4]} alt="" className='w-full' />
                    <div className="overlay"></div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedHero;