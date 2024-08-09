import React, { useEffect, useState } from 'react';
import { useGetPropertiesQuery, useGetTotalPagesQuery } from '../../../Utilities/Redux/features/api/propertiesApi';
import PropertyCard from '../../shared/PropertyCard/PropertyCard';
import { Button } from '@mui/material';
import './PropertiesList.css'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const PropertiesList = () => {

    const [currentPage, setCurrentPage] = useState(1)

    const { data: totalPages } = useGetTotalPagesQuery()

    const pages = [...Array(totalPages?.pages).keys()]?.map(page => page + 1)

    const { data } = useGetPropertiesQuery({ page: currentPage })

    return (
        <section className='section bg-[var(--secondary-bg)]'>

            <div className="my-container">

                <div className='grid grid-cols-1 xl:grid-cols-3 gap-8 mt-12'>
                    {
                        data?.map((property) => <PropertyCard key={property?._id} property={property} />)
                    }
                    <div className='mt-10'>
                        <div className="pagination">
                            <Button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)} size='small' className='pagination-btn'><FaAngleLeft /></Button>


                            {pages?.map((page, idx) => <Button size='small' onClick={() => setCurrentPage(page)} className={`${(page === currentPage) ? 'active' : ''} pagination-btn`} key={idx}>
                                {page}
                            </Button>)}


                            <Button disabled={currentPage === totalPages?.pages} onClick={() => setCurrentPage(currentPage + 1)} size='small' className='pagination-btn'><FaAngleRight /></Button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default PropertiesList;