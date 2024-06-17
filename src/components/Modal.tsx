import { FC, ReactNode } from 'react';

type ModalProps = {
  children: ReactNode;
  openModal: boolean;
  closeModal: () => void;
}

export const Modal: FC<ModalProps> = ({ children, closeModal, openModal }) => {
  return (
    <div
      onMouseDown={closeModal} 
      className={`flex justify-center items-center ${openModal ? "fixed bg-black left-0 top-0 right-0 bottom-0 z-50 bg-opacity-60 overflow-hidden animate-fade-in" : "fixed bg-black left-0 top-0 right-0 bottom-0 z-50 bg-opacity-60 overflow-hidden animate-fade-out"}`}
    >
      <div 
        onMouseDown={(e) => e.stopPropagation() } 
        className={`${openModal ? 'animate-drop' : 'animate-drop-up'} flex justify-center items-center m-auto bg-white h-fit w-fit p-5 rounded-xl`}
      >
        {children}
      </div>
    </div>
  );
};
