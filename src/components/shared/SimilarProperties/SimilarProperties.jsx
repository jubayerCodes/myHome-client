import React from 'react';
import { useGetPropertiesQuery, useGetSimilarPropertiesQuery } from '../../../Utilities/Redux/features/api/propertiesApi';
import PropertyCard from '../PropertyCard/PropertyCard';
import Spinner from '../Spinner/Spinner';

const SimilarProperties = ({ type, category }) => {

    const { data, isLoading } = useGetSimilarPropertiesQuery({ type: type, category: category })

    if (isLoading) {
        return <Spinner />
    }

    if (data?.length === 0) {
        return <></>
    }

    return (
        <div>
            <h3 className='text-2xl font-semibold'>Similar Properties</h3>
            <div className='mt-4 grid grid-cols-2 gap-10'>
                {
                    data?.map(property => <PropertyCard key={property?._id} property={property} />)
                }
            </div>
        </div>
    );
};

export default SimilarProperties;