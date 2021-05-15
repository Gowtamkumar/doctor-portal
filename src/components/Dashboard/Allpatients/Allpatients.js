import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import AllpatientsTable from '../AllpatientsTable/AllpatientsTable';

const Allpatients = () => {
    const [patients, setPatient] = useState([])
    console.log(patients)

    useEffect(() => {
        fetch('http://localhost:5000/allpatients')
            .then(res => res.json())
            .then(data => setPatient(data))
    }, [])





    return (
        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 sidebar">
                        <div className="mt-5">
                            <Sidebar></Sidebar>
                        </div>
                    </div>
                    <div className="col-md-10">
                        <div className="row  p-3">
                            <h6 className="p-4"> Paitents</h6>
                            <div className="main bg-light m-2">
                                <div className="d-flex">
                                    <p>All Paitents </p>
                                    <input type="date" className="ms-auto" />
                                </div>
                                <AllpatientsTable patients={patients}></AllpatientsTable>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Allpatients;