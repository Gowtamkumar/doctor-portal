import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import ToDayAppointments from '../ToDayAppointments/ToDayAppointments';

const DashboardTable = ({ toDayAppointment }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [view, setview] = useState({})
    const openModal = (id) => {
        setIsOpen(true)
        setview(id)
    }

    function closeModal() {
        setIsOpen(false);
    }
    console.log("ttttttttt",toDayAppointment)
    
    return (
        <div>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Sr.No</th>
                        <th scope="col">Patients Name</th>
                        <th scope="col">Time</th>
                        <th scope="col">Current Date</th>
                        <th scope="col">Coming Date</th>
                        <th scope="col">Prescription</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        toDayAppointment.length === 0 && <p>Lodding</p>
                    }
                    {
                        toDayAppointment.map((recentAppointment, index) =>
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{recentAppointment.name}</td>
                                <td>{recentAppointment.time}</td>
                                <td>{recentAppointment.created}</td>
                                <td>{recentAppointment.date}</td>
                                <td>
                                    <button className="btn btn-success" onClick={() => openModal(recentAppointment._id)}>View</button>

                                    <ToDayAppointments modalIsOpen={isOpen} closeModal={closeModal} id={view} key={view}></ToDayAppointments>
                                </td>
                                <td>
                                    <button className="btn btn-success">Pending</button> <button className="btn btn-warning"><FontAwesomeIcon icon={faEdit} /></button>
                                </td>
                            </tr>

                        )
                    }


                </tbody>
            </table>
        </div>
    );
};

export default DashboardTable;