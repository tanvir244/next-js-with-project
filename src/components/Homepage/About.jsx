import Image from 'next/image';
import React from 'react';

const About = () => {
    return (
        <div className='w-[86%] mx-auto mt-12 mb-20'>
            <div className='flex gap-8'>
                <div className='w-1/2 relative'>
                    <Image src={"/assets/images/about_us/person.jpg"} width={450} height={50} className='rounded-md' alt='Person' />
                    <Image src={"/assets/images/about_us/parts.jpg"} width={310} height={50} className='rounded-md absolute bottom-[-24px] right-0 border-[8px] border-white' alt='Person' />
                </div>
                <div className='w-1/2 pr-20'>
                    <h3 className='text-xl text-[#FF3811] font-bold'>About Us</h3>
                    <h1 className='text-4xl w-[310px] text-black font-bold mt-6 mb-8'>We are qualified & of experience in this field</h1>
                    <p className='text-[#737373]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                    <p className='text-[#737373] mt-6'>The majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                </div>
            </div>
        </div>
    );
};

export default About;