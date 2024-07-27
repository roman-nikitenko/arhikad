import React from 'react';
import viber from '../assets/icons/viber.svg';
import telegram from '../assets/icons/telegram.svg';
import whatsapp from '../assets/icons/whatsapp.svg';
import { phoneNumber } from '../data.tsx';

type PhoneSectionType = {
  visible: "hidden"  | "visible";
  style?: string
}

export const PhoneSection: React.FC<PhoneSectionType> = ({ visible, style }) => {
  return (
    <div className={ `text-white md:flex md:gap-2 items-center ${style} ${visible}` }>
      <img src={viber} alt="" className="size-6"/>
      <img src={telegram} alt="" className="size-7"/>
      <img src={whatsapp} alt="" className="size-8"/>
      <a href="tel:+3806323412345">{phoneNumber}</a>
    </div>
  );
};
