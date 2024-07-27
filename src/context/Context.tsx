import React, { FC, createContext, useState, useRef } from 'react';


type initialModalContextType = {
  isOpenModal: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  aboutSectionRef: React.RefObject<HTMLDivElement> | null;
  servicesSectionRef: React.RefObject<HTMLDivElement> | null;
  projectsSectionRef: React.RefObject<HTMLDivElement> | null;
}

const initialModalContext: initialModalContextType = {
  isOpenModal: false,
  setIsOpenModal: () => {},
  aboutSectionRef: null,
  servicesSectionRef: null,
  projectsSectionRef: null,
}

type ModalContextProps = {
  children: React.ReactNode
}

export const ModalContext = createContext<initialModalContextType>(initialModalContext)

export const ModalContextProvider: FC<ModalContextProps> = ({ children }) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const servicesSectionRef = useRef<HTMLDivElement>(null);
  const projectsSectionRef = useRef<HTMLDivElement>(null);
  
  const value = {
    isOpenModal: isOpenModal,
    setIsOpenModal: setIsOpenModal,
    aboutSectionRef: aboutSectionRef,
    servicesSectionRef: servicesSectionRef,
    projectsSectionRef: projectsSectionRef,
  }
  
  return (
    <ModalContext.Provider value={value}>
      {children}
    </ModalContext.Provider>
  );
};
