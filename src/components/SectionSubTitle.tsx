import React from 'react';

type SectionProps = {
  title: string
}


export const SectionSubTitle: React.FC<SectionProps> = ({ title }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="border-b-[1px] border-b-emerald-700 w-10" />
      <p className="uppercase text-emerald-700">{title}</p>
    </div>
  );
};
