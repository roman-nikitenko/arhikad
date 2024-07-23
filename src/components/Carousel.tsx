import React from 'react';
import { arrowLeft, arrRight } from '../assets/iconsSVG.tsx';

type CarouselProps = {
  images: string[] | undefined;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
  current: number;
}

export const Carousel: React.FC<CarouselProps> = ({ images = [], setCurrent, current }) => {
  
  const prev = () => {
    setCurrent(current => current === 0 ? images.length - 1 : current - 1)
  }

  const next = () => {
    setCurrent(current => current === images.length - 1 ? 0 : current + 1)
  }
  
  return (
    <div className="relative flex gap-4 overflow-hidden z-[70]">
      <div className="absolute size-full flex items-center justify-between p-3">
        <button onClick={prev}  className="carousel-button">
          <div className="size-9">
            {arrowLeft}
          </div>
        </button>
        <button onClick={next} className="carousel-button">
          <div className="size-9">
            {arrRight}
          </div>
        </button>
      </div>
      <div className="flex transition-transform ease-out duration-700" style={{ transform: `translateX(-${current * 100}%)` }}>
        {images.map(image => <img src={image} alt="Image" />)}
      </div>
      <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-4">
        {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
        {images.map((_, index) => (
          <div onClick={() => setCurrent(index)} className={`bg-white rounded-full transition-all duration-150 size-2.5 cursor-pointer hover:scale-[1.4] ${index === current ? ' scale-[1.4]' : 'bg-opacity-50'}`} />
        ))}
      </div>
    </div>
  );
};
