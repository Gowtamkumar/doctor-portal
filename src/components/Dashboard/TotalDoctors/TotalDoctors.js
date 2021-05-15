import React, { useEffect, useState } from 'react';

const TotalDoctors = () => {
    const [doctors, setDoctors] = useState({})
    useEffect(() => {
        fetch('https://rocky-fjord-09696.herokuapp.com/doctors')
        .then(res=>res.json())
        .then(data => setDoctors(data))
    }, [])
    return (
        <div>
            <h1>{doctors.length}</h1>
        </div>
    );
};

export default TotalDoctors;