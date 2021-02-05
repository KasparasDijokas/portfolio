import React from 'react';
import classes from './Button.Module.css';
import DownArrows from '../../images/down-arrows.svg';

const Button = (props) => {
  return (
    <button
      className={
        props.secondary ? classes.btn__secondary : classes.btn__primary
      }
      disabled={props.disabled}
      {...props}
    >
      <div
        className={
          props.secondary
            ? classes.hide__img__container
            : classes.img__container
        }
      >
        <img src={DownArrows} alt="down-arrows" />
      </div>
      {props.children}
    </button>
  );
};

export default Button;
