import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import './Auth.css';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [repeatEmail, setRepeatEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword && email === repeatEmail) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updateRepeatEmail = (e) => {
    setRepeatEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <form onSubmit={onSignUp}>
      <p className="form-titles">Create an Account</p>
      <p className="form-text">When you open a west buena account, you'll be able to Checkout, create a Wishlist, search for products, and see your order history.</p>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div>
        <div className="login-labels"><label>FULL NAME</label></div>
        <input
          type='text'
          name='username'
          onChange={updateUsername}
          value={username}
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
          name='repeat_email'
          onChange={updateRepeatEmail}
          value={repeatEmail}
          required={true}
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
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
          className="login-inputs"
        ></input>
      </div>
      <button className="login-buttons" type='submit'>Create An Account</button>
      <p className="form-text receive-email-text">If you do not with to receive promotional emails from us, do nothing. Note that we do not send any promotional emails.</p>
    </form>
  );
};

export default SignUpForm;
