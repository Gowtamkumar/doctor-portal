import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import loginimg from '../../images/login.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}

const Login = () => {
    const [LoggedInUser, setLoggedInUser] = useContext(UserContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
    let history = useHistory ();
    let location = useLocation ();
    let { from } = location.state || { from: { pathname: "/dashboard/appointment" } };

    const HeandelClick = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                console.log(user)
                setLoggedInUser(user)
                history.replace(from);
            }).catch((error) => {

                const errorMessage = error.message;
                console.log(errorMessage)

            });
    }


    return (
        <div className="container">
            <div className="row">

                <div className="col-md-6 d-flex align-items-center justify-content-center">

                    <div className="from-container bg-light p-5 text-center">
                        <div className="mb-4">
                            <FontAwesomeIcon icon={faUser} style={{ fontSize: '70px', color: '##1CC7C1' }} />
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    {...register("email", { required: true })}
                                />
                                {errors.email && <span className="text-danger">This field is required</span>}

                            </div>
                            <div className="mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    {...register("password", { required: true })}
                                />
                                {errors.password && <span className="text-danger">This field is required</span>}

                            </div>
                            <div class="d-grid gap-2">
                                <button class="btn bg-brand text" type="submit">Sign In</button>
                            </div>
                        </form>
                        <hr />
                        <div class="d-grid gap-2 mt-1">
                            <button class="btn bg-brand text" onClick={HeandelClick} type="submit">Sign with Google</button>
                        </div>
                    </div>

                </div>
                <div className="col-md-6">
                    <img src={loginimg} alt="" className="img-fluid" />
                </div>
            </div>
        </div>
    );
};

export default Login;