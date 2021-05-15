import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
const Doctor = ({ doctor }) => {
    return (
        <div className="col-md-4 text-center mt-3">
            <img src={doctor.img} alt="" className="img-fluid" style={{width:"300px"}} />
            <h4>{doctor.name}</h4>
            <h5>
                <FontAwesomeIcon className="info-icon" icon={faPhoneAlt} style={{fontSize:'15px'}} />+
                {doctor.phoneNumber}
            </h5>
        </div>
    );
};

export default Doctor;