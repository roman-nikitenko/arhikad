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
      className={`flex justify-center items-center fixed bg-black inset-0 z-50 bg-opacity-60 backdrop-blur-sm ${openModal ? " overflow-hidden animate-fade-in" : "animate-fade-out hidden"}`}
    >
      <div 
        onMouseDown={(e) => e.stopPropagation() } 
        className="flex m-auto lg:max-w-[80%] px-2"
      >
        {children}
      </div>
    </div>
  );
};
