import React, { useState }from 'react';
import { useDispatch } from 'react-redux';
import './Orders.css';
import { login } from '../../store/session';

function OrderSignin() {

    const [errors, setErrors] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const onLogin = async (e) => {
        e.preventDefault();
        const data = await dispatch(login(email, password));
        if (data) {
            setErrors(data);
        }
    };

    const updateEmail = (e) => {
        setEmail(e.target.value);
    };

    const updatePassword = (e) => {
        setPassword(e.target.value);
    };

    const demoLogin = async (e) => {
        e.preventDefault();
        const data = await dispatch(login('montrose@aa.io', 'password1ab!'));

        if (data) {
        setErrors(data);
        }
    };

    return (
        <form onSubmit={onLogin}>
            <div className="order-form-header">Sign in to view order history</div>
            <div className="order-signin-form-text">Use the same sign-in credentials as your account sign in.</div>
            {errors.length ? 
            <div className="login-errors-order">
                <div className="login-errors-header-order">Sorry, unrecognized password or email.</div>
                {errors.map((error, ind) => (
                <div key={ind}>{error}</div>
                ))}
                </div> : null }
            <div>
            <label htmlFor='email'></label>
                <input
                    name='email'
                    type='text'
                    placeholder='Email *'
                    value={email}
                    onChange={updateEmail}
                    className="order-login-inputs"
                />
        </div>
        <div>
            <label htmlFor='password'></label>
                <input
                    name='password'
                    type='password'
                    placeholder='Password *'
                    value={password}
                    onChange={updatePassword}
                    className="order-login-inputs"
                />
        </div>
        <div className="order-signin-form-text">This will keep you logged-in on this device. To keep your account secure, use this option only on your personal devices</div>
        <button className="order-login-button" type='submit'>Sign In</button>
        <button className="order-demo-account-login" type="button" onClick={demoLogin}>Don't have an account? Sign in as our demo user.</button>
        </form>
    );
};

export default OrderSignin;