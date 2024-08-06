import React, { Dispatch, SetStateAction } from 'react';
import { burger, close } from '../assets/iconsSVG.tsx';
import { Logo } from './Logo.tsx';
import { PhoneSection } from './PhoneSection.tsx';
import { Navigation } from './Navigation.tsx';

type NavBarProp = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const NavBar: React.FC<NavBarProp> = ({isOpen, setIsOpen }) => {
  return (
    <div className="py-4 md:px-10 2xl:px-0 flex items-center px-5 max-w-screen-2xl m-auto justify-between">
      <Logo />
      <div onClick={() => setIsOpen(prevState => !prevState)} className="size-9 md:hidden fill-white">
        { isOpen ? close : burger }
      </div>
      <Navigation />
      <PhoneSection visible="hidden" />
    </div>
  );
};
