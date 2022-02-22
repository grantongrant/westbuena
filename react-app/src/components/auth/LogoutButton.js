import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logout } from '../../store/session';
import '../NavBar/NavBar.css';

const LogoutButton = () => {
  const dispatch = useDispatch()
  const history = useHistory();
  const onLogout = async (e) => {
    await dispatch(logout())
    .then (() => history.push("/"))
  };

  return <button className="logout-button-nav" onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
