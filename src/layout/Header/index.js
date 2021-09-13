import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.css'

const Header = () => {
    return (<>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <NavLink className="nav" class="nav-link"  exact to ="/">Home </NavLink>
      </li>
      <li class="nav-item">
        <NavLink to="/about" className="nav" class="nav-link">About</NavLink>
      </li>
      <li class="nav-item">
        <NavLink to="/projects" className="nav" class="nav-link" >Projects</NavLink>
      </li>
      <li class="nav-item">
        <NavLink to="/contact" className="nav" class="nav-link" >Contact</NavLink>
      </li>
    </ul>
    <span class="navbar-text">
        <h1>C.A-T</h1>
    </span>

  </nav>



   
        </>
    );
}
export default Header;
