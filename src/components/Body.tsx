import React from 'react';
import plan from '../assets/plan3.jpg';
import plan2 from '../assets/plan2.jpg'
import { Button } from './Button.tsx';
import { SectionSubTitle } from './SectionSubTitle.tsx';
import { ServiceCard } from './ServiceCard.tsx';
import develop from '../assets/develop.jpg';
import develop1 from '../assets/develop2.avif';
import develop2 from '../assets/constraction.jpg';

export const Body: React.FC = () => {
  return (
    <div className="max-w-screen-2xl m-auto flex flex-col items-center gap-y-[100px]">
      <section className="section-md">
        <div className="h-[440px] relative after:border after:border-emerald-700 after:z-[-1] after:w-[130px] after:h-[130px] after:absolute after:top-[-10px] after:left-[-10px]">
          <img src={plan} className="w-full h-full" alt='plan image'/>
          <div className="absolute top-0 w-0 h-0 
          border-t-[55px] border-t-white
          border-r-[55px] border-r-transparent
          "/>
        </div>
        <div className="w-[500px] flex flex-col gap-7 justify-center">
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
      <section className="section-md">
        <div className="flex flex-col gap-5 pt-6">
          <SectionSubTitle title="why us" />
          <h2 className="text-6xl font-bold">Made By Builders <br/> Fro Builders</h2>
          <ul className="">
            <li className="sub-text after:after:content-['*'] after:w-4 after:h-4 after:text-emerald-700">Lorem ipsum dolor sit amet.</li>
            <li className="sub-text after:contain-content-['.']">Lorem ipsum dolor sit amet.</li>
            <li className="sub-text after:contain-content-['.']">Lorem ipsum dolor.</li>
            <li className="sub-text after:contain-content-['.']">Lorem ipsum dolor sit amet.</li>
          </ul>
          <div>
            <Button title="See more" onClick={() => {}} />
          </div>
        </div>
        <div className="h-[440px] w-[370px] relative before:border before:border-black before:z-[-1] before:absolute before:w-full before:h-full before:left-[-26px] before:top-[-26px]">
          <img src={plan2} className="w-full h-full object-cover " alt=""/>
        </div>
      </section>
      <section className="section-md">
        <div className="w-full flex flex-col gap-y-8">
          <SectionSubTitle title="cur services" />
          <h2 className="text-6xl font-bold">Services We <br/>  Provide</h2>
          <div className="flex gap-3 justify-between h-[330px]">
            <ServiceCard title="Residential Construction" image={develop} />
            <ServiceCard title="Interior Design" image={develop1} />
            <ServiceCard title="Interior Fitt-Out" image={develop2} />
          </div>
        </div>
      </section>
    </div>
  );
};
