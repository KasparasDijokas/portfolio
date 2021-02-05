import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import classes from './Proposal.Module.css';

const Proposal = () => {
  return (
    <div className={classes.proposal__container}>
      <h1>Get In Touch</h1>
      <div className={classes.line}></div>
      <Link to="/contact">
        <Button secondary={true}>Contact Me</Button>
      </Link>
    </div>
  );
};

export default Proposal;
