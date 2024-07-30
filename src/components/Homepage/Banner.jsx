import React from 'react';

const Banner = () => {
    return (
        <div className='flex justify-center h-[100vh] items-center'>
            <div className="carousel w-[86%]">
                {
                    banners.map((banner, index) => (
                        <div
                            style={{
                                backgroundImage: `linear-gradient(45deg, rgba(21, 21, 21, 2), rgba(0, 0, 0, 0.1)), url("/assets/images/banner/${index + 1}.jpg")`
                            }}
                            key={index}
                            id={`slide${index + 1}`}
                            className="carousel-item relative w-full h-[90vh] rounded-lg">
                            <div className='flex items-center pl-24 w-[470px]'>
                                <div className='text-white'>
                                    <h1 className='text-5xl font-bold'>{banner.title}</h1>
                                    <p className='mt-6'>{banner.description}</p>
                                    <div className='flex gap-4 mt-10'>
                                        <button className='btn bg-[#FF3811] text-white px-6 py-2 border-none '>Discover More</button>
                                        <button className='text-white px-6 py-2 border rounded-md hover:bg-[#FF3811] hover:border-none'>Latest Project</button>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute bottom-16 right-16 flex justify-between gap-4">
                                <a href={banner.prev} className="btn btn-circle">❮</a>
                                <a href={banner.next} className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

const banners = [
    {
        title: "Affordable Price For Car Servicing",
        description: "There are many variations of car and reapering for different type of car.",
        next: "#slide2",
        prev: "#slide4",
    },
    {
        title: "Affordable Price For Car Servicing",
        description: "There are many variations of car and reapering for different type of car.",
        next: "#slide3",
        prev: "#slide1",
    },
    {
        title: "Affordable Price For Car Servicing",
        description: "There are many variations of car and reapering for different type of car.",
        next: "#slide4",
        prev: "#slide2",
    },
    {
        title: "Affordable Price For Car Servicing",
        description: "There are many variations of car and reapering for different type of car.",
        next: "#slide1",
        prev: "#slide3",
    }
]

export default Banner;