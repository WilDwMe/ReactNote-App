import React from "react";
import {NavLink} from 'react-router-dom';

export const Navbar = () => (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
    <div className="navbar-brand">
    ReactNote App
    </div>
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/main">Main</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
)