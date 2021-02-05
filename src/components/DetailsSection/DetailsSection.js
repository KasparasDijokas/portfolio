import React from 'react';
import classes from './DetailsSection.Module.css';
import Button from '../Button/Button';
import arrow_left from '../../images/arrow-left.svg';
import arrow_right from '../../images/arrow-right.svg';
import { Link } from 'react-router-dom';

const DetailsSection = ({
  headerImage,
  summaryHeading,
  summaryText,
  summaryButtonText,
  descriptionImage_2,
  descriptionImage_3,
  skills,
  prevText,
  nextText,
  prevLink,
  nextLink,
  github,
  firebase
}) => {
  return (
    <main className={classes.details__container}>
      <h1>{summaryHeading}</h1>
      <div className={classes.line}></div>
      <figure className={classes.details__header}>
        <img alt="header" src={headerImage}></img>
      </figure>

      <div className={classes.desktop__wraper}>
        <section className={classes.info__summary__container}>
          <h1>{summaryHeading}</h1>
          <p>{summaryText}</p>
          <aside className={classes.skills}>
            {skills.map((item, i) =>
              skills.length - 1 === i ? (
                <span key={i}>{item}</span>
              ) : (
                <span key={i}>{item} / </span>
              )
            )}
          </aside>
          <div className={classes.links}>
            <a
              href={firebase}
              target="_blank"
              rel="noreferrer"
            >
              <Button secondary={true}>{summaryButtonText}</Button>
            </a>
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
            >
              <Button secondary={true}>Github</Button>
            </a>
          </div>
        </section>

        <section className={classes.info__description__container}>
          <div className={classes.description__container__image}>
            <h2>Static Previews</h2>
            <img src={descriptionImage_2} alt="static preview"></img>
            <img src={descriptionImage_3} alt="static preview"></img>
          </div>
        </section>
      </div>

      <div className={classes.controls}>
        <div className={classes.controls__left}>
          <Link to={prevLink}>
            <img
              src={arrow_left}
              alt="arrow"
              className={classes.controls__link}
            ></img>
          </Link>

          <div>
            <Link to={prevLink}>
              <h2 className={classes.controls__link}>{prevText}</h2>
            </Link>
            <Link to={prevLink}>
              <p className={classes.controls__link}>Previous Project</p>
            </Link>
          </div>
        </div>

        <div className={classes.controls__right}>
          <div>
            <Link to={nextLink}>
              <h2 className={classes.controls__link}>{nextText}</h2>
            </Link>
            <Link to={nextLink}>
              <p className={classes.controls__link}>Next Project</p>
            </Link>
          </div>

          <Link to={nextLink}>
            <img
              src={arrow_right}
              alt="arrow"
              className={classes.controls__link}
            ></img>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default DetailsSection;
