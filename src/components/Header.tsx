import React, { useEffect, useState } from 'react';
import { NavBar } from './NavBar.tsx';
import banner from '../assets/bannner22.png';
import { motion } from 'framer-motion'
import { slogan } from '../data.tsx';
import useNoScroll from '../hooks/NoScroll.ts';
import { SideBar } from './SideBar.tsx';

export const Header: React.FC = () => {
  const [upToTop, setToTop] = useState<boolean>();
  const [isOpen, setIsOpen] = useState<boolean>(false)
  

  const isSticky = () => {
    const scrollTop = window.scrollY;
    const heightScreen = window.innerHeight;
    setToTop(scrollTop > heightScreen - 50)
  };
  
  useNoScroll(isOpen);
  
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });

  // const moveToSection = (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>, refSection:React.RefObject<HTMLDivElement>) => {
  //   e.preventDefault();
  //   refSection.current?.scrollIntoView({
  //     inline: "nearest",
  //     behavior: "smooth",
  //   })
  // }
  //
  // const closeMenu = () => {
  //   setIsOpen(false)
  // }
  
  return (
    <header className="header relative bg-cover md:bg-center overflow-hidden bg-[-300px] bg-no-repeat h-screen w-full mb-[80px]">
      <motion.div
        className="absolute inset-0 -z-10 bg-center bg-cover" 
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
          <div className={`backdrop-blur-sm duration-700 z-40 overflow-hidden  transition ${upToTop ? 'bg-emerald-900/30' : 'bg-white/10'} `}>
            
            <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
            <SideBar isOpen={isOpen} setIsOpen={setIsOpen}  />
          </div>
        </div>
        
        <div className="wrapper md:px-10 2xl:px-0 px-5 max-w-screen-2xl m-auto">
          <div className="h-screen flex items-end pb-20">
            <div className="title w-[700px] flex-col gap-y-2 text-white">
              <h1 className="text-white md:text-7xl font-bold mb-2 text-4xl">
                {slogan}
              </h1>
              <p className='mb-8 md:text-base text-sm'>
                Вибір нас означає партнерство з командою, яка прагне втілити ваше бачення в життя. Ми не просто архітектори; ми — ваші співавтори, люди, які вирішать питання щодо оформлення документів та проведуть вас від процесу проєктування до будівництва.
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
