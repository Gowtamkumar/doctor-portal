import React from 'react';
import chair from '../../../images/chair.png';
import { Link } from 'react-router-dom';

const HeaderMain = () => {
    return (
        <main style={{ height: '600px' }} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h2>Your New Smile <br /> Starts Here</h2>
                <p className="text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam quo, repellat autem, iure vel nemo voluptate incidunt nihil dolore ipsam facilis. Dolorem enim laborum explicabo!</p>
                <button class="btn-sm btn-primary">
                    <Link to="/appointment" className="text-light nav-link">Get Appointment</Link>
                </button>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;