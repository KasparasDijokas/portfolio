import React, { useEffect } from 'react';
import styles from './javascript.module.css';
import Card from '../components/Card/Card';
import hangman from '../images/javascript/hangmanSmall.png';
import movie from '../images/javascript/movieSmall.png';
import calculator from '../images/javascript/calculatorSmall.png';
import mealFinderImg from '../images/javascript/mealSmall.jpg';
import formImg from '../images/javascript/FormSmall.png';
import Proposal from '../components/Proposal/Proposal';
import Controls from '../components/Controls/Controls';

const JavaScriptProjects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const HANGMAN__GAME = {
    text: `Traditional Hangman Game `,
    heading: `Hangman Game`,
    button_text: `VIEW PROJECT (github)`,
    skills: [
      'HTML5',
      'CSS',
      'JavaScript',
      'DOM Selection & Manipulation',
      'JavaScript Events',
      'Arrow Functions',
    ],
  };
  const MOVIE = {
    text: `Movie Seat Booking`,
    heading: `Movie Seat Booking`,
    button_text: `VIEW PROJECT (github)`,
    skills: [
      'HTML5',
      'CSS',
      'JavaScript',
      'DOM Selection & Manipulation',
      'JavaScript Events',
      'Arrow Functions',
      'Local Storage',
      'Higher order functions',
    ],
  };
  const CALCULATOR = {
    text: `Exchange calculator`,
    button_text: `VIEW PROJECT (github)`,
    heading: `Exchange Rate Calculator`,
    skills: [
      'HTML5',
      'CSS',
      'JavaScript',
      'DOM Selection & Manipulation',
      'JavaScript Events',
      'Arrow Functions',
      'Fetch API & JSON',
      'Higher order functions',
    ],
  };
  const MEAL = {
    text: `Meal Finder`,
    heading: `Meal Finder`,
    button_text: `VIEW PROJECT (github)`,
    skills: [
      'HTML5',
      'CSS',
      'JavaScript',
      'DOM Selection & Manipulation',
      'JavaScript Events',
      'Arrow Functions',
      'Fetch API & JSON',
      'Higher order functions',
    ],
  };
  const FORM = {
    text: `Form Validator`,
    heading: `Form Validator`,
    button_text: `VIEW PROJECT (github)`,
    skills: [
      'HTML5',
      'CSS',
      'JavaScript',
      'DOM Selection & Manipulation',
      'JavaScript Events',
      'Arrow Functions',
      'Higher order functions',
      'CSS Animations',
    ],
  };

  return (
    <div className={styles.portfolio__container}>
      <Card
        text={HANGMAN__GAME.text}
        heading={HANGMAN__GAME.heading}
        button_text={HANGMAN__GAME.button_text}
        image={hangman}
        portfolio={true}
        link="https://github.com/KasparasDijokas/hangman-game"
        skills={HANGMAN__GAME.skills}
      />
      <Card
        text={MOVIE.text}
        heading={MOVIE.heading}
        button_text={MOVIE.button_text}
        image={movie}
        second={true}
        portfolio={true}
        link="https://github.com/KasparasDijokas/movie-seat-booking"
        skills={MOVIE.skills}
      />
      <Card
        text={CALCULATOR.text}
        heading={CALCULATOR.heading}
        button_text={CALCULATOR.button_text}
        image={calculator}
        portfolio={true}
        link="https://github.com/KasparasDijokas/exchange-rate-calculator"
        skills={CALCULATOR.skills}
      />
      <Card
        text={MEAL.text}
        heading={MEAL.heading}
        button_text={MEAL.button_text}
        image={mealFinderImg}
        second={true}
        portfolio={true}
        link="https://github.com/KasparasDijokas/meal-finder"
        skills={MEAL.skills}
      />
      <Card
        text={FORM.text}
        heading={FORM.heading}
        button_text={FORM.button_text}
        image={formImg}
        portfolio={true}
        link="https://github.com/KasparasDijokas/form-validator"
        skills={FORM.skills}
      />
      <Controls
        prevLink={'dine'}
        prevText={'Dine Restaurant'}
        nextLink={'tracker'}
        nextText={'Bug Tracker'}
      />
      <Proposal />
    </div>
  );
};

export default JavaScriptProjects;
