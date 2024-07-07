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
  // servicesSectionRef: React.RefObject<HTMLDivElement>;
  projectsSectionRef: React.RefObject<HTMLDivElement>;
}

export const Body: React.FC<BodyProp> = ({ projectsSectionRef }) => {
  // const { inView } = useInView();
  // const { ref: aboutSection, inView: inViewAbout } = useInView();
  // const aboutRef = useRef(null);
  // const servicesSectionRef = useRef(null)
  
  return (
    <div className="max-w-screen-2xl m-auto flex flex-col items-center gap-y-[100px]">
      <AboutUsSection />
      <AdvantageSection />
      <ServicesSection />
      <QuestionSection />
      <PortfolioSection projectsSectionRef={projectsSectionRef} />
      <TestimonialsSection />
      <FormSection map={true}/>
    </div>
  );
};
