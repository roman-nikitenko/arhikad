import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion'
import useNoScroll from '../hooks/NoScroll.ts';

type ModalProps = {
  children: ReactNode;
  openModal: boolean;
  closeModal: () => void;
}

export const Modal: FC<ModalProps> = ({ children, closeModal, openModal }) => {
  
  useNoScroll(openModal);
  
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
