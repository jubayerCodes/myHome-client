import React from 'react';
import { Puff } from 'react-loader-spinner';

const Spinner = () => {
    return (
        <div className='py-20 w-full flex justify-center items-center'>
            <Puff
                visible={true}
                height="80"
                width="80"
                color="#0073e1"
                ariaLabel="puff-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    );
};

export default Spinner;