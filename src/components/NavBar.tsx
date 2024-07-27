import React, { Dispatch, SetStateAction, useContext } from 'react';
import { burger, close } from '../assets/iconsSVG.tsx';
import { Logo } from './Logo.tsx';
import { NavBarLink } from './NavBarLink.tsx';
import { ModalContext } from '../context/Context.tsx';
import { moveToSection } from '../../baseFanctions.ts';
import { PhoneSection } from './PhoneSection.tsx';

type NavBarProp = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const NavBar: React.FC<NavBarProp> = ({isOpen, setIsOpen }) => {
  
  const { projectsSectionRef, aboutSectionRef, servicesSectionRef } = useContext(ModalContext)

  const links = [
    {
      id: 1,
      title: "Головна",
      refLink: null
    },
    {
      id: 2,
      title: "Компанія",
      refLink: aboutSectionRef
    },
    {
      id: 3,
      title: "Послуги",
      refLink: servicesSectionRef
    },
    {
      id: 4,
      title: "Проекти",
      refLink: projectsSectionRef
    },
  ]

  console.log(projectsSectionRef, aboutSectionRef, servicesSectionRef)
  
  return (
    <div className="py-4 md:px-10 2xl:px-0 flex items-center px-5 max-w-screen-2xl m-auto justify-between">
      <Logo />
      <div onClick={() => setIsOpen(prevState => !prevState)} className="size-9 md:hidden fill-white">
        { isOpen ? close : burger }
      </div>
      <div className="navbar text-white hidden md:block">
        <ul className="flex gap-10">
          { links.map(link => (
            <NavBarLink title={link.title} onClick={moveToSection} refSection={link.refLink} />
          )) }
        </ul>
      </div>
      <PhoneSection visible="hidden" />
    </div>
  );
};
