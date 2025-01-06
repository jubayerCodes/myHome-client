import { Link } from '@mui/material';
import React from 'react';

const CategoryCard = ({ category }) => {

    const { name, photo, listings } = category

    return (
        <div style={{ backgroundImage: `url(${photo})` }} className={`h-[300px] bg-cover bg-no-repeat bg-center rounded-md overflow-hidden`}>
            <Link href={`/properties?category=${name}`} className='hover:no-underline'>
                <div className='bg-[#00000030] w-full h-full p-5 flex flex-col justify-between transition hover:bg-[#00000010] cursor-pointer'>
                    <h4 className='text-white text-xl font-medium capitalize'>{name}s</h4>
                    <p className='text-white'>{listings} Listing(s)</p>
                </div>
            </Link>
        </div>
    );
};

export default CategoryCard;