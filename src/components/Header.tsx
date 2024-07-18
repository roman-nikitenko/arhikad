import React, { useEffect, useState } from 'react';
import { NavBar } from './NavBar.tsx';
import banner from '../assets/land-banner.jpg';
import { motion } from 'framer-motion'
import { slogan } from '../data.tsx';

type HeaderProp = {
  aboutSectionRef: React.RefObject<HTMLDivElement>;
  servicesSectionRef: React.RefObject<HTMLDivElement>;
  projectsSectionRef: React.RefObject<HTMLDivElement>;
}

export const Header: React.FC<HeaderProp> = ({ aboutSectionRef, servicesSectionRef, projectsSectionRef }) => {
  const [upToTop, setToTop] = useState<boolean>();
  const [isOpen, setIsOpen] = useState<boolean>(false)
  

  const isSticky = () => {
    const scrollTop = window.scrollY;
    const heightScreen = window.innerHeight;
    setToTop(scrollTop > heightScreen - 50)
  };
  
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });

  const moveToSection = (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>, refSection:React.RefObject<HTMLDivElement>) => {
    e.preventDefault();
    refSection.current?.scrollIntoView({
      inline: "nearest",
      behavior: "smooth",
    })
  }
  
  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <header className="header relative bg-cover md:bg-center overflow-hidden bg-[-300px] bg-no-repeat h-screen w-full mb-[80px]">
      <motion.div
        className="absolute inset-0 -z-10 bg-cover" 
        style={{ backgroundImage: `url(${banner})` }}
        initial={{
          scale: 1.5
        }}
        animate={{
          scale: 1,
          transition: {
            duration: 2
          },
        }}
      />
      <div className="bg-[#24272B]/[0.5] h-full">
        <div className="fixed z-50 w-full">
          <div className={`backdrop-blur-sm transition-all duration-700 z-40 ${isOpen ? 'h-32' : 'h-16'} overflow-hidden  transition ${upToTop ? 'bg-emerald-900/30' : 'bg-white/10'} `}>
            <NavBar isOpen={isOpen} setIsOpen={setIsOpen} aboutSectionRef={aboutSectionRef} servicesSectionRef={servicesSectionRef} projectsSectionRef={projectsSectionRef} />
            <div className={ `overflow-hidden transition-all duration-700` }>
              <div className="navbar text-white">
                <ul className="flex justify-center gap-4 py-4">
                  <li className="nav-link">
                    <a onClick={() => {
                      window.scroll({
                        top: 0,
                        behavior: 'smooth',
                      });
                      closeMenu()
                    }}>Головна</a>
                  </li>
                  <li className="nav-link">
                    <a onClick={(e) => { moveToSection(e, aboutSectionRef); closeMenu() }} href="">Про нас</a>
                  </li>
                  <li className="nav-link">
                    <a onClick={(e) => {  moveToSection(e, servicesSectionRef); closeMenu() }} href="">Послуги</a>
                  </li>
                  <li className="nav-link">
                    <a onClick={(e) =>  { moveToSection(e, projectsSectionRef); closeMenu() }} href="">Проекти</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="wrapper md:px-10 2xl:px-0 px-5 max-w-screen-2xl m-auto">
          <div className="h-screen flex items-end pb-20">
            <div className="title w-[700px] flex-col gap-y-2 text-white">
              <h1 className="text-white md:text-7xl font-bold mb-2 text-4xl">
                {slogan}
              </h1>
              <p className='mb-8 md:text-base text-sm'>Вибір нас означає партнерство з командою, яка прагне втілити ваше бачення в життя. Ми не просто архітектори; ми є вашими співавторами, людьми, які вирішують проблеми, і вашими захисниками протягом усього процесу проектування та будівництва.</p>
              {/*<Button title="Read more" onClick={() => {}} />*/}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
