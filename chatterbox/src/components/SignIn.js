import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import AppUser from "../models/AppUser";
import { loginService } from '../services/AppUserService';

const SignIn = () => {

    const [appUser, setAppUser] = useState(new AppUser());
    const [credentials, setCredentials] = useState('');
    const navigate = useNavigate();

    const handleAppUser = (event) => {
        console.log(event.target.name);
        console.log(event.target.value);
        setAppUser({
            ...appUser,
            [event.target.name]: event.target.value
        });
    };

    const submitAppUser = (event) => {
        loginService(appUser)
            .then((response) => {
                localStorage.setItem('loggedInUser', JSON.stringify(appUser));
                console.log(JSON.parse(localStorage.getItem('loggedInUser')).role);
                alert('You are successfully logged in !!');
                navigate('/Profile');
                window.location.assign('/Profile');
                window.location.reload();
            }).catch((error) => {
                localStorage.removeItem('loggedInUser');
                localStorage.clear();
                console.log(error.response);
                setCredentials("Enter proper credentials.");
            });
        event.preventDefault();
    }
    return (
        <center>
            <div className="container" >
            <div className="col-4 mt-5 pb-3 shadow bg-white text-center" >
                <h1 className="display-4 text-primary">Login</h1>
                <form className="form form-group form-dark " onSubmit={submitAppUser}>
                    <div>
                        <input
                            type="text"
                            name="userName"
                            id="userName"
                            className="form-control mb-3"
                            placeholder="Enter username"
                            value={appUser.email}
                            onChange={handleAppUser}
                            autoFocus
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="form-control mb-3"
                            placeholder="Enter password"
                            value={appUser.password}
                            onChange={handleAppUser}
                            required
                        />
                         <input
                            type="submit"
                            id="submit"
                            name="submit"
                            className="form-control btn btn-success mb-3"
                            value="Login1"
                            onClick={submitAppUser}
                        />
                       
                    </div>
                </form>
                <p className="text-danger">{credentials}</p>
                <Link to="/register" className="btn btn-primary col-12">Not yet registered? Register</Link>
                </div>
                <div>
                </div>
            </div >
        </center>
        
    )
}
export default SignIn;


