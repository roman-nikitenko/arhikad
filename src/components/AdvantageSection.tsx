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
        <h2 className="md:text-6xl text-5xl font-bold">Переваги співпраці <br/> з нашими експертами</h2>
        <ul className="pl-10">
          <li className="list-disc text-gray-500">Інноваційні дизайнерські рішення</li>
          <li className="list-disc text-gray-500">Комплексні послуги</li>
          <li className="list-disc text-gray-500">Фокус сталого розвитку</li>
          <li className="list-disc text-gray-500">Клієнт-орієнтований підхід</li>
        </ul>
      </div>
      <div className="h-[440px] md:w-[370px] group relative">
        <motion.div 
          className={`absolute border border-black size-full -z-10`}
          initial={{ opacity: 1 }}
          whileInView={{ x: -10, y: -10}}
          transition={{ duration: 0.7, delay: 0.25 }}
        />
        <img src={plan2} className="w-full h-full object-cover " alt=""/>
      </div>
    </motion.section>
  );
};
