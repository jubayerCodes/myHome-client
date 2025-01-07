import React from 'react';
import { useGetFeaturedPropertiesQuery } from '../../../Utilities/Redux/features/api/featuredPropertiesApi';
import './FeaturedProperty.css'
import { Link } from '@mui/material';
import Loader from '../Loader/Loader';

const FeaturedProperty = () => {

    const { data, isLoading } = useGetFeaturedPropertiesQuery(true)

    const property = data && data[0]

    if (isLoading) {
        return <Loader />
    }

    return (
        <section className='featured-property grid grid-cols-2 xl:grid-cols-4 w-full gap-[1px]'>
            <div className='col-span-2 relative'>
                <div className="featured-img h-[250px] xl:h-full">
                    <img src={property?.photos[0]} alt="" className='w-full h-full' />
                    <div className="overlay"></div>
                </div>
                <div className="featured-info">
                    <div>
                        <span className='text-[var(--btn-bg)] text-base mb-2 xl:mb-4 block'>$ {property?.price.toLocaleString()}</span>
                        <Link href={`/properties/${property?._id}`} fontSize={30} fontWeight={'medium'} color={'black.main'} lineHeight={1.2} underline='none' className='hover:text-[var(--btn-bg)] transition-colors'>
                            <h3 className='text-2xl xl:text-3xl'>{property?.title}</h3>
                        </Link>
                    </div>
                    <div className='mt-2 flex justify-start gap-3 mb-2 xl:mb-3'>
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
            <div className='hidden col-span-2 xl:grid grid-cols-2 gap-[1px]'>
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

export default FeaturedProperty;