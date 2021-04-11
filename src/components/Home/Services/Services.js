import React from 'react';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const serviceData = [
    {
        name: 'Fluoride Treatment',
        img: fluoride
    },
    {
        name: 'Cavity Feeling',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        img: whitening
    }
]

const Services = () => {
    return (
        <section>
            <div className="text-center">
                <h5 className='mt-5' style={{ color: '#70DCD8' }}>OUR SERVICES</h5>
                <h2 style={{ color: '#3F475A' }}>Services We Provide</h2>
            </div>
            <div className='d-flex justify-content-center mt-5'>
                <div className='w-75 row pt-5'>
                    {
                        serviceData.map(service => <ServiceDetails service={service}></ServiceDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;