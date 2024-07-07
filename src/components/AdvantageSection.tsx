import React from 'react';
import { motion } from 'framer-motion';
import { SectionSubTitle } from './SectionSubTitle.tsx';
import plan2 from '../assets/plan2.jpg';

export const AdvantageSection: React.FC = () => {
  return (
    <motion.section
      className="section-md md:px-0 px-4"
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0}}
      transition={{ duration: 0.7, delay: 0.25 }}
    >
      <div className="flex flex-col gap-5 md:mb-0 mb-8 pt-6">
        <SectionSubTitle title="чому ми" />
        <h2 className="text-6xl font-bold">Made By Builders <br/> Fro Builders</h2>
        <ul className="">
          <li className="">Lorem ipsum dolor sit amet.</li>
          <li className="">Lorem ipsum dolor sit amet.</li>
          <li className="">Lorem ipsum dolor.</li>
          <li className="">Lorem ipsum dolor sit amet.</li>
        </ul>
      </div>
      <div className="h-[440px] md:w-[370px] group relative">
        <motion.div 
          className={`absolute border border-black size-full -z-10`}
          initial={{ opacity: 1, x: 0, y: 0 }}
          whileInView={{ x: -20, y: -20}}
          transition={{ duration: 0.7, delay: 0.25 }}
        />
        <img src={plan2} className="w-full h-full object-cover " alt=""/>
      </div>
    </motion.section>
  );
};
