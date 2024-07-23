import { FC, ReactNode, useEffect } from 'react';
import { motion } from 'framer-motion'

type ModalProps = {
  children: ReactNode;
  openModal: boolean;
  closeModal: () => void;
}

export const Modal: FC<ModalProps> = ({ children, closeModal, openModal }) => {

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = openModal ? 'hidden' : 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  },[openModal])
  
  const visible = {
    opacity: 1,
    display: "flex"
  };
  const hide = {
    opacity: 0,
    transitionEnd: {
      display: "none"
    }
  };
  
  return (
    <motion.div
      // ${openModal ? " overflow-hidden animate-fade-in" : "animate-fade-out hidden"}
      animate={openModal ? visible : hide}
      initial={hide}
      onMouseDown={closeModal} 
      className="flex justify-center items-center fixed bg-black inset-0 z-50 bg-opacity-60 backdrop-blur-sm"
    >
      <div 
        onMouseDown={(e) => e.stopPropagation() } 
        className="flex m-auto lg:max-w-[80%] px-2"
      >
        {children}
      </div>
    </motion.div>
  );
};
