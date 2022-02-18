import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';

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
      <p>Sign in using your email</p>
      <p><p>You can now sign into this brand using your account! If you don't have an account, create an account.</p></p>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div>
        <label htmlFor='email'>EMAIL</label>
        <input
          name='email'
          type='text'
          placeholder='Email'
          value={email}
          onChange={updateEmail}
        />
      </div>
      <div>
        <label htmlFor='password'>PASSWORD</label>
        <input
          name='password'
          type='password'
          placeholder='Password'
          value={password}
          onChange={updatePassword}
        />
      </div>
      <button type='submit'>Sign In</button>
      <div>
        <p>Are You An Interested Developer?</p>
        <p>Users who access this site with the demo login enjoy exclusive site privileges + more.</p>
        <button type="button" onClick={demoLogin}>Demo Sign In</button>
      </div>
    </form>
    </div>
  );
};

export default LoginForm;
