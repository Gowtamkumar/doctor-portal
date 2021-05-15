import React from 'react';
import BookingCard from '../BookingCard/BookingCard';

const bookingData = [
    {
        id: 1,
        subject: 'Teeth Orthodontics',
        visitingHour: '8.00 AM - 9:00 AM',
        totalSpace: 8
    },
    {
        id: 2,
        subject: 'Cosmetic Dentistry',
        visitingHour: '10.05 AM - 11:30 AM',
        totalSpace: 8
    },
    {
        id: 3,
        subject: 'Teeth Cleaning',
        visitingHour: '5.00 AM - 6:30 AM',
        totalSpace: 8
    },
    {
        id: 4,
        subject: 'Cavity Protection',
        visitingHour: '7.00 AM - 8:00 AM',
        totalSpace: 8
    },
    {
        id: 5,
        subject: 'Teeth Orthodontics',
        visitingHour: '8.00 AM - 9:00 AM',
        totalSpace: 8
    },
    {
        id: 6,
        subject: 'Teeth Orthodontics',
        visitingHour: '8.00 AM - 9:00 AM',
        totalSpace: 8
    }
]

const BookingAppointment = ({ date }) => {

    return (
        <section>
            <div className="container">
                <div className="row text-center">
                    <h3 className="text-brand text-center mb-5">Available Appointment of {date.toDateString()}</h3>
                    {
                        bookingData.map(booking => <BookingCard booking={booking} date={date} key={booking.id}></BookingCard>)
                    }
                </div>

            </div>

        </section>
    );
};

export default BookingAppointment;