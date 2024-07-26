import React from 'react';
import { scrollToTop } from '../../baseFanctions.ts';

export const Logo: React.FC = () => {
  return (
    <div onClick={scrollToTop} className="logo cursor-pointer text-white flex text-3xl font-bold items-center">
      Архі<p className="text-[color:var(--accent-color)]">кад - НВ</p>
    </div>
  );
};
