import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faGripHorizontal, faSignOutAlt, faCog, faFileAlt, faUsers, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [LoggedInUser, setLoggedInUser] = useContext(UserContext)
    const [isDoctor, setIsDoctor] = useState(false)

    useEffect(() => {
        fetch('https://rocky-fjord-09696.herokuapp.com/isDoctor', {
            method: "POST",
            headers: { 'Content-Type': 'Application/json' },
            body: JSON.stringify({ email: LoggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsDoctor(data))
    }, [])
    return (
        <div className="d-flex flex-column justify-content-between" >
            <ul className="list-group" style={{ height: "84vh" }}>

                <li className="list-group-items">
                    <Link to="/dashboard/appointment" className="text-white">
                        <FontAwesomeIcon icon={faCalendar} /> <span>Appointment</span>
                    </Link>
                </li>
                {isDoctor && <div>
                    <li className="list-group-items">
                        <Link to="/dashboard" className="text-white">
                            <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
                        </Link>
                    </li>

                    <li className="list-group-items">
                        <Link to="/dashboard/allpatients" className="text-white">
                            <FontAwesomeIcon icon={faUsers} /> <span>Patients</span>
                        </Link>
                    </li>
                    <li className="list-group-items">
                        <Link to="/dashboard/prescriptions" className="text-white">
                            <FontAwesomeIcon icon={faFileAlt} /> <span>Prescriptions</span>
                        </Link>
                    </li>
                    <li className="list-group-items">
                        <Link to="/dashboard/adddoctor" className="text-white">
                            <FontAwesomeIcon icon={faUserAlt} /> <span>Add Doctor</span>
                        </Link>
                    </li>
                    <li className="list-group-items">
                        <Link to="#" className="text-white">
                            <FontAwesomeIcon icon={faCog} /> <span>Setting</span>
                        </Link>
                    </li>
                </div>}
                
                <li className="list-group-items">
                    <FontAwesomeIcon icon={faUserAlt} /> <span>{LoggedInUser.displayName}</span>
                </li>
            </ul>
            <div className="mb-5">
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>

    );
};

export default Sidebar;