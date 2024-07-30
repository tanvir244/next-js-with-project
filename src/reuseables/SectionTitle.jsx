import React from 'react';

const SectionTitle = ({heading, title, description}) => {
    return (
        <div className='w-[55%] mx-auto text-center space-y-4'>
            <h3 className='text-xl text-[#FF3811] font-bold'>{heading}</h3>
            <h2 className='text-4xl font-bold'>{title}</h2>
            <p className='text-[#737373]'>{description}</p>
        </div>
    );
};

export default SectionTitle;