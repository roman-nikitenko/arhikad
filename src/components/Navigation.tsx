import React, { useContext } from 'react';
import { NavBarLink } from './NavBarLink.tsx';
import { moveToSection } from '../../baseFanctions.ts';
import { ModalContext } from '../context/Context.tsx';

type NavigationProps = {
  listStyle?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ listStyle }) => {
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
  
  return (
    <div className="navbar text-white hidden md:block">
      <ul className={ `flex gap-10 ${ listStyle }` }>
        { links.map(link => (
          <NavBarLink title={link.title} onClick={moveToSection} refSection={link.refLink} />
        )) }
      </ul>
    </div>
  );
};
