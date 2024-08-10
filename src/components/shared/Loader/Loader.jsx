import React from 'react';
import { Puff } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div className='z-50 h-[100vh] w-full flex justify-center items-center bg-white absolute top-0 left-0'>
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

export default Loader;