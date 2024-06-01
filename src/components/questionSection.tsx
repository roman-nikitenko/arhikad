import React from 'react';
import { Button } from './Button.tsx';

export const QuestionSection: React.FC = () => {
  return (
    <section className="overflow-hidden relative max-w-screen-2xl m-auto w-full">
      <div className="size-full bg-center bg-[url('assets/bg-construction.jpg')]">
        <div className="size-full bg-black/[0.5]">
          <div className="max-w-screen-lg flex flex-col gap-y-5 items-start py-[60px] text-white w-full max-w-screen-gl m-auto">
            <h2 className="text-3xl font-bold">Ви готові натиснути кнопку? <br/> Задайте питання прямо зараз.</h2>
            <p className="text-xs w-96">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam asperiores delectus ex quaerat! Amet consectetur, ea exercitationem fuga pariatur quod sed?</p>
            <Button title="Задати запитання" onClick={() => {}} />
          </div>
        </div>
      </div>
    </section>
  );
};
