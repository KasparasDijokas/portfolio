import React, { useEffect } from 'react';
import Card from '../../components/Card/Card';
import tracker1 from '../../images/portfolio/details/tracker3.png';
import netflix1 from '../../images/portfolio/details/netflix2.jpg';
import dine1 from '../../images/portfolio/details/dine2.png';
import jsprojects from '../../images/jsprojects.jpg';
import Proposal from '../../components/Proposal/Proposal';

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const BUG_TRACKER = {
    text: `This project was built with React-redux and Firebase. In this React application,
     I used HTML5, CSS modules, and compound components for the front-end. For the back-end, I used Firebase and Firestore. `,
    heading: `Bug Tracker`,
    button_text: `VIEW PROJECT`,
  };
  const NETFLIX = {
    text: `This project required me to build a fully responsive landing page. For this React application,
     I used HTML5, CSS modules, compound components,
     functional components, and React hooks. For authentication and data storage I used Firebase and Firestore.`,
    heading: `Netflix`,
    button_text: `VIEW PROJECT`,
  };
  const DINE = {
    text: `This project was built using HTML5, CSS, and React. I had mobile and desktop designs to work on and created it so that it was fully responsive.
     I used React hooks and CSS modules, modern CSS like Flexbox and Grid for layout purposes, and react-reveal library for animations.`,
    button_text: `VIEW PROJECT`,
    heading: `Dine Restaurant`,
  };
  const JS__PROJECTS = {
    text: `These projects were created in pure HTML, CSS, and JavaScript.
    I  used modern CSS like Flexbox and Grid for layout purposes. These small projects helped me to improve
     my Vanilla JavaScript knowledge
     - I learned a lot about higher-order components, Fetch API & JSON, arrow functions, events, and more.`,
    heading: `Mini Frontend Projects`,
    button_text: `VIEW PROJECT`,
  };

  return (
    <div>
      <Card
        text={BUG_TRACKER.text}
        heading={BUG_TRACKER.heading}
        button_text={BUG_TRACKER.button_text}
        image={tracker1}
        portfolio={true}
        url="/portfolio/tracker"
      />
      <Card
        text={NETFLIX.text}
        heading={NETFLIX.heading}
        button_text={NETFLIX.button_text}
        image={netflix1}
        second={true}
        portfolio={true}
        url="/portfolio/netflix"
      />
      <Card
        text={DINE.text}
        heading={DINE.heading}
        button_text={DINE.button_text}
        image={dine1}
        portfolio={true}
        url="/portfolio/dine"
      />
      <Card
        text={JS__PROJECTS.text}
        heading={JS__PROJECTS.heading}
        button_text={JS__PROJECTS.button_text}
        image={jsprojects}
        second={true}
        portfolio={true}
        url="/portfolio/jsprojects"
      />
      <Proposal />
    </div>
  );
};

export default Portfolio;
