import React from 'react';
import { MapSection } from './MapSection.tsx';
import { Form } from './Form.tsx';

type FormSectionProps = {
  map?: boolean;
}

export const FormSection: React.FC<FormSectionProps> = ({ map = false }) => {
  return (
    <section className="flex w-full items-center justify-center max-w-screen-lg gap-4">
      {map && <MapSection />}
        
        <Form />
    </section>
  );
};
