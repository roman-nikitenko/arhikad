import React  from 'react';
import plan from '../assets/plan3.jpg';
import plan2 from '../assets/plan2.jpg'
import { Button } from './Button.tsx';
import { SectionSubTitle } from './SectionSubTitle.tsx';
import { PortfolioCard } from './PortfolioCard.tsx';
import construction1 from '../assets/portfolio/constraction1.jpg';
import construction2 from '../assets/portfolio/constraction2.jpg';
import construction3 from '../assets/portfolio/constraction3.jpg';
import { useInView } from 'react-intersection-observer';

type BodyProp = {
  aboutSectionRef: React.RefObject<HTMLDivElement>;
  servicesSectionRef: React.RefObject<HTMLDivElement>;
  projectsSectionRef: React.RefObject<HTMLDivElement>;
}

export const Body: React.FC<BodyProp> = ({ aboutSectionRef, servicesSectionRef, projectsSectionRef }) => {
  const { ref: madeSection, inView } = useInView();
  const { ref: aboutSection, inView: inViewAbout } = useInView();
  
  return (
    <div className="max-w-screen-2xl m-auto flex flex-col items-center gap-y-[100px]">
      <section ref={aboutSection} className="section-md">
        <div className="h-[440px] relative ">
          <img src={plan} className="w-full z-0 h-full" alt='plan image'/>
          <div className={`absolute top-0 left-0 size-[130px] border border-[var(----accent-color)] -z-10 transform ${inViewAbout ? '-translate-x-[10px] -translate-y-[10px]' : ''} transition duration-700`} />
          <div className={`absolute z-10  top-0 w-0 h-0 transform -translate-x-full -translate-y-full transition duration-700 ${inViewAbout ? 'translate-x-0 translate-y-0' : ''}
          border-t-[55px] border-t-white
          border-r-[55px] border-r-transparent`}/>
        </div>
        <div ref={aboutSectionRef} id="aboutSectionRef" className="w-[500px] flex flex-col gap-7 justify-center">
          <p className="text-emerald-700 uppercase">/about us</p>
          <h2 className="text-3xl font-bold">A group of reliability and expertise contractors</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequatur corporis deleniti dicta dolor dolorem doloribus ducimus earum est ex explicabo fuga, impedit ipsum, nostrum officiis tempora unde vel voluptatum?</p>
          <div className="flex justify-between">
            <div className="">
              <h3 className="bold-text"><span className="accent-text">+</span>350</h3>
              <p className="sub-text">Executed Projects</p>
            </div>
            <div className="">
              <h3 className="bold-text">12<span className="accent-text">Y</span></h3>
              <p className="sub-text">Experience</p>
            </div>
            <div className="">
              <h3 className="bold-text"><span className="accent-text">+</span>400</h3>
              <p className="sub-text">Satisfied Clients</p>
            </div>
          </div>
          <div>
            <Button title="About our Company" onClick={() => {}}/>
          </div>
        </div>
      </section>
      <section ref={madeSection} className="section-md">
        <div className="flex flex-col gap-5 pt-6">
          <SectionSubTitle title="why us" />
          <h2 className="text-6xl font-bold">Made By Builders <br/> Fro Builders</h2>
          <ul className="">
            <li className="">Lorem ipsum dolor sit amet.</li>
            <li className="">Lorem ipsum dolor sit amet.</li>
            <li className="">Lorem ipsum dolor.</li>
            <li className="">Lorem ipsum dolor sit amet.</li>
          </ul>
          <div>
            <Button title="See more" onClick={() => {}} />
          </div>
        </div>
        <div className="h-[440px] w-[370px] group relative">
          <div className={`absolute border border-black size-full -z-10 transform ${inView ? '-translate-x-[26px] -translate-y-[26px]' : ''} transition duration-700`} />
          <img src={plan2} className="w-full h-full object-cover " alt=""/>
        </div>
      </section>
      <section ref={servicesSectionRef} className="section-md">
        <div className="w-full flex flex-col gap-y-8">
          <SectionSubTitle title="cur services" />
          <h2 className="text-6xl font-bold">Services We <br/>  Provide</h2>
          <div className="flex gap-3 justify-between h-[330px]">
            <div className={`bg-[url("assets/develop.jpg")] relative bg-cover size-full flex items-end`} >
              <div className="absolute size-full bg-gradient-to-t from-black opacity-70 to-transparent" />
              <p className="title text-white text-3xl ml-6 mb-10 z-10 font-normal">Residential Construction</p>
            </div>
            <div className={`bg-[url("assets/develop2.jpg")] relative bg-cover size-full flex items-end`} >
              <div className="absolute size-full bg-gradient-to-t from-black opacity-70 to-transparent" />
              <p className="title text-white text-3xl ml-6 mb-10 z-10 font-normal">Interior Design</p>
            </div>
            <div className={`bg-[url("assets/constraction.jpg")] relative bg-cover size-full flex items-end`} >
              <div className="absolute size-full bg-gradient-to-t from-black opacity-70 to-transparent" />
              <p className="title text-white text-3xl ml-6 mb-10 z-10 font-normal">Interior Fitt-Out</p>
            </div>
          </div>
        </div>
      </section>
      <section ref={projectsSectionRef} className="section-md">
        <div className="flex flex-col gap-y-10">
          <div className="flex flex-col gap-y-3">
            <p className="text-emerald-700 uppercase">/past projects</p>
            <h2 className="text-3xl font-bold">
              Our project's outcomes <br/> are self-explanatory
            </h2>
          </div>
          <div className="flex gap-x-6">
            <PortfolioCard
              title="Building constracrions in Bucha"
              subTitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque esse hic impedit quae repudiandae ullam."
              typeOfWork="Remodeling"
              backgroundImage={construction1}
            />
            <PortfolioCard
              title="Kitchen remodeling in Hollywood Hills"
              subTitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque esse hic impedit quae repudiandae ullam."
              typeOfWork="Construction"
              backgroundImage={construction2}
            />
            <PortfolioCard
              title="Office remodeling in Hollywood Hills"
              subTitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque esse hic impedit quae repudiandae ullam."
              typeOfWork="Design"
              backgroundImage={construction3}
            />
          </div>
        </div>
      </section>
    </div>
  );
};
