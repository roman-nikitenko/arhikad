import React from 'react';
import { TestimonialsSection } from './TestimonialsSection.tsx';
import { QuestionSection } from './questionSection.tsx';
import { FormSection } from './FormSection.tsx';
import { PortfolioSection } from './PortfolioSection.tsx';
import { AboutUsSection } from './AboutUsSection.tsx';
import { AdvantageSection } from './AdvantageSection.tsx';
import { ServicesSection } from './ServicesSection.tsx';

export const Body: React.FC = () => {
  return (
    <div className="max-w-screen-2xl m-auto flex flex-col sm:overflow-auto overflow-hidden sm:py-0 py-3 items-center gap-y-[100px]">
      <AboutUsSection />
      <AdvantageSection />
      <ServicesSection />
      <QuestionSection />
      <PortfolioSection />
      <TestimonialsSection />
      <FormSection map={true}/>
    </div>
  );
};
