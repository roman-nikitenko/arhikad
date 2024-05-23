import React, { useEffect, useState } from 'react';
import { NavBar } from './NavBar.tsx';
import { Button } from './Button.tsx';

type HeaderProp = {
  aboutSectionRef: React.RefObject<HTMLDivElement>;
  servicesSectionRef: React.RefObject<HTMLDivElement>;
  projectsSectionRef: React.RefObject<HTMLDivElement>;
}

export const Header: React.FC<HeaderProp> = ({ aboutSectionRef, servicesSectionRef, projectsSectionRef }) => {
  const [upToTop, setToTop] = useState<boolean>();

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

  return (
    <header className="header bg-[url('assets/plan.avif')]  bg-cover h-screen w-full mb-[80px]">
      <div className="bg-[#24272B]/[0.5] h-full">
        <div className={`backdrop-blur-sm fixed z-40 w-full transition ${upToTop ? 'bg-emerald-900/30' : 'bg-white/10'} `}>
          <NavBar aboutSectionRef={aboutSectionRef} servicesSectionRef={servicesSectionRef} projectsSectionRef={projectsSectionRef} />
        </div>
        <div className="wrapper md:px-10 2xl:px-0 max-w-screen-2xl m-auto">
          <div className="h-screen flex items-center">
            <div className="title w-[700px] flex-col gap-y-2 text-white">
              <h1 className="text-white text-7xl font-bold mb-2">
                One brick at a time, constructing dreams
              </h1>
              <p className='mb-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis cupiditate dolore, dolorem enim esse excepturi exercitationem hic laborum mollitia nemo nobis officia porro qui rem reprehenderit rerum sed voluptate!</p>
              <Button title="Read more" onClick={() => {}} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
