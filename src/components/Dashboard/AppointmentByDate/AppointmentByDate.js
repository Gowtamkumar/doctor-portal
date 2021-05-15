import React from 'react';
import AppointmentDataTable from '../AppointmentDataTable/AppointmentDataTable';

const AppointmentByDate = ({ appointments, selectedDate }) => {
    return (
        <div>
            {

                <AppointmentDataTable appointments={appointments} selectedDate={selectedDate}></AppointmentDataTable>

            }
        </div>
    );
};

export default AppointmentByDate;