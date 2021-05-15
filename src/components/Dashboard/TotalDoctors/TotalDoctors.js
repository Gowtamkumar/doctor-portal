import React, { useEffect, useState } from 'react';

const TotalDoctors = () => {
    const [doctors, setDoctors] = useState({})
    useEffect(() => {
        fetch('http://localhost:5000/doctors')
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