import React, { useState } from 'react';
import call from '../assets/icons/call.svg';
import { phoneNumber } from '../data.tsx';

export const CallMe: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false)
  
  return (
    <div className="fixed right-5 over bottom-5 md:right-10 md:bottom-10 z-50 justify-end items-center flex ">
      {!open && (
        <div className="absolute right-2 bg-[var(--accent-color)] animate-ping size-16 rounded-full" />
      )}
      <div className={`bg-[var(--accent-color)] relative flex transition-all duration-700 justify-end items-center ${open ? 'w-[300px]' : 'w-20' }  overflow-hidden h-20 rounded-full`}>
        <a href="tel:+3806323412345" className="text-[var(--light)] whitespace-nowrap overflow-hidden float-none inline-block absolute text-xl left-5 z-10">{phoneNumber}</a>
        <div onClick={() => setOpen(prevState => !prevState)} className="cursor-pointer rounded-full bg-[var(--accent-color)] z-20 size-20 flex justify-center items-center">
          <img src={call} alt="phone image" className="size-10"/>
        </div>
      </div>
    </div>
  );
};
