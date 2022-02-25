import React from 'react';
import Testimonialdetails from '../Testimonialdetails/Testimonialdetails';
import Rahul from '../../../images/Ellipse 1.png'
import Khairul from '../../../images/Ellipse 2.png'
import Rakibul from '../../../images/Ellipse 3.png'
import './testimonial.css'

const testimonialData = [
    {
        name: "Winson Herry",
        city: "New Work",
        img: Rahul
    },
    {
        name: "Winson Herry",
        city: "London",
        img: Khairul
    },
    {
        name: "Winson Herry",
        city: "Khaka",
        img: Rakibul
    }
]
const Testimonial = () => {
    return (
        <section className="testimonial_container">
            <div className="pt-5 d-flex justify-content-center">
                <div className="w-75">
                    <h5>TESTIMONIAL</h5>
                    <h2>What,s Our Patients Says</h2>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <section className="row w-75 pt-5">
                        <h1>Need to redesign </h1>
                    {/* {
                        testimonialData.map(testimonial => <Testimonialdetails testimonial={testimonial}></Testimonialdetails>)
                    } */}
                </section>
            </div>
        </section>
    );
};

export default Testimonial;