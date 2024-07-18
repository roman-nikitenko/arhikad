import React from 'react';
import { SocialNetwork } from './SocialNetwork.tsx';
import instagram from '../assets/social/instagram.svg'
import facebook from '../assets/social/facebook.svg'
import twitter from '../assets/social/twitter.svg'
import { Contact } from './Contact.tsx';
import email from '../assets/icons/email.svg';
import phone from '../assets/icons/phone.svg';
import point from '../assets/icons/point.svg';
import { Logo } from './Logo.tsx';
import { address, phoneNumber, slogan } from '../data.tsx';



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
      <div className="flex flex-col-reverse lg:flex-row gap-7 lg:gap-0 lg:justify-between">
        <div className="flex flex-col gap-y-4 w-[300px]">
          <Logo />
          <p>{slogan}</p>
          <div className="flex gap-3">
            <SocialNetwork image={instagram} />
            <SocialNetwork image={facebook} />
            <SocialNetwork image={twitter} />
          </div>
        </div>
        <div className="">
          <ul className="flex flex-col gap-y-4">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <Contact contactTitle="arhicadnv@ukr.net" image={email} />
          <Contact contactTitle={phoneNumber} image={phone} />
          <Contact contactTitle={address} image={point} />
        </div>
      </div>
    </div>
  );
};

