import React from 'react';
import { services } from '../../lib/services';
import ServiceCard from '../Cards/ServiceCard';
import SectionTitle from '@/reuseables/SectionTitle';

const Services = () => {

    return (
        <div className='w-[86%] mx-auto py-16 space-y-8'>
            <SectionTitle heading={sectionTitle.heading} title={sectionTitle.title} description={sectionTitle.description} />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    services.map((service) => (
                        <ServiceCard service={service} key={service._id} />
                    ))
                }
            </div>
        </div>
    );
};

const sectionTitle = {
    heading: "Services",
    title: "Our Service Area",
    description: "The majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable."
}

export default Services;
