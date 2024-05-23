import React from 'react';

type NavBarProp = {
  aboutSectionRef: React.RefObject<HTMLDivElement>;
  servicesSectionRef: React.RefObject<HTMLDivElement>;
  projectsSectionRef: React.RefObject<HTMLDivElement>;
}

export const NavBar: React.FC<NavBarProp> = ({ aboutSectionRef, servicesSectionRef, projectsSectionRef }) => {
  
  const moveToSection = (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>, refSection:React.RefObject<HTMLDivElement>) => {
    e.preventDefault();
    refSection.current?.scrollIntoView({
      behavior: 'smooth'
    })
  }
  
  return (
    <div className="py-4 md:px-10 2xl:px-0 flex items-center  max-w-screen-2xl m-auto justify-between">
      <div className="logo text-white flex text-3xl font-bold items-center">
        Arhi<p className="text-[color:var(--accent-color)]">kad</p>
      </div>
      <div className="navbar text-white">
        <ul className="flex gap-10">
          <li className="nav-link">
            <a onClick={() => {
              window.scroll({
                top: 0,
                behavior: 'smooth',
              })
            }}>Home</a>
          </li>
          <li className="nav-link">
            <a onClick={(e) => moveToSection(e, aboutSectionRef)} href="">About</a>
          </li>
          <li className="nav-link">
            <a onClick={(e) => moveToSection(e, servicesSectionRef)} href="">Services</a>
          </li>
          <li className="nav-link">
            <a onClick={(e) => moveToSection(e, projectsSectionRef)} href="">Projects</a>
          </li>
        </ul>
      </div>
    </div>
    
  );
};
