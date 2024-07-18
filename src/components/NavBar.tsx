import React, { Dispatch, SetStateAction } from 'react';
import { burger, close } from '../assets/iconsSVG.tsx';
import { Logo } from './Logo.tsx';
import { NavBarLink } from './NavBarLink.tsx';
import { phoneNumber } from '../data.tsx';

type NavBarProp = {
  aboutSectionRef: React.RefObject<HTMLDivElement>;
  servicesSectionRef: React.RefObject<HTMLDivElement>;
  projectsSectionRef: React.RefObject<HTMLDivElement>;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const NavBar: React.FC<NavBarProp> = ({ aboutSectionRef, servicesSectionRef, projectsSectionRef, isOpen, setIsOpen }) => {

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
  
  const moveToSection = (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>, refSection:React.RefObject<HTMLDivElement>) => {
    e.preventDefault();
    refSection.current?.scrollIntoView({
      inline: "nearest",
      behavior: "smooth",
    })
  }
  
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
          {/*<li className="nav-link">*/}
          {/*  <a onClick={() => {*/}
          {/*    window.scroll({*/}
          {/*      top: 0,*/}
          {/*      behavior: 'smooth',*/}
          {/*    })*/}
          {/*  }}>Головна</a>*/}
          {/*</li>*/}
          {/*<li className="nav-link">*/}
          {/*  <a onClick={(e) => moveToSection(e, aboutSectionRef)} href="">Про нас</a>*/}
          {/*</li>*/}
          {/*<li className="nav-link">*/}
          {/*  <a onClick={(e) => moveToSection(e, servicesSectionRef)} href="">Послуги</a>*/}
          {/*</li>*/}
          {/*<li className="nav-link">*/}
          {/*  <a onClick={(e) => moveToSection(e, projectsSectionRef)} href="">Проекти</a>*/}
          {/*</li>*/}
        </ul>
      </div>
      <div className="text-white hidden md:block">
        <a href="tel:+3806323412345">{phoneNumber}</a>
      </div>
    </div>
  );
};
