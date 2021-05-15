import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};
Modal.setAppElement('#root')
const ToDayAppointments = ({ modalIsOpen, closeModal, id }) => {
    const [appointment, setAppointment] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/appointment/${id}`)
            .then(res => res.json())
            .then(data => setAppointment(data))
    }, [])
    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

        {
           appointment.length === 0 && <p>Lodding</p> 
        }
        
        
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="text-brand text-center">{appointment.service}</h2>
                        <table class="table">
                           
                            <tbody>
                                <tr>
                                    <td>Name: </td>
                                    <td>{appointment.name}</td>
                                </tr>
                                <tr>
                                    <td>Age: </td>
                                    <td>{appointment.age}</td>
                                </tr>
                                <tr>
                                    <td>Weight: </td>
                                    <td>{appointment.weight}</td>
                                </tr>
                                <tr>
                                    <td>Gender: </td>
                                    <td>{appointment.gender}</td>

                                </tr>
                                <tr>
                                    <td>Comming Date: </td>
                                    <td>{appointment.date}</td>
                                </tr>
                                <tr>
                                    <td>Appointment Date: </td>
                                    <td>{appointment.created}</td>
                                </tr>
                                <tr>
                                    <td>Time: </td>
                                    <td>{appointment.time}</td>

                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td>{appointment.email}</td>
                                </tr>
                                <tr>
                                    <td>Address</td>
                                    <td>{appointment.address}</td>
                                </tr>
                                <tr>
                                    <td>Phone</td>
                                    <td>{appointment.phone}</td>
                                </tr>

                            </tbody>
                        </table>

                    </div>
                </div>


            </Modal>
        </div>
    );
};

export default ToDayAppointments;