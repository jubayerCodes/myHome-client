import React from 'react';
import { Helmet } from 'react-helmet';

const Title = ({ page }) => {
    return (
        <Helmet>
            <title>{page} - My Home</title>
        </Helmet>
    );
};

export default Title;