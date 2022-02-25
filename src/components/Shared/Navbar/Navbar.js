import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <Link to="/" class="navbar-brand" style={{fontFamily:"Helvetica Neue", fontWeight: 600}}>DENTAL CARE</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link to="/" class="nav-link ms-3 text-secondary">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/" class="nav-link ms-3 text-secondary">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/" class="nav-link ms-3 text-secondary">Dental Services</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/appointment" class="nav-link ms-3 text-secondary">Appointment</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/" class="nav-link ms-3 text-secondary">Blogs</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/" class="nav-link ms-3 text-secondary">Contact</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/login" class="nav-link ms-3 text-secondary">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;