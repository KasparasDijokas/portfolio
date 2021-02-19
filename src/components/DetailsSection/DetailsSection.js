import React from 'react';
import classes from './DetailsSection.Module.css';
import Button from '../Button/Button';
import Controls from '../Controls/Controls';

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
  firebase,
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
            <a href={firebase} target="_blank" rel="noreferrer">
              <Button secondary={true}>{summaryButtonText}</Button>
            </a>
            <a href={github} target="_blank" rel="noreferrer">
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
      <Controls
        prevLink={prevLink}
        prevText={prevText}
        nextLink={nextLink}
        nextText={nextText}
      />
    </main>
  );
};

export default DetailsSection;
