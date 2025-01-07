import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import { Link } from '@mui/material';
import './WhyChooseUs.css'

const WhyChooseUs = () => {
    return (
        <section className='section bg-[var(--secondary-bg)]' >
            <div className="my-container">
                <SectionTitle heading={'Why Choose Us'} description={'Utilizing his exceptional experience and knowledge of the luxury waterfront markets, Roland serves an extensive and elite worldwide client base.'} />

                <div className="grid grid-cols-1 xl:grid-cols-4 mt-10">
                    <div className='p-5 xl:p-[35px] card'>
                        <img src="/images/house.png" alt="" className='h-[42px] w-[42px]' />
                        <h4 className='text-[18px] font-semibold mt-4'>Sell your home</h4>
                        <p className='text-[var(--text-color)] text-sm my-3'>We do a free evaluation to be sure you want to start selling.</p>
                        <Link href={'#'} color={'#5c727da6'} underline='none' fontSize={'14px'} className='hover:text-[var(--btn-bg)] transition-colors'>
                            Read More
                        </Link>
                    </div>
                    <div className='p-5 xl:p-[35px] card'>
                        <img src="/images/apartment.png" alt="" className='h-[42px] w-[42px]' />
                        <h4 className='text-[18px] font-semibold mt-4'>Rent your home</h4>
                        <p className='text-[var(--text-color)] text-sm my-3'>We do a free evaluation to be sure you want to start selling.</p>
                        <Link href={'#'} color={'#5c727da6'} underline='none' fontSize={'14px'} className='hover:text-[var(--btn-bg)] transition-colors'>
                            Read More
                        </Link>
                    </div>
                    <div className='p-5 xl:p-[35px] card'>
                        <img src="/images/house-key.png" alt="" className='h-[42px] w-[42px]' />
                        <h4 className='text-[18px] font-semibold mt-4'>Buy a home</h4>
                        <p className='text-[var(--text-color)] text-sm my-3'>We do a free evaluation to be sure you want to start selling.</p>
                        <Link href={'#'} color={'#5c727da6'} underline='none' fontSize={'14px'} className='hover:text-[var(--btn-bg)] transition-colors'>
                            Read More
                        </Link>
                    </div>
                    <div className='p-5 xl:p-[35px] card'>
                        <img src="/images/searching.png" alt="" className='h-[42px] w-[42px]' />
                        <h4 className='text-[18px] font-semibold mt-4'>Free marketing</h4>
                        <p className='text-[var(--text-color)] text-sm my-3'>We do a free evaluation to be sure you want to start selling.</p>
                        <Link href={'#'} color={'#5c727da6'} underline='none' fontSize={'14px'} className='hover:text-[var(--btn-bg)] transition-colors'>
                            Read More
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;