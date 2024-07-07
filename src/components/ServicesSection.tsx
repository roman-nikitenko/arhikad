import React from 'react';
import { SectionSubTitle } from './SectionSubTitle.tsx';
import serviceImage1 from '../assets/develop.jpg';
import serviceImage2 from '../assets/develop2.jpg';
import serviceImage3 from '../assets/constraction.jpg';
import {motion} from 'framer-motion'

export const ServicesSection: React.FC = () => {
  const services = [
    {
      id: 1,
      title: "Residential Construction",
      backGroundImage: serviceImage1
    },
    {
      id: 2,
      title: "Interior Design",
      backGroundImage: serviceImage2
    },
    {
      id: 3,
      title: "Interior Fitt-Out",
      backGroundImage: serviceImage3
    },
  ]
  
  const listVarian = {
    
    inView: {
      transition: {
        staggerChildren: 0.4
      }
    }
  }
  
  const listVarianItem = {
    initial: {
      opacity: 0,
      x: 70,
    },
    inView: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
      }
    }
  }
  
  return (
    <section className="section-md md:px-0 px-4 scroll-mt-28">
      <div className="w-full flex flex-col gap-y-8">
        <SectionSubTitle title="основні послуги" />
        <h2 className="text-6xl font-bold">Послуги Ми <br/>Надаємо</h2>
        <motion.div
          variants={listVarian}
          initial="initial"
          animate="inView"
          // transition={{ duration: 0.7, delay: 0.25 }}
          className="flex flex-col md:flex-row gap-3 md:justify-between md:h-[430px] h-[750px]"
        >
          {services.map(service => (
            <motion.div
              variants={listVarianItem}
              key={service.id}
              style={{ backgroundImage: `url(${service.backGroundImage})` }} 
              className={` relative bg-cover size-full flex items-end`} 
            >
              <div className="absolute size-full bg-gradient-to-t from-black opacity-70 to-transparent" />
              <p className="title text-white text-3xl ml-6 mb-10 z-10 font-normal">{service.title}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
