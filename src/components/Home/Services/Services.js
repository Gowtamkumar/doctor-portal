import React from 'react';
import Fluoride from '../../../images/Fluoride.png'
import Cavity from '../../../images/Cavity.png'
import Teath from '../../../images/Teath-Whitining.png'
import ServicesInfo from '../ServicesInfo/ServicesInfo';
const servicesData = [
    {
        name: 'Fluoride Treatment',
        img: Fluoride
    },
    {
        name: 'Cavity Filling',
        img: Cavity
    },
    {
        name: 'Teath Whitining',
        img: Teath
    }
]
const Services = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center pt-5">
                <h5>Our Services</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
                <section className="row w-75 pt-5">
                    {servicesData.map(service => <ServicesInfo service={service}></ServicesInfo>)}
                </section>
            </div>
        </section>
    );
};

export default Services;