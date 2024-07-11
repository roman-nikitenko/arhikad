import React from 'react';
import { TestimonialsSection } from './TestimonialsSection.tsx';
import { QuestionSection } from './questionSection.tsx';
import { FormSection } from './FormSection.tsx';
import { PortfolioSection } from './PortfolioSection.tsx';
import { AboutUsSection } from './AboutUsSection.tsx';
import { AdvantageSection } from './AdvantageSection.tsx';
import { ServicesSection } from './ServicesSection.tsx';

type BodyProp = {
  aboutSectionRef: React.RefObject<HTMLDivElement>;
  servicesSectionRef: React.RefObject<HTMLDivElement>;
  projectsSectionRef: React.RefObject<HTMLDivElement>;
}

export const Body: React.FC<BodyProp> = ({ projectsSectionRef, aboutSectionRef, servicesSectionRef }) => {
  return (
    <div className="max-w-screen-2xl m-auto flex flex-col overflow-hidden sm:p-0 p-3 items-center gap-y-[100px]">
      <AboutUsSection aboutSectionRef={aboutSectionRef} />
      <AdvantageSection />
      <ServicesSection servicesSectionRef={servicesSectionRef} />
      <QuestionSection />
      <PortfolioSection projectsSectionRef={projectsSectionRef} />
      <TestimonialsSection />
      <FormSection map={true}/>
    </div>
  );
};
