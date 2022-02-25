import React from 'react';
import doctorImg from '../../../images/doctor_PNG.png'
import './MakeAppointment.css'
const MakeAppointment = () => {
    return (
        <section className="appointment-container">
            <div className="row">
                <div className="col-md-6">
                    <img src={doctorImg} alt="" className="img-fluid" />
                </div>
                <div className="col-md-6 pt-5 text-light">
                    <h4 className="text-light">APPOINTMENT</h4>
                    <h2>Make a Appointment <br />Today</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil optio ipsa harum perspiciatis veniam ratione qui eligendi corrupti. Ut, magnam, aperiam odio veniam sed esse error suscipit autem explicabo asperiores nesciunt iusto? Tempore, nihil ex. Totam tempora dolores doloribus illo, vero velit qui expedita, veritatis dignissimos nam unde deserunt accusantium.</p>
                    <button className='btn btn-primary'>Read More</button>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;