import React from 'react';

export const NavBar: React.FC = () => {
  return (
    <div className="py-4 flex items-center justify-between">
      <div className="logo text-white flex text-3xl font-bold items-center">
        Arhi<p className="text-emerald-600">kad</p>
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
