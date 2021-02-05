import React from 'react';
import DetailsSection from '../components/DetailsSection/DetailsSection';
import data from '../data';
import Proposal from '../components/Proposal/Proposal';
import { animateScroll } from 'react-scroll';

const Netflix = () => {
  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };
  scrollToTop();
  return (
    <div>
      <DetailsSection
        headerImage={data.netflix.headerImage}
        summaryHeading={data.netflix.summaryHeading}
        summaryText={data.netflix.summaryText}
        summaryButtonText={data.netflix.summaryButtonText}
        descriptionImage_2={data.netflix.descriptionImage_2}
        descriptionImage_3={data.netflix.descriptionImage_3}
        previousProject={data.netflix.summaryHeading}
        nextProject={data.netflix.summaryHeading}
        skills={data.netflix.skills}
        prevText={data.netflix.prevText}
        nextText={data.netflix.nextText}
        prevLink={data.netflix.prevLink}
        nextLink={data.netflix.nextLink}
        github={data.netflix.github}
        firebase={data.netflix.firebase}
      />
      <Proposal />
    </div>
  );
};

export default Netflix;
