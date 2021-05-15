import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './Dashboard.css'
import DashboardTable from '../DashboardTable/DashboardTable';
import TotalAppointment from '../TotalAppointment/TotalAppointment';
import ToDayAppointments from '../ToDayAppointments/ToDayAppointments';
import TotalDoctors from '../TotalDoctors/TotalDoctors';
const Dashboard = () => {
    const [toDayAppointment, settoDayAppointment] = useState([])
    useEffect(() => {
        fetch('https://rocky-fjord-09696.herokuapp.com/todayappointment?created=' + new Date().toDateString())
            .then(res => res.json())
            .then(data => settoDayAppointment(data))
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
                        <div className="row">
                            <h6 className="p-4">Dashboard</h6>
                            <div className="col-md-3">
                                <div className="d-flex justify-content-center bg-danger p-2 rounded text-light">
                                    <div>
                                        <h1>09</h1>
                                    </div>
                                    <div className="dashboardTop">
                                        <ul>
                                            <li>Panding</li>
                                            <li>Appointment</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="d-flex justify-content-center bg-primary p-2 rounded text-light">
                                    <div>
                                        <h1>{toDayAppointment.length}</h1>
                                    </div>
                                    <div className="dashboardTop">
                                        <ul>
                                            <li>Todays</li>
                                            <li>Appointment</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="d-flex justify-content-center bg-success p-2 rounded text-light">
                                    <div>
                                        <TotalAppointment></TotalAppointment>
                                    </div>
                                    <div className="dashboardTop">
                                        <ul>
                                            <li>Total</li>
                                            <li>Appointment</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="d-flex justify-content-center bg-warning p-2 rounded text-light">
                                    <div>
                                        <TotalDoctors></TotalDoctors>
                                    </div>
                                    <div className="dashboardTop">
                                        <ul>
                                            <li>Total</li>
                                            <li>Doctors</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="main bg-light m-2">
                                <div className="d-flex">
                                    <p>Recent Appointments</p>
                                    <input type="date" className="ms-auto" />
                                </div>
                                <DashboardTable toDayAppointment={toDayAppointment}></DashboardTable>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Dashboard;