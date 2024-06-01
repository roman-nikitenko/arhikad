import React from 'react';
import { typeWork, PortfolioCard } from './PortfolioCard.tsx';
import construction1 from '../assets/portfolio/constraction1.jpg';
import construction2 from '../assets/portfolio/constraction2.jpg';
import construction3 from '../assets/portfolio/constraction3.jpg';

type PortfolioCard = {
  id: string;
  title: string;
  subTitle: string;
  typeOfWork: typeWork;
  backgroundImage: string;
}

type PortfolioSectionProps = {
  projectsSectionRef: React.RefObject<HTMLDivElement>;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ projectsSectionRef }) => {
  const portfolioCards: PortfolioCard[] = [
    {
      id: "1",
      title: "Building constracrions in Bucha",
      subTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque esse hic impedit quae repudiandae ullam.",
      typeOfWork: typeWork.construction,
      backgroundImage: construction1,
    },
    {
      id: "2",
      title: "Kitchen remodeling in Hollywood Hills",
      subTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque esse hic impedit quae repudiandae ullam.",
      typeOfWork: typeWork.design,
      backgroundImage: construction2,
    },
    {
      id: "3",
      title: "Office remodeling in Hollywood Hills",
      subTitle: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque esse hic impedit quae repudiandae ullam.",
      typeOfWork: typeWork.remodeling,
      backgroundImage: construction3,
    },
  ]

  const clickCardHandler = (card: PortfolioCard) => {
    console.log(card.title)
  }
  
  return (
    <section ref={projectsSectionRef} className="section-md scroll-mt-20">
      <div className="flex flex-col gap-y-10">
        <div className="flex flex-col gap-y-3">
          <p className="text-emerald-700 uppercase">/минулі проєкти</p>
          <h2 className="text-3xl font-bold">
            Результати наших робіт <br/> не потребують пояснень
          </h2>
        </div>
        <div className="flex gap-x-6">
          {portfolioCards.map(card => (
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
  );
};
