import React from 'react';
import classes from './Card.Module.css';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const Card = (props) => {
  return (
    <div
      className={
        props.portfolio
          ? classes.card__container__portfolio
          : classes.card__container
      }
      id="Card"
    >
      <div
        className={
          props.second
            ? `${classes.img__container} ${classes.second}`
            : classes.img__container
        }
      >
        <img src={props.image} alt="project" />
      </div>
      <div className={classes.text__container}>
        <h2>{props.heading}</h2>
        {props.skills ? (
          <aside className={classes.skills}>
            {props.skills.map((item, i) =>
              props.skills.length - 1 === i ? (
                <span key={i}>{item}</span>
              ) : (
                <span key={i}>{item} / </span>
              )
            )}
          </aside>
        ) : (
          <p>{props.text}</p>
        )}

        {props.link ? (
            <a href={props.link} target="_blank" rel="noreferrer" style={{zIndex: "5"}}>
          <Button secondary={true}>
              {props.button_text}
          </Button>
            </a>
        ) : (
          <Link to={props.url}>
            <Button secondary={true}>
                {props.button_text}
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Card;
