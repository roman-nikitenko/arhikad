import React from 'react';
import { Testimonial } from '../types/testimonial.ts';

type TestimonialsSectionProps = {
  testimonial: Testimonial
}

export const TestimonialCard: React.FC<TestimonialsSectionProps> = ({ testimonial }) => {
  const { name, photo, message } = testimonial;
  
  return (
    <div className="bg-[var(--background-color)] break-inside-avoid w-[250px] rounded-lg mb-4 gap-4 p-4">
      <p className="text-xs mb-8">{message}</p>
      <div className="border-b border-b-gray-400 mb-2" />
      <div className="flex items-center">
        <div className="flex gap-2 w-full items-center">
          <img className="rounded-full object-cover object-top size-[35px]" src={photo} alt="photo" />
          <div className="flex gap-0.5 flex-col text-xs">
            <p className="font-bold">{name}</p>          
          </div>
        </div>
      </div>
    </div>
  );
};
