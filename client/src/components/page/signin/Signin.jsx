import React, { useState, useRef } from 'react';
import Navbar from '../../layout/navbar/Navbar';
import { SigninWrapper, SigninContent, SigninForm, BackgroundForm } from './SigninStyles';
import {Redirect, useHistory} from 'react-router-dom';
import AuthService from '../../../services/authService';
import { useAlert } from 'react-alert';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const alert = useAlert();

    const handleSignin = (evt) => {
        evt.preventDefault();
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            alert.error('invalid email')
            return
        }
        const formData = {
            email: email,
            password: password
        }
        AuthService.onSignin(formData)
            .then((success) => {
                if(success.error){
                    console.log(success)
                    alert.error(success.error)
                } else {
                    history.push('/home');
                    alert.success(`Welcome back ${success.user.name}`);
                }
            })
            .catch((error) => {
                console.log(error);
                alert.error('Couldnt sign you in!')
            })
    }
    if(AuthService.getUser()) {
        return <Redirect to={{ pathname: "/home" }} />
    }
    return (
        <div className="signin">
            <Navbar />
            <SigninWrapper>
                <SigninContent>
                    <BackgroundForm>
                        <SigninForm onSubmit={handleSignin}>
                            <h1 className="signin-title">Sign In</h1>
                            <input type="text" className="form-input" value={email} onChange={(evt) => setEmail(evt.target.value)} placeholder="Enter your email" />
                            <input type="password" className="form-input" value={password} onChange={(evt) => setPassword(evt.target.value)} placeholder="Enter your password" />
                            <input type="submit" className="form-button" value="Sign In" />
                            <div className="register-forget-container">
                                <div className="or-section">
                                    <hr />
                                    <p>Or</p>
                                    <hr />
                                </div>
                                <a href="" className="forget-password-link">Forgot Password?</a><br /><br />
                                <a href="/signup" className="register-button-link">Get an account</a>
                            </div>
                        </SigninForm>
                    </BackgroundForm>
                </SigninContent>
            </SigninWrapper>
            <ToastContainer />
        </div>
    );
}
export default Signin;
