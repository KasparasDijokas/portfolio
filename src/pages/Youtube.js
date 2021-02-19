import React from 'react';
import DetailsSection from '../components/DetailsSection/DetailsSection';
import data from '../data';
import Proposal from '../components/Proposal/Proposal';
import { animateScroll } from 'react-scroll';

const Youtube = () => {
  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };
  scrollToTop();
  return (
    <div>
      <DetailsSection
        headerImage={data.youtube.headerImage}
        summaryHeading={data.youtube.summaryHeading}
        summaryText={data.youtube.summaryText}
        summaryButtonText={data.youtube.summaryButtonText}
        descriptionImage_2={data.youtube.descriptionImage_2}
        descriptionImage_3={data.youtube.descriptionImage_3}
        previousProject={data.youtube.summaryHeading}
        nextProject={data.youtube.summaryHeading}
        skills={data.youtube.skills}
        prevText={data.youtube.prevText}
        nextText={data.youtube.nextText}
        prevLink={data.youtube.prevLink}
        nextLink={data.youtube.nextLink}
        github={data.youtube.github}
        firebase={data.youtube.firebase}
      />
      <Proposal />
    </div>
  );
};

export default Youtube;
