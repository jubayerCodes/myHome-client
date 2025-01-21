import React from 'react';
import FeaturedProperty from '../../components/shared/FeaturedProperty/FeaturedProperty';
import PropertiesList from '../../components/Properties/PropertiesList/PropertiesList';
import { useSearchParams } from 'react-router-dom';

const Properties = () => {

    const [params] = useSearchParams()

    const city = params?.get('city')
    const category = params?.get('category')

    return (
        <>
            <FeaturedProperty />
            <PropertiesList city={city} category={category} />
        </>
    );
};

export default Properties;