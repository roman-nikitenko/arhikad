import React from 'react';
import { scrollToTop } from '../../baseFanctions.ts';

export const Logo: React.FC = () => {
  return (
    <div onClick={scrollToTop} className="logo cursor-pointer text-[var(--light)] flex text-3xl font-bold items-center">
      <p className="[text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">Архі</p><p className="[text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] text-[color:var(--accent-color)]">кад - НВ</p>
    </div>
  );
};
