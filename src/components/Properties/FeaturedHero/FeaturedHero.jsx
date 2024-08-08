import React from 'react';
import { useGetFeaturedPropertiesQuery } from '../../../Utilities/Redux/features/api/featuredPropertiesApi';
import './FeaturedHero.css'
import { Link } from '@mui/material';

const FeaturedHero = () => {

    const { data } = useGetFeaturedPropertiesQuery(true)

    const property = data && data[0]

    const photo1 = 'https://main.wpresidence.net/wp-content/uploads/2014/05/building-teracce-1100x623.webp'
    const photo2 = 'https://main.wpresidence.net/wp-content/uploads/2014/05/9.4-800x467.webp'
    const photo3 = 'https://main.wpresidence.net/wp-content/uploads/2014/05/9.2-800x467.webp'
    const photo4 = 'https://main.wpresidence.net/wp-content/uploads/2014/05/9.3-800x467.webp'
    const photo5 = 'https://main.wpresidence.net/wp-content/uploads/2014/05/9.1-800x467.webp'

    return (
        <section className='flex w-full mt-[125px] gap-[1px] items-stretch'>
            <div className='w-1/2 relative'>
                <div className="featured-img h-full">
                    <img src={photo1} alt="" className='w-full h-full' />
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
                    <img src={photo2} alt="" className='w-full' />
                    <div className="overlay"></div>
                </div>
                <div className="featured-img">
                    <img src={photo3} alt="" className='w-full' />
                    <div className="overlay"></div>
                </div>
                <div className="featured-img">
                    <img src={photo4} alt="" className='w-full' />
                    <div className="overlay"></div>
                </div>
                <div className="featured-img">
                    <img src={photo5} alt="" className='w-full' />
                    <div className="overlay"></div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedHero;