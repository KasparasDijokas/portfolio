import React from 'react';
import Card from '../components/Card/Card';
import HeroSection from '../components/HeroSection/HeroSection';
import Proposal from '../components/Proposal/Proposal';
import './Home.css';
import Profile from '../images/kasparas.JPG';
import Skills from '../components/Skills/Skills';

const Home = () => {
  const CARD_DATA = {
    text: `I'm an enthusiastic and highly motivated junior web developer seeking to obtain a creative and challenging position
     in the IT sector. I have experience in web development using HTML, CSS, JavaScript, React, SASS, Firebase, and Bootstrap. 
     Currently learning TypeScript and improving my JavaScipt/React knowledge. I'm a fast learner, responsible, and hard worker, 
     always willing to learn new skills. `,
    heading: `ABOUT ME`,
    button_text: `GO TO PORTFOLIO`,
  };

  return (
    <div className="home-container">
      <HeroSection />
      <Card
        text={CARD_DATA.text}
        heading={CARD_DATA.heading}
        button_text={CARD_DATA.button_text}
        image={Profile}
        className={`card__container`}
        url="/portfolio"
      />
      <Skills />
      <Proposal />
    </div>
  );
};

export default Home;
