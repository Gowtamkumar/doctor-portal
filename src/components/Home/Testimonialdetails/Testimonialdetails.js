import React from 'react';

const Testimonialdetails = ({ testimonial }) => {
    return (
        <div className="col-md-4">
            <div className="shadow-none p-4 mb-5 bg-light rounded ">
                <p className="text-sm-start">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores id nulla quia modi pariatur incidunt, sint tempore ipsa quos alias fugiat similique esse voluptatibus placeat nobis ea quibusdam molestiae iure facere architecto cum nisi enim!</p>
                <div className="d-flex justify-content-center">
                    <div>
                        <img src={testimonial.img} alt="" className="img-fluid" />
                    </div>
                    <div className="p-3">
                        <p>{testimonial.name}</p>
                        <p>{testimonial.city}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonialdetails;