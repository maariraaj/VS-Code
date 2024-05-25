import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faCog } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" id="sidebar">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
        <span className="fs-4 d-none d-sm-inline">Sidebar</span>
        <span className="d-inline d-sm-none"><FontAwesomeIcon icon={faHome} /></span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a href="#" className="nav-link active" aria-current="page">
            <FontAwesomeIcon icon={faHome} />
            <span className="ms-2 d-none d-sm-inline">Dashboard</span>
          </a>
        </li>
        <li>
          <a href="#" className="nav-link link-dark">
            <FontAwesomeIcon icon={faUser} />
            <span className="ms-2 d-none d-sm-inline">Profile</span>
          </a>
        </li>
        <li>
          <a href="#" className="nav-link link-dark">
            <FontAwesomeIcon icon={faEnvelope} />
            <span className="ms-2 d-none d-sm-inline">Messages</span>
          </a>
        </li>
        <li>
          <a href="#" className="nav-link link-dark">
            <FontAwesomeIcon icon={faCog} />
            <span className="ms-2 d-none d-sm-inline">Settings</span>
          </a>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <a href="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="https://via.placeholder.com/40" alt="" width="32" height="32" className="rounded-circle me-2" />
          <strong className="d-none d-sm-inline">Username</strong>
        </a>
        <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
          <li><a className="dropdown-item" href="#">New project...</a></li>
          <li><a className="dropdown-item" href="#">Settings</a></li>
          <li><a className="dropdown-item" href="#">Profile</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li><a className="dropdown-item" href="#">Sign out</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
