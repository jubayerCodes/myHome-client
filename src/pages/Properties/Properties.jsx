import React from 'react';
import FeaturedHero from '../../components/Properties/FeaturedHero/FeaturedHero';
import PropertiesList from '../../components/Properties/PropertiesList/PropertiesList';
import { useSearchParams } from 'react-router-dom';

const Properties = () => {

    const [params] = useSearchParams()

    const city = params?.get('city')
    const type = params?.get('type')
    const category = params?.get('category')

    return (
        <>
            <FeaturedHero />
            <PropertiesList city={city} type={type} category={category} />
        </>
    );
};

export default Properties;