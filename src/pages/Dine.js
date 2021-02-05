import React from 'react';
import DetailsSection from '../components/DetailsSection/DetailsSection';
import data from '../data';
import Proposal from '../components/Proposal/Proposal';
import { animateScroll } from 'react-scroll';

const Dine = () => {
  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };
  scrollToTop();
  return (
    <div>
      <DetailsSection
        headerImage={data.dine.headerImage}
        summaryHeading={data.dine.summaryHeading}
        summaryText={data.dine.summaryText}
        summaryButtonText={data.dine.summaryButtonText}
        descriptionImage_2={data.dine.descriptionImage_2}
        descriptionImage_3={data.dine.descriptionImage_3}
        previousProject={data.dine.summaryHeading}
        nextProject={data.dine.summaryHeading}
        skills={data.dine.skills}
        prevText={data.dine.prevText}
        nextText={data.dine.nextText}
        prevLink={data.dine.prevLink}
        nextLink={data.dine.nextLink}
        github={data.dine.github}
        firebase={data.dine.firebase}
      />
      <Proposal />
    </div>
  );
};

export default Dine;
