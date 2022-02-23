import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import './Auth.css';

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
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

  if (user) {
    return <Redirect to='/' />;
  }

  const demoLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login('montrose@aa.io', 'password1ab!'));

    if (data) {
      setErrors(data);
    }
  };

  return (
    <div>
    <form onSubmit={onLogin}>
      <p className="form-titles">Sign in using your email</p>
      <p className="form-text">You can now sign into this brand using your account! If you don't have an account, create an account.</p>
      {errors.length ? 
      <div className="login-errors">
        <div className="login-errors-header">Sorry, unrecognized password or email.</div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div> : null }
      <div>
        <div className="login-labels"><label htmlFor='email'>EMAIL</label></div>
        <input
          name='email'
          type='text'
          value={email}
          onChange={updateEmail}
          className="login-inputs" 
          />
      </div>
      <div>
        <div className="login-labels"><label htmlFor='password'>PASSWORD</label></div>
        <input
          name='password'
          type='password'
          value={password}
          onChange={updatePassword}
          className="login-inputs" 
        />
      </div>
      <button className="login-buttons" type='submit'>Sign In</button>
      <div>
        <p className="form-titles demo-login-content">Are You An Interested Developer?</p>
        <p className="form-text">Users who access this site with the demo login enjoy exclusive site privileges + more.</p>
        <button className="login-buttons" type="button" onClick={demoLogin}>Demo Sign In</button>
      </div>
    </form>
    </div>
  );
};

export default LoginForm;
