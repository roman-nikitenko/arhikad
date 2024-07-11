import React, { useEffect, useRef } from 'react';
import { SectionSubTitle } from './SectionSubTitle.tsx';
import serviceImage1 from '../assets/services/designAndPlane-transformed.jpeg';
import serviceImage2 from '../assets/services/ProjectManagement-transformed.jpeg';
import serviceImage3 from '../assets/services/constructionDocumentation-transformed.jpeg';
import { motion, useInView } from 'framer-motion'

type ServicesSectionProps = {
  servicesSectionRef: React.RefObject<HTMLDivElement>;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ servicesSectionRef }) => {
  const ref = useRef(null);
  const isInView = useInView(ref)
  
  useEffect(() => {
    if (isInView) {
      console.log(isInView)
    }
  }, [isInView])
  
  const services = [
    {
      id: 1,
      title: `Сфера архетектури`,
      backGroundImage: serviceImage1
    },
    {
      id: 2,
      title: "Землевпорядні роботи",
      backGroundImage: serviceImage2
    },
    {
      id: 3,
      title: "БТІ",
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
    <section ref={servicesSectionRef} className="section-md md:px-0 px-4 scroll-mt-28">
      <div className="w-full flex flex-col gap-y-8">
        <SectionSubTitle title="основні послуги" />
        <h2 className="text-6xl font-bold">Послуги Ми <br/>Надаємо</h2>
        <motion.div
          ref={ref}
          variants={listVarian}
          initial="initial"
          animate={isInView ? "inView" : ""}
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
              <p className="title text-white text-3xl px-6 mb-10 z-10 font-normal">{service.title}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
