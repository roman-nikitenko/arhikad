import React, { useContext } from 'react';
import plan from '../assets/plan3.jpg';
import { motion } from 'framer-motion'
import { ModalContext } from '../context/Context.tsx';

export const AboutUsSection: React.FC = () => {
  const transitionDelay = {
    delay: 0.75,
    duration: 0.7
  }
  
  const { aboutSectionRef } = useContext(ModalContext)
  
  return (
    <section ref={aboutSectionRef} className="section-md md:px-0 md:py-3 px-4 ">
      <motion.div 
        className="h-[440px] w-[400px] bg-cover  relative"
        style={{ backgroundImage: `url(${plan})` }}
        initial={{ opacity: 0, x: -75 }}
        whileInView={{ opacity: 1, x: 0}}
        transition={{ duration: 0.7, delay: 0.25 }}
      >
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
        className=" md:w-[500px] w-full flex flex-col gap-7 justify-center "
        initial={{ opacity: 0, x: 75 }}
        whileInView={{ opacity: 1, x: 0}}
        transition={{ duration: 0.7, delay: 0.25 }}
      >
        <p className="text-emerald-700 uppercase">/Про нас</p>
        <p className="md:text-base w-full text-xs">Ласкаво просимо до Архікад-НВ, де інновації зустрічаються з традиціями у світі архітектури та землевпорядкування. З пристрастю до роботи та прагненням вдосконалюватися ми створюємо простори які надихають. І довговічні вже понад 12 років років. Наша подорож почалася з простого бачення: створити комфортне, яке покращить людський .</p>
        <div className="flex md:justify-between md:flex-row flex-col w-full items-center gap-5 ">
          <div >
            <h3 className="bold-text"><span className="accent-text">+</span>300</h3>
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

