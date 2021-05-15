import React from 'react';
import './Contact.css'

const Contact = () => {
    // 
    return (
        <div className="contact-container text-light text-center pt-5">
            <h3>Contact us</h3>
            <h2>Always Connect With Us</h2>
            <div className="d-flex justify-content-center pt-5 pb-5">
                <div className="row w-50">
                    <div class="mb-3">
                        <input type="email" class="form-control" placeholder="Email address" />
                    </div>
                    <div class="mb-3">
                        <input type="text" class="form-control" placeholder="Subject" />
                    </div>
                    <div class="mb-3">
                        <textarea class="form-control" rows="3" placeholder="Meassage..."></textarea>
                    </div>
                    <div class="mb-3">
                    <button type="button" class="btn btn-primary">Primary</button>
                    </div>
                    
                </div>
            </div>


        </div>
    );
};

export default Contact;