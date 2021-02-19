import trackerImg from './images/portfolio/details/tracker3.png';
import trackerImg2 from './images/portfolio/details/tracker4.png';
import trackerImg3 from './images/portfolio/details/tracker2.png';
import netflix1 from './images/portfolio/details/netflix1.jpg';
import netflix2 from './images/portfolio/details/netflix2.jpg';
import netflix4 from './images/portfolio/details/netflix4.jpg';
import dine1 from './images/portfolio/details/dine1.jpg';
import dine2 from './images/portfolio/details/dine2.png';
import dine3 from './images/portfolio/details/dine3.png';
import youtube3 from './images/portfolio/details/yt-watch-desktop.png';
import youtube4 from './images/portfolio/details/yt-home-desktop.png';

const data = {
  tracker: {
    headerImage: trackerImg,
    summaryHeading: 'Bug Tracker',
    summaryText: `This project was built with React-redux and Firebase. In this React application,
     I used HTML5, CSS modules, and compound components for the front-end. For the back-end, I used Firebase and Firestore. `,
    summaryButtonText: 'VISIT WEBSITE',
    descriptionImage_2: trackerImg2,
    descriptionImage_3: trackerImg3,
    skills: [
      'React',
      'HTML5',
      'CSS',
      'JavaScript',
      'Compound components',
      'CSS Modules',
      'Firebase',
      'Firestore',
    ],
    prevLink: 'dine',
    nextLink: 'netflix',
    prevText: 'Dine Restaurant',
    nextText: 'Netflix',
    github: "https://github.com/KasparasDijokas/bug-tracker",
    firebase: "https://bug-trackerv2.web.app/projects"
  },
  netflix: {
    headerImage: netflix2,
    summaryHeading: 'Netflix',
    summaryText: `This project required me to build a fully responsive landing page. For this React application,
      I used HTML5, CSS modules, compound components,
      functional components, and React hooks. For authentication and data storage I used Firebase and Firestore. `,
    summaryButtonText: 'VISIT WEBSITE',
    descriptionImage_2: netflix1,
    descriptionImage_3: netflix4,
    skills: [
      'React',
      'HTML5',
      'CSS',
      'JavaScript',
      'Compound components',
      'CSS Modules',
      'Firebase',
      'Firestore',
    ],
    prevLink: 'tracker',
    nextLink: 'youtube',
    prevText: 'Bug Tracker',
    nextText: 'Youtube',
          github: "https://github.com/KasparasDijokas/netflix",
      firebase: "https://netflix-f9c47.web.app/signin"
  },
  dine: {
    headerImage: dine2,
    summaryHeading: 'Dine Restaurant',
    summaryText: `This project was built using HTML5, CSS, and React. I had mobile and desktop designs to work on and created it so that it was fully responsive.
      I used React hooks and CSS modules, modern CSS like Flexbox and Grid for layout purposes, and react-reveal library for animations. `,
    summaryButtonText: 'VISIT WEBSITE',
    descriptionImage_2: dine3,
    descriptionImage_3: dine1,
    skills: [
      'React',
      'HTML5',
      'CSS',
      'JavaScript',
      'CSS modules',
      'CSS Modules',
      'React-Reveal',
      'Grid',
      'Flexbox',
    ],
    prevLink: 'youtube',
    nextLink: 'jsprojects',
    prevText: 'Youtube',
    nextText: 'JavaScript Projects',
    github: "https://github.com/KasparasDijokas/restaurant",
    firebase: "https://dine-68663.web.app"
  },
  youtube: {
    headerImage: youtube3,
    summaryHeading: 'Youtube',
    summaryText: `This project was built using HTML5, SCSS, React and material-ui.
    I took a mobile-first approach and used modern CSS like Flexbox. For http requests I used axios library.`,
    summaryButtonText: 'VISIT WEBSITE',
    descriptionImage_2: youtube4,
    descriptionImage_3: youtube3,
    skills: [
      'React',
      'HTML5',
      'SCSS',
      'JavaScript',
      'Flexbox',
      'Axios',
      'Youtube API',
      'Material-UI'
    ],
    prevLink: 'netflix',
    nextLink: 'dine',
    prevText: 'Netflix',
    nextText: 'Dine restaurant',
    github: "https://github.com/KasparasDijokas/yt-portfolio",
    firebase: "https://yt-portfolio-e69bd.web.app/"
  },
};

export default data;
