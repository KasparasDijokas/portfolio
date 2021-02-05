import React from 'react';
import styles from './skills.module.css';
import typescriptImg from '../../images/typescript.png';
import firebaseImg from '../../images/firebaseImg.svg';

const mySkills = [
  {
    iconClass: 'fab fa-html5',
    color: '#e34f26',
    text: 'HTML5',
  },
  {
    iconClass: 'fab fa-css3-alt',
    color: '#0645ad',
    text: 'CSS',
  },
  {
    iconClass: 'fab fa-sass',
    color: '#c69',
    text: 'SASS',
  },
  {
    iconClass: 'fab fa-js-square',
    color: '#f7df1e',
    text: 'JavaScript',
  },
  {
    iconClass: 'fab fa-react',
    color: '#61DBFB',
    text: 'React',
  },
  {
    iconClass: 'fab fa-github-square',
    color: '#6e5494',
    text: 'Git/Github',
  },
  {
    iconClass: 'fab fa-bootstrap',
    color: '#563d7c',
    text: 'Bootstrap',
  },
];

const Skills = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Technical Skills</h2>
        <div className={styles.line}></div>
      </div>
      <div className={styles.body}>
        {mySkills.map((skill) => {
          return (
            <div className={styles.card}>
              <i className={skill.iconClass} style={{ color: skill.color }}></i>
              <h3>{skill.text}</h3>
            </div>
          );
        })}
        <div className={styles.card}>
          <img src={typescriptImg} alt="typescript" />
          <h3>TypeScript</h3>
        </div>
        <div className={styles.card}>
          <img src={firebaseImg} alt="firebase" />
          <h3>Firebase</h3>
        </div>
      </div>
    </div>
  );
};

export default Skills;
