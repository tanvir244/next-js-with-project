import React from 'react';
import Banner from './Banner';
import About from './About';
import Services from './Services';

const Homepage = () => {
    return (
        <div className='my-2'>
            <Banner />
            <About />
            <Services />
        </div>
    );
};

export default Homepage;