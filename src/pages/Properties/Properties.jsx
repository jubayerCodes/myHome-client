import React from 'react';
import FeaturedProperty from '../../components/shared/FeaturedProperty/FeaturedProperty';
import PropertiesList from '../../components/Properties/PropertiesList/PropertiesList';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Title from '../../components/Title/Title';

const Properties = () => {

    const [params] = useSearchParams()

    const city = params?.get('city')
    const category = params?.get('category')

    return (
        <>
            <Title page={'Properties'} />
            <FeaturedProperty />
            <PropertiesList city={city} category={category} />
        </>
    );
};

export default Properties;