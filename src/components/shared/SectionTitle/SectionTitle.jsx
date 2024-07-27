import React from 'react';

const SectionTitle = ({ className, heading, description }) => {
    return (
        <div className={`text-center ${className}`}>
            <h2 className='text-[#222222] text-[32px] font-semibold mb-4'>
                {heading}
            </h2>
            <p className='text-[#5c727d] xl:w-[600px] mx-auto'>
                {description}
            </p>
        </div>
    );
};

export default SectionTitle;