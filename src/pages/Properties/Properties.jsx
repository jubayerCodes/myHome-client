import React from 'react';
import FeaturedHero from '../../components/Properties/FeaturedHero/FeaturedHero';
import PropertiesList from '../../components/Properties/PropertiesList/PropertiesList';
import { useSearchParams } from 'react-router-dom';

const Properties = () => {

    const [params] = useSearchParams()

    const city = params?.get('city')
    const type = params?.get('type')

    return (
        <>
            <FeaturedHero />
            <PropertiesList city={city} type={type} />
        </>
    );
};

export default Properties;