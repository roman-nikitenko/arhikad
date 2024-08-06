import React from 'react';
import { SocialNetwork } from './SocialNetwork.tsx';
import instagram from '../assets/social/instagram.svg'
import facebook from '../assets/social/facebook.svg'
import twitter from '../assets/social/twitter.svg'
import email from '../assets/icons/email.svg';
import phone from '../assets/icons/phone.svg';
import point from '../assets/icons/point.svg';
import { Logo } from './Logo.tsx';
import { address, phoneNumber, slogan } from '../data.tsx';
import { Navigation } from './Navigation.tsx';



export const Footer: React.FC = () => {
  return (
    <div className="w-full max-w-screen-lg lg:px-0 px-4 m-auto pt-[100px] mb-10">
      {/*<div className="flex w-full items-center justify-between">*/}
      {/*  <h1 className="text-3xl font-bold">Subscribe Newsletter <br/> For Latest Updates</h1>*/}
      {/*  <div className="flex h-8">*/}
      {/*    <input className="border outline pl-3 outline-0 w-[300px] border-black " type='text'/>*/}
      {/*    <button className="bg-[var(--accent-color)] text-white px-2" >Subscribe</button>*/}
      {/*  </div>*/}
      {/*</div>*/}
      <div className="border-b-gray-300 border my-[35px]" />
      <div className="flex flex-col-reverse  lg:flex-row gap-7 lg:gap-0 lg:justify-between">
        <div className="flex flex-col gap-y-4 w-[300px]">
          <Logo />
          <p>{slogan}</p>
          <div className="flex gap-3">
            <SocialNetwork image={instagram} />
            <SocialNetwork image={facebook} />
            <SocialNetwork image={twitter} />
          </div>
        </div>
        <Navigation listStyle="flex-col text-emerald-700 gap-3" />
        <div className="flex flex-col gap-2">
          <div className="flex underline-text items-center gap-x-2 cursor-pointer">
            <img className="size-5" src={email} alt="contact"/>
            <a href="mailto:arhicadnv@ukr.net">arhicadnv@ukr.net</a>
          </div>
          <div className="flex items-center gap-x-2 cursor-pointer">
            <img className="size-5" src={phone} alt="contact"/>
            <a href="tel:+380980055404">{phoneNumber}</a>
          </div>
          <div className="flex items-center gap-x-2 cursor-pointer">
            <img className="size-5" src={point} alt="contact"/>
            <a target="_blank" href="https://www.google.com/maps/place/Vul.+Heroyiv+Maydanu,+15,+Bucha,+Kyivs'ka+oblast,+08292/@50.5519049,30.2141531,18z/data=!3m1!4b1!4m6!3m5!1s0x472b31b8c0de22a1:0xbd398d80c7ce2c99!8m2!3d50.5519049!4d30.215133!16s%2Fg%2F11vq9mn492?entry=ttu">{address}</a>
          </div>
          {/*<Contact contactTitle="arhicadnv@ukr.net" image={email} />*/}
          {/*<Contact contactTitle={phoneNumber} image={phone} />*/}
          {/*<Contact contactTitle={address} image={point} />*/}
        </div>
      </div>
    </div>
  );
};

