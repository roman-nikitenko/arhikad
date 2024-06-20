import React, { useState } from 'react';
import { portfolioList } from '../data.tsx';
import { PortfolioCard } from './PortfolioCard.tsx';
import { PortfolioCardType } from '../types/portfolio.ts';
import { Modal } from './Modal.tsx';
import { Carousel } from './Carousel.tsx';

type PortfolioSectionProps = {
  projectsSectionRef: React.RefObject<HTMLDivElement>;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ projectsSectionRef }) => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
  const [activePortfolio, setActivePortfolio] = useState<PortfolioCardType | null>(null)

  const clickCardHandler = (card: PortfolioCardType) => {
    setModalIsOpen(true)
    setActivePortfolio(card)
  }
  
  return (
    <>
      <Modal openModal={modalIsOpen} closeModal={() => setModalIsOpen(false)} >
        <Carousel images={activePortfolio?.listOfWorks} />
      </Modal>
      <section ref={projectsSectionRef} className="section-md scroll-mt-20">
        <div className="flex flex-col gap-y-10">
          <div className="flex flex-col gap-y-3">
            <p className="text-emerald-700 uppercase">/минулі проєкти</p>
            <h2 className="text-3xl font-bold">
              Результати наших робіт <br/> не потребують пояснень
            </h2>
          </div>
          <div className="flex gap-x-6">
            {portfolioList.map(card => (
              <div onClick={() => clickCardHandler(card)}>
                <PortfolioCard
                  title={card.title}
                  typeOfWork={card.typeOfWork}
                  backgroundImage={card.backgroundImage}
                  subTitle={card.subTitle}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
