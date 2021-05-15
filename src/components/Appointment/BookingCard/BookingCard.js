import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookingCard = ({ booking, date }) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className="col-md-4 mb-3">
            <div class="card text-center" style={{ width: '20rem' }}>
                <div class="card-body">
                    <h5 class="card-title">{booking.subject}</h5>
                    <p class="card-text">{booking.visitingHour}</p>
                    <p class="card-text">{booking.totalSpace} Spasce Avaliable</p>
                    <button onClick={openModal} class="btn btn-primary">Book Appointment</button>
                    <AppointmentForm modalIsOpen={modalIsOpen} date={date} appointmentOn={booking.subject} closeModal={closeModal}></AppointmentForm>
                </div>
            </div>

        </div>
    );
};

export default BookingCard;