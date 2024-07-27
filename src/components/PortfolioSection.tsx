import React, { useContext, useState } from 'react';
import { portfolioList } from '../data.tsx';
import { PortfolioCard } from './PortfolioCard.tsx';
import { PortfolioCardType } from '../types/portfolio.ts';
import { Modal } from './Modal.tsx';
import { Carousel } from './Carousel.tsx';
import { ModalContext } from '../context/Context.tsx';

export const PortfolioSection: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
  const [activePortfolio, setActivePortfolio] = useState<PortfolioCardType | null>(null)
  const [current, setCurrent] = useState<number>(0)
  
  const { projectsSectionRef } = useContext(ModalContext)

  const clickCardHandler = (card: PortfolioCardType) => {
    setModalIsOpen(true)
    setActivePortfolio(card)
  }
  
  const closeHandler = () => {
    setModalIsOpen(false)
    setCurrent(0)
  }
  
  return (
    <>
      <Modal openModal={modalIsOpen} closeModal={closeHandler} >
        <Carousel current={current} setCurrent={setCurrent} images={activePortfolio?.listOfWorks} />
      </Modal>
      <section ref={projectsSectionRef} className="section-md w-full scroll-mt-20">
        <div className="flex flex-col gap-y-10 xl:overflow-hidden overflow-x-auto">
          <div className="flex md:px-0 px-4 flex-col gap-y-3">
            <p className="text-emerald-700 uppercase">/минулі проєкти</p>
            <h2 className="text-3xl font-bold">
              Результати наших робіт <br/> не потребують пояснень
            </h2>
          </div>
          <div className="flex overflow-x-auto gap-x-6">
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
