import React from 'react';
import Hero from '../../images/hero.jpg';
import Button from '../Button/Button';
import classes from './HeroSection.Module.css';
import { Link } from 'react-scroll';

const HeroSection = () => {
  return (
    <div className={classes.hero__section}>
      <div className={classes.image__container}>
        <img alt="hero" src={Hero}></img>
        <div className={classes.intro__container}>
          <h1>
            Hey, I'm Kasparas Dijokas and I love building beautiful websites
          </h1>
          <Link to="Card" spy={true} smooth={true}>
            <Button>ABOUT ME</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
