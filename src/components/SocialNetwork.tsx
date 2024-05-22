import React from 'react';

type SocialNetworkProps = {
  image: string;
}

export const SocialNetwork: React.FC<SocialNetworkProps> = ({ image }) => {
  return (
    <div className="bg-[var(--accent-color)] flex justify-center items-center size-10">
      <img src={image} className="size-6" alt="social media"/>
    </div>
  );
};
