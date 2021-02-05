import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import logo from '../../images/logo.svg';
import classes from './Navbar.Module.css';

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    mobileMenu
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflowY = 'scroll');
  }, [mobileMenu]);

  const menuToggleHandler = () => {
    setMobileMenu(!mobileMenu);
  };

  const closeModal = () => {
    setMobileMenu(false);
  };

  return (
    <>
      <div
        className={
          mobileMenu
            ? `${classes.mobile__menu} ${classes.active}`
            : classes.mobile__menu
        }
        onClick={closeModal}
      >
        <Navigation mobileMenu={mobileMenu} />
      </div>
      <div className={classes.navbar}>
        <Link to="/">
          <img
            alt="img"
            src={logo}
            className={
              mobileMenu ? `${classes.logo} ${classes.active}` : classes.logo
            }
            onClick={closeModal}
          ></img>
        </Link>
        <Navigation mobileMenu={mobileMenu} />
        <i
          className={
            mobileMenu
              ? `${classes.hamburger} ${classes.active} fas fa-times`
              : `${classes.hamburger} fas fa-bars`
          }
          onClick={menuToggleHandler}
        />
      </div>
    </>
  );
};

export default Navbar;
