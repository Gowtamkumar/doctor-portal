import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
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

const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn, date }) => {


    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.date = date.toDateString();
        data.service = appointmentOn;
        let today= new Date()
        data.created = new Date().toDateString()
        // This code for time
        data.time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        console.log(data.time)

        fetch('http://localhost:5000/addAppointment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    closeModal()
                    alert("Appointment successfully")
                }
            })
    };
    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <h2 className="text-brand text-center">{appointmentOn}</h2>
                <p className="text-brand text-center"><small>On {date.toDateString()}</small></p>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputname"
                            placeholder="Your Name"
                            {...register("name", { required: true })}
                        />
                        {errors.name && <span>This field is required</span>}
                    </div>
                    <div className="mb-3">
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Your Phone"
                            {...register("phone", { required: true })}
                        />
                        {errors.phone && <span>This field is required</span>}

                    </div>
                    <div className="mb-3">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Your Email"
                            {...register("email", { required: true })}
                        />
                        {errors.email && <span>This field is required</span>}

                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="1234 Main St"
                            {...register("address", { required: true })}
                        />
                        {errors.address && <span>This field is required</span>}

                    </div>
                    <div className="input-group">
                        <input type="number" name="age" className="form-control" placeholder="Age" {...register("age", { required: true })} />
                        {errors.age && <span>This field is required</span>}

                        <input type="text" className="form-control" placeholder="Weight" {...register("weight", { required: true })} />
                        {errors.weight && <span>This field is required</span>}

                        <select {...register("gender")} className="form-control">
                            <option value="female">Female</option>
                            <option value="male">Male</option>
                            <option value="other">other</option>
                        </select>
                        {errors.gender && <span>This field is required</span>}
                    </div>

                    {/* <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div> */}
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </Modal>
        </div>
    );
};

export default AppointmentForm;