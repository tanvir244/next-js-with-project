import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-full">
            {
                banners.map((baner, index) => (
                    <div key={index} id="slide1" className="carousel-item relative w-full h-screen">
                        <div>
                            <h1>lorem ispam dolor sit amet.</h1>
                        </div>
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                ))
            }
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