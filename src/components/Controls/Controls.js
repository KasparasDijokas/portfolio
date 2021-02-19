import React from 'react';
import {Link} from 'react-router-dom';
import classes from './Controls.module.css';
import arrow_left from '../../images/arrow-left.svg';
import arrow_right from '../../images/arrow-right.svg';

const Controls = ({prevLink, prevText, nextLink, nextText}) => {
    return (
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
    )
}

export default Controls
