import React from 'react';

type ContactProp = {
  image: string;
  contactTitle: string;
}

export const Contact: React.FC<ContactProp> = ({ image, contactTitle }) => {
  return (
    <div className="flex items-center gap-x-2 cursor-pointer">
      <img className="size-5" src={image} alt="contact"/>
      <p>{contactTitle}</p>
    </div>
  );
};
