import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import './Auth.css';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
      const data = await dispatch(signUp(fullName, email, confirmEmail, password, confirmPassword));
      if (data) {
        setErrors(data)
      };
  };;

  const updateUsername = (e) => {
    setFullName(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updateRepeatEmail = (e) => {
    setConfirmEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <form onSubmit={onSignUp}>
      <p className="form-titles">Create an Account</p>
      <p className="form-text">When you open a west buena account, you'll be able to search for products, add them to your Favorites, add them to your personal Shopping Cart, checkout, and see your Order History.</p>
      {errors.length? 
      <div className="login-errors">
        <div className="login-errors-header">Sorry, unrecognized password or email.</div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div> : null }
      <div>
        <div className="login-labels"><label>FULL NAME</label></div>
        <input
          type='text'
          name='fullName'
          onChange={updateUsername}
          value={fullName}
          className="login-inputs"
        ></input>
      </div>
      <div>
        <div className="login-labels"><label>EMAIL</label></div>
        <input
          type='text'
          name='email'
          onChange={updateEmail}
          value={email}
          className="login-inputs"
        ></input>
      </div>
      <div>
        <div className="login-labels"><label>CONFIRM EMAIL</label></div>
        <input
          type='text'
          name='confirmEmail'
          onChange={updateRepeatEmail}
          value={confirmEmail}
          className="login-inputs"
        ></input>
      </div>
      <div>
        <div className="login-labels"><label>PASSWORD</label></div>
        <input
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
          className="login-inputs"
        ></input>
      </div>
      <div>
        <div className="login-labels"><label>CONFIRM PASSWORD</label></div>
        <input
          type='password'
          name='confirmPassword'
          onChange={updateRepeatPassword}
          value={confirmPassword}
          className="login-inputs"
        ></input>
      </div>
      <button className="login-buttons" type='submit'>Create An Account</button>
      <p className="form-text receive-email-text">If you do not with to receive promotional emails from us, do nothing. Note that we do not send any promotional emails.</p>
    </form>
  );
};

export default SignUpForm;
