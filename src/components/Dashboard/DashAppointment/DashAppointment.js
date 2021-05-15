import React, { useContext, useEffect, useState } from 'react';
import AppointmentByDate from '../AppointmentByDate/AppointmentByDate';
import Sidebar from '../Sidebar/Sidebar';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import { UserContext } from '../../../App';

const DashAppointment = () => {
    const [LoggedInUser, setLoggedInUser] = useContext(UserContext)
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);

    const handelDateChange = data => {
        setSelectedDate(data)
    }

    useEffect(() => {
        fetch('https://rocky-fjord-09696.herokuapp.com/appointmentByDate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ data: selectedDate.toDateString(), email: LoggedInUser.email })
        })
            .then(res => res.json())
            .then(appionData => setAppointments(appionData))
    }, [selectedDate])

console.log("dsfjasdlfkjad",appointments)
    return (
        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 sidebar ">
                        <div className="mt-5">
                            <Sidebar></Sidebar>
                        </div>
                    </div>
                    <div className="col-md-10">
                        <div className="row">
                            <h6 className="p-4">Appointments</h6>
                            <div className="col-md-6">
                                <div className="bg-light d-flex justify-content-center  p-5">
                                    <Calendar
                                        onChange={handelDateChange}
                                        value={new Date()}
                                    />
                                </div>

                            </div>
                            <div className="col-md-6 p-2 bg-light ">
                                <AppointmentByDate appointments={appointments} selectedDate={selectedDate}></AppointmentByDate>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </section>
    );
};

export default DashAppointment;