import React, { useState } from 'react';
import Navbar from '../../layout/navbar/Navbar';
import { SignupWrapper, SignupContent, BackgroundForm, SignupForm } from './SignupStyles';
import { AuthService } from '../../../services/authService';
import { useHistory } from 'react-router-dom';
import { useAlert } from 'react-alert';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [denomination, setDenomination] = useState('');
    const [image, setImage] = useState('');
    const [url, setUrl] = useState('');
    const history = useHistory();
    const alert = useAlert();

    const handleSignup = (evt) => {
        evt.preventDefault();
        const formData = {
            name: name,
            email: email,
            password: password,
            denomination: denomination
        }
        AuthService.onSignup(formData)
            .then((success) => {
                console.log('Success: ', success);
                history.push('/');
                alert.success('Your account has been successfully created');
            })
            .catch((error) => {
                console.log('Error:', error);
                alert.error('Your account has not been created');
            })
    }
    return (
        <div className="signup">
            <Navbar />
            <SignupWrapper>
                <SignupContent>
                    <BackgroundForm>
                        <SignupForm onSubmit={handleSignup}>
                            <h1 className="signin-title">Sign Up</h1>
                            <input type="text" className="form-input" value={name} onChange={(evt) => setName(evt.target.value)} placeholder="Enter your full name" />
                            <input type="text" className="form-input" value={email} onChange={(evt) => setEmail(evt.target.value)} placeholder="Enter your email" />
                            <input type="password" className="form-input" value={password} onChange={(evt) => setPassword(evt.target.value)} placeholder="Enter your password" />
                            <input type="text" className="form-input" value={denomination} onChange={(evt) => setDenomination(evt.target.value)} placeholder="Enter your Denomination" />
                            <input type="submit" className="form-button" value="Sign Up" />
                        </SignupForm>
                    </BackgroundForm>
                </SignupContent>
            </SignupWrapper>
        </div>
    );
}
export default Signup;
