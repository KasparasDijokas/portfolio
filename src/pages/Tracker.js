import React from 'react';
import DetailsSection from '../components/DetailsSection/DetailsSection';
import data from '../data';
import Proposal from '../components/Proposal/Proposal';
import { animateScroll } from 'react-scroll';

const Tracker = () => {
  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };
  scrollToTop();
  return (
    <div>
      <DetailsSection
        headerImage={data.tracker.headerImage}
        summaryHeading={data.tracker.summaryHeading}
        summaryText={data.tracker.summaryText}
        summaryButtonText={data.tracker.summaryButtonText}
        descriptionImage_2={data.tracker.descriptionImage_2}
        descriptionImage_3={data.tracker.descriptionImage_3}
        previousProject={data.tracker.summaryHeading}
        nextProject={data.tracker.summaryHeading}
        skills={data.tracker.skills}
        prevText={data.tracker.prevText}
        nextText={data.tracker.nextText}
        prevLink={data.tracker.prevLink}
        nextLink={data.tracker.nextLink}
        github={data.tracker.github}
        firebase={data.tracker.firebase}
      />
      <Proposal />
    </div>
  );
};

export default Tracker;
