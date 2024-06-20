import React, { FC, createContext, useState } from 'react';


type initialModalContextType = {
  isOpenModal: boolean,
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

const initialModalContext: initialModalContextType = {
  isOpenModal: false,
  setIsOpenModal: () => {}
}

type ModalContextProps = {
  children: React.ReactNode
}

export const ModalContext = createContext<initialModalContextType>(initialModalContext)

export const ModalContextProvider: FC<ModalContextProps> = ({ children }) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  
  const value = {
    isOpenModal: isOpenModal,
    setIsOpenModal: setIsOpenModal
  }
  
  return (
    <ModalContext.Provider value={value}>
      {children}
    </ModalContext.Provider>
  );
};
