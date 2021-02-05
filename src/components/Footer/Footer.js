import React from 'react';
import classes from './Footer.Module.css';
import Navigation from '../Navigation/Navigation';
import Logo from '../../images/logo.svg';
import FacebookImg from '../../images/facebook-brands.svg';
import Linkedin from '../../images/linkedin.svg';
import Github from '../../images/github.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className={classes.footer__wraper}>
      <div className={classes.footer__container}>
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>

        <Navigation />
        <div className={classes.icons__container}>
          <a
            href="https://github.com/KasparasDijokas"
            rel="noreferrer"
            target="_blank"
          >
            <img src={Github} alt="Github" />
          </a>
          <a
            href="https://www.facebook.com/kasparas.dijokas/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              src={FacebookImg}
              alt="Facebook"
              className={classes.facebook}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/kasparas-dijokas-37620219a/"
            rel="noreferrer"
            target="_blank"
          >
            <img src={Linkedin} alt="Linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
