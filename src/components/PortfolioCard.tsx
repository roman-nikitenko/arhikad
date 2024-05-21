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

  const remodelingSVG = <svg fill="#FFFFFF" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>home-building</title> <path d="M30 1.25h-16c-0.414 0-0.75 0.336-0.75 0.75v0 16c0 0.414 0.336 0.75 0.75 0.75s0.75-0.336 0.75-0.75v0-15.25h14.5v26.5h-11.25c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h12c0.414-0 0.75-0.336 0.75-0.75v0-28c-0-0.414-0.336-0.75-0.75-0.75v0zM17 8.75h3c0.414-0 0.75-0.336 0.75-0.75v0-3c-0-0.414-0.336-0.75-0.75-0.75h-3c-0.414 0-0.75 0.336-0.75 0.75v0 3c0 0.414 0.336 0.75 0.75 0.75v0zM17.75 5.75h1.5v1.5h-1.5zM24 8.75h3c0.414-0 0.75-0.336 0.75-0.75v0-3c-0-0.414-0.336-0.75-0.75-0.75h-3c-0.414 0-0.75 0.336-0.75 0.75v0 3c0 0.414 0.336 0.75 0.75 0.75v0zM24.75 5.75h1.5v1.5h-1.5zM16.25 14c0 0.414 0.336 0.75 0.75 0.75h3c0.414-0 0.75-0.336 0.75-0.75v0-3c-0-0.414-0.336-0.75-0.75-0.75h-3c-0.414 0-0.75 0.336-0.75 0.75v0zM17.75 11.75h1.5v1.5h-1.5zM23.25 14c0 0.414 0.336 0.75 0.75 0.75h3c0.414-0 0.75-0.336 0.75-0.75v0-3c-0-0.414-0.336-0.75-0.75-0.75h-3c-0.414 0-0.75 0.336-0.75 0.75v0zM24.75 11.75h1.5v1.5h-1.5zM20.75 20v-3c-0-0.414-0.336-0.75-0.75-0.75h-3c-0.414 0-0.75 0.336-0.75 0.75v0 3c0 0.414 0.336 0.75 0.75 0.75h3c0.414-0 0.75-0.336 0.75-0.75v0zM19.25 19.25h-1.5v-1.5h1.5zM23.25 20c0 0.414 0.336 0.75 0.75 0.75h3c0.414-0 0.75-0.336 0.75-0.75v0-3c-0-0.414-0.336-0.75-0.75-0.75h-3c-0.414 0-0.75 0.336-0.75 0.75v0zM24.75 17.75h1.5v1.5h-1.5zM8.988 16.431c-0.13-0.112-0.301-0.18-0.488-0.18s-0.358 0.068-0.489 0.181l0.001-0.001-6.5 5.571c-0.161 0.139-0.262 0.343-0.262 0.57v0 7.428c0 0.414 0.336 0.75 0.75 0.75h13c0.414-0 0.75-0.336 0.75-0.75v0-7.428c-0-0.228-0.101-0.431-0.261-0.57l-0.001-0.001zM6.929 29.25v-2.109c0.001-0.827 0.67-1.497 1.497-1.498h0.149c0.827 0.001 1.496 0.671 1.497 1.498v2.109zM14.25 29.25h-2.679v-2.109c-0.002-1.655-1.343-2.995-2.997-2.998h-0.149c-1.655 0.003-2.995 1.343-2.997 2.998v2.11h-2.679v-6.332l5.75-4.93 5.75 4.93z"></path> </g></svg>;
  const constructionSVG = <svg fill="#FFFFFF" viewBox="0 0 100 100" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/><g id="SVGRepo_iconCarrier"> <g id="jackhammer"/> <g id="drilling_machine"/> <g id="hammer"/> <g id="measuring_tape"/> <g id="wrench"/> <g id="saw"/> <g id="building"/> <g id="wall"> <path d="M95,43H81c-0.6,0-1,0.4-1,1v11H64H51V44c0-0.6-0.4-1-1-1H37V33h13c0.6,0,1-0.4,1-1V20c0-0.6-0.4-1-1-1H19H5 c-0.6,0-1,0.4-1,1v12v12v12v12v12c0,0.6,0.4,1,1,1h14h31h31h14c0.6,0,1-0.4,1-1V68V56V44C96,43.4,95.6,43,95,43z M81,67H65V57h16 h13v10H81z M50,67H37V57h13h13v10H50z M19,67H6V57h13h16v10H19z M18,55H6V45h12V55z M82,45h12v10H82V45z M49,55H36H20V45h16h13V55z M35,43H19H6V33h13h16V43z M49,31H36H20V21h29V31z M6,21h12v10H6V21z M6,69h12v10H6V69z M20,69h16h13v10H20V69z M51,69h13h16v10H51 V69z M94,79H82V69h12V79z"/> </g> <g id="crane"/> <g id="barrier_sign"/> <g id="concept"/> <g id="shovel"/> <g id="architecture"/> <g id="safety_helmet"/> <g id="worker"/> <g id="teamwork"/> <g id="roller_brush"/> <g id="designs"/> <g id="trolley"/> <g id="pick_axe"/> </g></svg>;
  const designSVG = <svg fill="#FFFFFF" viewBox="0 0 36 36" version="1.1" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="SVGRepo_bgCarrier" stroke-width="0"/><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/><g id="SVGRepo_iconCarrier"><title>design-line</title><polygon className="clr-i-outline clr-i-outline-path-1" points="9 17.41 9 27 18.59 27 16.59 25 11 25 11 19.41 9 17.41"/><path className="clr-i-outline clr-i-outline-path-2" d="M34.87,32.29,32,29.38V32H4V27.85H6v-1.6H4V19.6H6V18H4V11.6H6V10H4V4.41L19.94,20.26V17.44L3.71,1.29A1,1,0,0,0,2,2V33a1,1,0,0,0,1,1H34.16a1,1,0,0,0,.71-1.71Z"/><path className="clr-i-outline clr-i-outline-path-3" d="M24,30h4a2,2,0,0,0,2-2V8.7L27.7,4.47a2,2,0,0,0-1.76-1h0a2,2,0,0,0-1.76,1.08L22,8.72V28A2,2,0,0,0,24,30ZM24,9.2l1.94-3.77L28,9.21V24H24Zm0,16.43h4v2.44H24Z"/><rect x="0" y="0" width="36" height="36" fill-opacity="0"/></g></svg>;
  
  const correctIconWork = (type: string) => {
    const lowerCaseType = type.toLowerCase();
    
    switch (lowerCaseType) {
      case "construction":
        return constructionSVG;
      case "design":
        return designSVG;
      case "remodeling":
        return remodelingSVG;
    }
  } 
  
  
  return (
    <div className="w-[300px] h-[330px] group relative cursor-pointer overflow-hidden">
      <div className="absolute flex items-end p-4 z-30 size-full">
        <div className="text-white">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-xs">{subTitle}</p>
          <div className="border-b border-b-gray-500 mt-5 mb-3" />
          <div className="flex justify-between items-center">
            <div className="flex gap-x-2 items-center">
              <div className="size-5">{ correctIconWork(typeOfWork) }</div>
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
