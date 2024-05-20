import React from 'react';

type SocialNetworkProps = {
  image: string;
}

export const SocialNetwork: React.FC<SocialNetworkProps> = ({ image }) => {
  return (
    <div className="bg-emerald-700 flex justify-center items-center size-10">
      <img src={image} className="size-7" alt="social media"/>
    </div>
  );
};
