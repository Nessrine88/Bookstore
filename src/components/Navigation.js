import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../style/Navigation.css';
import profile from '../assets/profile.PNG';

function Navigation() {
  return (
    <div className="nav-container">

      <div className="logo">

        <h2>Bookstore CMS</h2>
      </div>
      <div className="list">
        <div className="ul">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/categories">Categories</Link>
            </li>
          </ul>
        </div>
        <div className="profile">
          <img src={profile} alt="profile" />
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Navigation;
