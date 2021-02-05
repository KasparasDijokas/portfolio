import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navigation.Module.css';

const Navigation = (props) => {
  return (
    <nav className={classes.navigation}>
      <NavLink
        exact
        to="/"
        activeStyle={{ color: '#5fb4a2' }}
        className={classes.nav__link}
      >
        HOME
      </NavLink>
      <NavLink
        to="/portfolio"
        activeStyle={{ color: '#5fb4a2' }}
        className={classes.nav__link}
      >
        PORTFOLIO
      </NavLink>
      <NavLink
        to="/contact"
        activeStyle={{ color: '#5fb4a2' }}
        className={classes.nav__link}
      >
        CONTACT ME
      </NavLink>
    </nav>
  );
};

export default Navigation;
