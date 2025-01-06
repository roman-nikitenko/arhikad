import React from 'react';
import arrow from '../assets/icons/arrow-right.svg';
import { typeWork } from '../types/portfolio.ts';
import { constructionSVG, designSVG, remodelingSVG } from '../assets/iconsSVG.tsx';

type PortfolioCardProps = {
  title: string;
  subTitle: string;
  typeOfWork: typeWork;
  backgroundImage: string;
  onClick?: () => void;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({ title, typeOfWork, backgroundImage, onClick }) => {
  
  const correctIconWork = (type: string) => {
    const lowerCaseType = type.toLowerCase();
    
    switch (lowerCaseType) {
      case "будівництво":
        return constructionSVG;
      case "дизайн":
        return designSVG;
      case "реконструкція":
        return remodelingSVG;
    }
  } 
  
  
  return (
    <div onClick={onClick} className="w-[300px] h-[330px] group relative cursor-pointer overflow-hidden">
      <div className="absolute flex items-end p-4 z-30 size-full">
        <div className="text-[var(--light)]">
          <h3 className="text-xl font-bold">{title}</h3>
          <div className="border-b border-b-gray-500 mt-5 mb-3" />
          <div className="flex justify-between items-center">
            <div className="flex gap-x-2 items-center">
              <div className="size-5">{ correctIconWork(typeOfWork) }</div>
              <p className="text-xs">{typeOfWork}</p>
            </div>
            <img loading="lazy" src={arrow} alt="arrow right" className="size-4 -translate-x-3 group-hover:translate-x-0 transition"/>
          </div>
        </div>
      </div>
      <div className="absolute size-full z-20 bg-gradient-to-t from-black to-transparent opacity-70 p-6" />
      <img loading="lazy" src={backgroundImage} className="size-full object-cover bg-top z-10 group-hover:scale-110 transition" alt={`${title} image`} />
    </div>
  );
};
