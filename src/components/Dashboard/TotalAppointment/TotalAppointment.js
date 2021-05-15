import React, { useEffect, useState } from 'react';

const TotalAppointment = () => {
    const [totalAppointment, setTotalAppointment] = useState({})
    useEffect(() => {
        fetch('https://rocky-fjord-09696.herokuapp.com/totalappointment')
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