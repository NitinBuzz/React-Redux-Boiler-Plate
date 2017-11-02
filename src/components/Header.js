import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>KLUWW</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>
      DashBoard |
    </NavLink>

    <NavLink to="/help">Help</NavLink>
  </header>
);

export default Header;
