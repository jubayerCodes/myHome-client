import { Breadcrumbs, Link, Typography } from '@mui/material';
import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

const Breadcrumb = ({ page, subPage }) => {

    const breadcrumbs = [
        <Link underline="none" key="1" color="#8593a9" href="/" fontSize={'12px'} lineHeight={1}>
            Home
        </Link>,
        <Link
            underline="none"
            key="2"
            color="#8593a9"
            href={`/${page}`}
            textTransform={'capitalize'}
            fontSize={'12px'}
        >
            {page}
        </Link>,
        <Link underline="none" key="3" color="text.primary" fontSize={'12px'}>
            {subPage}
        </Link>,
    ];

    return (
        <div>
            <Breadcrumbs
                separator={<FaChevronRight fontSize={'small'} />}
                aria-label="breadcrumb"
                style={{padding: '10px 0'}}
            >
                {breadcrumbs}
            </Breadcrumbs>
        </div>
    );
};

export default Breadcrumb;