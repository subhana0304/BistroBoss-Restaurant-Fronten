import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='mx-auto text-center md:w-4/12 my-5'>
            <p className='text-orange-500 my-2'>--- {subHeading} ---</p>
            <h3 className='text-3xl md:text-3xl py-4 uppercase border-y-2'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;