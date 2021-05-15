import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddDoctor = () => {
    const [doctorInfo, setDoctorInfo] = useState({})
    const [file, setFile] = useState(null)
    const handleBlur = e => {
        const newInfo = { ...doctorInfo };
        newInfo[e.target.name] = e.target.value
        setDoctorInfo(newInfo)
        console.log(doctorInfo)
    }
    const handleFileChange = (e) => {
        const newFile = e.target.files[0]

        setFile(newFile)
    }
    const handlesubmit = () => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', doctorInfo.name)
        formData.append('email', doctorInfo.email)
        formData.append('address', doctorInfo.address)
        formData.append('phone', doctorInfo.phone)

        fetch('https://rocky-fjord-09696.herokuapp.com/addDoctor', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 sidebar">
                        <div className="mt-5">
                            <Sidebar></Sidebar>
                        </div>
                    </div>
                    <div className="col-md-10">
                        <div className="row  p-3">
                            <h6 className="p-4">Add Doctor</h6>
                            <div className="main bg-light m-2">
                                <form className="row g-3" onSubmit={handlesubmit}>
                                    <div className="col-12">
                                        <label for="inputAddress2" className="form-label">Name</label>
                                        <input type="text" onBlur={handleBlur} name="name" className="form-control" placeholder="Full Name" />
                                    </div>
                                    <div className="col-md-6">
                                        <label for="inputEmail4" className="form-label">Email</label>
                                        <input type="email" onBlur={handleBlur} name="email" className="form-control" placeholder="Email"/>
                                    </div>
                                    <div className="col-md-6">
                                        <label for="inputimage" className="form-label">Image Upload</label>
                                        <input type="file" onChange={handleFileChange} name="file" className="form-control"  />
                                    </div>
                                    <div className="col-6">
                                        <label for="inputAddress" className="form-label">Address</label>
                                        <input type="text" onBlur={handleBlur} name="address" className="form-control"  placeholder="1234 Main St" />
                                    </div>
                                    <div className="col-6">
                                        <label for="Phone" className="form-label">Phone</label>
                                        <input type="number" onBlur={handleBlur} name="phone" className="form-control" placeholder="1234 Main St" />
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="btn btn-primary">Sign in</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddDoctor;