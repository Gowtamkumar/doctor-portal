import React from 'react';

const AllpatientsTable = ({ patients }) => {

    
    return (
        <div>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Sr.No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Age</th>
                        <th scope="col">Weight</th>
                        <th scope="col">Contact</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        patients.map((patient, index) =>
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{patient.name}</td>
                                <td>{patient.gender}</td>
                                <td>{patient.age}</td>
                                <td>{patient.weight}</td>
                                <td>{patient.phone}</td>
                                <td>
                                    <button className="btn btn-danger" >Delete</button>
                                </td>
                                <td>

                                </td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
    );
};

export default AllpatientsTable;