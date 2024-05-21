import React from 'react';

export const NavBar: React.FC = () => {
  return (
    <div className="py-4 md:px-10 2xl:px-0 flex items-center  max-w-screen-2xl m-auto justify-between">
      <div className="logo text-white flex text-3xl font-bold items-center">
        Arhi<p className="text-[color:var(--accent-color)]">kad</p>
      </div>
      <div className="navbar text-white">
        <ul className="flex gap-10">
          <li className="nav-link">Home</li>
          <li className="nav-link">About</li>
          <li className="nav-link">Services</li>
          <li className="nav-link">Projects</li>
        </ul>
      </div>
    </div>
    
  );
};
