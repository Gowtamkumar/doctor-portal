import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './BusinessinfoCard.css'

const BusinessinfoCard = ({ info }) => {
    return (
        <div className="col-md-4 text-light info-card">
            <div className={`d-flex justify-content-center p-4 info-${info.background}`}>
                <div>
                    <FontAwesomeIcon className="info-icon" icon={info.icon} />
                </div>
                <div className="ms-3">
                    <h6>{info.title}</h6>
                    <small>{info.description}</small>
                </div>
            </div>
        </div>
    );
};

export default BusinessinfoCard;