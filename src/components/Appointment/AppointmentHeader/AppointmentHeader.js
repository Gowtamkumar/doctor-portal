import React, { useState } from 'react';
import chair from '../../../images/chair.png';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
const AppointmentHeader = ({handelDateChange}) => {
    
    
    return (
        <main style={{ height: '600px' }} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h2>Appointment</h2>
                <Calendar
                    onChange={handelDateChange}
                    value={new Date()}
                />
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default AppointmentHeader;