import Image from 'next/image';
import React from 'react';

const ServiceCard = ({service}) => {
    const {title, img, price, description} = service || {};

    return (
        <div className="card card-compact bg-base-100 shadow-xl p-4">
            <div className=''>
            <Image src={img} width={380} height={10} className='object-cover rounded-lg' alt='Service Picture' />
            </div>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                {description.length > 70 ? <p>{description.slice(0, 70)} <span className='text-primary'>see more.....</span></p> : <p>{description}</p>}
                <div className="card-actions">
                    <button className="btn btn-primary text-white mt-4">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;