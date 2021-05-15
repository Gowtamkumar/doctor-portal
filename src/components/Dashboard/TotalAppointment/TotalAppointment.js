import React, { useEffect, useState } from 'react';

const TotalAppointment = () => {
    const [totalAppointment, setTotalAppointment] = useState({})
    useEffect(() => {
        fetch('http://localhost:5000/totalappointment')
        .then(res=> res.json())
        .then(data=> setTotalAppointment(data))
    }, [])
    return (
        <div>
            <h1>{totalAppointment.length}</h1>
        </div>
    );
};

export default TotalAppointment;