import React from 'react';
import BusinessinfoCard from '../BusinessinfoCard/BusinessinfoCard';
import { faClock, faPhone, faMapMarker } from '@fortawesome/free-solid-svg-icons'
const businessinfoData = [
    {
        title: 'Opening Hours',
        description: 'We are open 7 days',
        icon: faClock,
        background: 'primary'
    },
    {
        title: 'Visit Our Location',
        description: 'Drooklyn , NY, 2005, USA',
        icon: faMapMarker,
        background: 'dark'
    },
    {
        title: 'Call us now',
        description: '+30043254332',
        icon: faPhone,
        background: 'primary'
    }

]
const Businessinfo = () => {
    return (
        <div className="d-flex justify-content-center">
            <section className="row w-75">
            {
                businessinfoData.map(info => <BusinessinfoCard info={info}></BusinessinfoCard>)
            }
        </section>
        </div>
    );
};

export default Businessinfo;