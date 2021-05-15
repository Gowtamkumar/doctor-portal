import React from 'react';

const AppointmentDataTable = ({ appointments, selectedDate }) => {
    console.log("hasdkflads",selectedDate)
    return (
        <div className="mt-5">
            <div className="AppointmentDataTableHeader d-flex justify-content me-auto">
                <div>
                    <p>Appointments</p>
                </div>
                <div className="ms-auto">
                    {selectedDate.toDateString()}
                </div>

            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">schedule</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        appointments.map((singleAppointment, index) => <tr>
                            <th scope="row">{index+1}</th>
                            <td>{singleAppointment.name}</td>
                            <td>{singleAppointment.created}</td>
                            <td>
                                <select className="p-1 bg-success">
                                    <option value="NotVisited" >Not Visited</option>
                                    <option value="Visited">Visited</option>
                                </select>
                            </td>
                        </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
    );
};

export default AppointmentDataTable;