import React from 'react';
import plan from '../assets/plan3.jpg';
import { motion } from 'framer-motion'

type AboutUsSectionProps = {
  aboutSectionRef: React.RefObject<HTMLDivElement>;
}

export const AboutUsSection: React.FC<AboutUsSectionProps> = ({ aboutSectionRef }) => {
  const transitionDelay = {
    delay: 0.75,
    duration: 0.7
  }
  
  return (
    <section ref={aboutSectionRef} className="section-md md:px-0 px-4 md:p-0 py-3 scroll-mt-20">
      <motion.div 
        className="h-[440px] relative "
        initial={{ opacity: 0, x: -75 }}
        whileInView={{ opacity: 1, x: 0}}
        transition={{ duration: 0.7, delay: 0.25 }}
      >
        <img src={plan} className="w-full z-0 h-full" alt='plan image'/>
        <motion.div
          className={`absolute top-0 left-0 -z-10`}
          initial={{ opacity: 1, x: 0, y: 0}}
          whileInView={{ opacity: 1, x: -10, y: -10, transition: transitionDelay}}
        >
          <div className="size-[130px] border border-[var(--accent-color)]" />
        </motion.div>
        <motion.div
          className={`absolute z-20 top-0`}
          initial={{ opacity: 1, x: -30, y: -30 }}
          whileInView={{ opacity: 1, x: 0, y: 0}}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          <div className="w-0 h-0 transform
                    border-t-[55px] border-t-[var(--background-color)]
                    border-r-[55px] border-r-transparent" />
        </motion.div>
      </motion.div>
      <motion.div
        id="aboutSectionRef" 
        className=" md:w-[500px] w-full flex flex-col gap-7 justify-center scroll-mt-28"
        initial={{ opacity: 0, x: 75 }}
        whileInView={{ opacity: 1, x: 0}}
        transition={{ duration: 0.7, delay: 0.25 }}
      >
        <p className="text-emerald-700 uppercase">/Про нас</p>
        <h2 className="text-3xl font-bold">A group of reliability and expertise contractors</h2>
        <p className="md:text-base w-full text-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque consequatur corporis deleniti dicta dolor dolorem doloribus ducimus earum est ex explicabo fuga, impedit ipsum, nostrum officiis tempora unde vel voluptatum?</p>
        <div className="flex md:justify-between md:flex-row flex-col w-full items-center gap-5 ">
          <div >
            <h3 className="bold-text"><span className="accent-text">+</span>350</h3>
            <SubTextAnimation>Виконані проекти</SubTextAnimation>
          </div>
          <div>
            <h3 className="bold-text">12<span className="accent-text">Р</span></h3>
            <SubTextAnimation>Досвід</SubTextAnimation>
          </div>
          <div>
            <h3 className="bold-text"><span className="accent-text">+</span>400</h3>
            <SubTextAnimation>Задоволені клієнти</SubTextAnimation>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const SubTextAnimation: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.p initial={{ opacity: 0, y: -15 }} whileInView={{ opacity: 1, y: 0, transition:{ delay: 0.75, duration: 0.7 } }} className="sub-text">
      {children}
    </motion.p>
  );
};

