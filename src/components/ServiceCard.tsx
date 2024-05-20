import React from 'react';

type ServiceCardProps = {
  image: string;
  title: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ image, title }) => {
  const finalImage = image.slice(5);
  
  return (
    <div className={`bg-[url('${finalImage}')] relative bg-cover size-full flex items-end`} >
      <div className="absolute size-full bg-gradient-to-t from-black opacity-70 to-transparent"></div>
      <p className="title text-white text-3xl ml-6 mb-10 z-10 font-normal">{title}</p>
    </div>
  );
};
