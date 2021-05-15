import React from 'react';
import Doctorimg from '../../../images/Doctor.png'
import Doctor from '../Doctor/Doctor';
const doctorData = [
    {
        name: 'Dr.Caudi',
        img: Doctorimg,
        phoneNumber: 2929746836
    },
    {
        name: 'Dr.Caudi',
        img: Doctorimg,
        phoneNumber: 2929746836
    },
    {
        name: 'Dr.Caudi',
        img: Doctorimg,
        phoneNumber: 2929746836
    }
]
const Doctors = () => {
    return (
        <div className="row mt-5 mb-5">
            <div className="text-center pt-5">
                <h3>Our Doctors</h3>
            </div>
            
            {
                doctorData.map(doctor => <Doctor doctor={doctor}></Doctor>)
            }

            
        </div>
    );
};

export default Doctors;