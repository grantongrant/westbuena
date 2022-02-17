import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { useHistory, NavLink } from 'react-router-dom';
import { MdOutlineSell } from 'react-icons/md';
import { RiLogoutBoxLine } from 'react-icons/ri';
import { AiFillCaretDown } from 'react-icons/ai';

function ProfileButton({ user }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener('click', closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push('/');
  };

  return (
    <>
      <div className="logged-in-nav">
        <button id="logged-in-menu" onClick={openMenu}>
          <img src={user.profile_pic_url} className="menu-icons" alt="profile pic url"/>
          <AiFillCaretDown />
        </button>
        {showMenu && (
          <ul className="profile-dropdown">
            <NavLink to={`/users/${user.id}`} className="dropdown-containers">
              <div>
                <img src={user.profile_pic_url} className="dropdown-icons" alt="profile pic url"/>
              </div>
              <div>
                <p>{user.username}</p>
                <p>View your profile</p>
              </div>
            </NavLink>
            <NavLink to="/products/new">
              <div className="dropdown-containers">
                <div>
                  <MdOutlineSell className="dropdown-icons" />
                </div>
                <div>
                  <p>List an item</p>
                </div>
              </div>
            </NavLink>
            <button className="logout-button" onClick={logout}>
              <div>
                <RiLogoutBoxLine className="dropdown-icons" />
              </div>
              <div>
                <p>Sign out</p>
              </div>
            </button>
          </ul>
        )}
      </div>
    </>
  );
}

export default ProfileButton;
