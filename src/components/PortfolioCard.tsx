import React from 'react';
import arrow from '../assets/icons/arrow-right.svg';

type typeWork = 'Construction' | 'Design' | 'Remodeling';

type PortfolioCardProps = {
  title: string;
  subTitle: string;
  typeOfWork: typeWork;
  backgroundImage: string;
}

export const PortfolioCard: React.FC<PortfolioCardProps> = ({ title, subTitle, typeOfWork, backgroundImage }) => {
  return (
    <div className="w-[300px] h-[330px] group relative cursor-pointer overflow-hidden">
      <div className="absolute flex items-end p-4 z-30 size-full">
        <div className="text-white">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-xs">{subTitle}</p>
          <div className="border-b border-b-gray-500 mt-5 mb-3" />
          <div className="flex justify-between items-center">
            <div className="">
              <p className="text-xs">{typeOfWork}</p>
            </div>
            <img src={arrow} alt="arrow right" className="size-4 -translate-x-3 group-hover:translate-x-0 transition"/>
          </div>
        </div>
      </div>
      <div className="absolute size-full z-20 bg-gradient-to-t from-black to-transparent opacity-70 p-6" />
      <img src={backgroundImage} className="size-full object-cover z-10 group-hover:scale-110 transition" alt={`${title} image`} />
    </div>
  );
};
