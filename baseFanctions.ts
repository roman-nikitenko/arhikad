import React from 'react';

export const scrollToTop = () => {
  window.scroll({
    top: 0,
    behavior: 'smooth',
  })
}

export const moveToSection = (refSection:React.RefObject<HTMLDivElement>) => {
  refSection.current?.scrollIntoView({
    inline: "nearest",
    behavior: "smooth",
  })
}