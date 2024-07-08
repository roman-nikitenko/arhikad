import React, { useContext } from 'react';
import { Button } from './Button.tsx';
import { Modal } from './Modal.tsx';
import { Form } from './Form.tsx';
import { ModalContext } from '../context/Context.tsx';
import questionBG from '../assets/questionBG2.jpeg'

export const QuestionSection: React.FC = () => {
  const { isOpenModal, setIsOpenModal } = useContext(ModalContext)
  
  return (
    <>
      <Modal openModal={isOpenModal} closeModal={() => setIsOpenModal(false)} >
        <div className="bg-white flex p-5">
          <Form />
        </div>
      </Modal>

      <section className="overflow-hidden relative max-w-screen-2xl m-auto w-full">
        <div style={{ backgroundImage: `url(${questionBG})` }} className="size-full bg-cover bg-center">
          <div className="size-full md:px-0 px-4 bg-black/[0.5]">
            <div className="max-w-screen-lg flex flex-col gap-y-5 items-start py-[60px] text-white w-full max-w-screen-gl m-auto">
              <h2 className="md:text-3xl text-2xl font-bold">Ви готові натиснути кнопку? <br/> Задайте питання прямо зараз.</h2>
              {/*<p className="text-xs w-96">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquam asperiores delectus ex quaerat! Amet consectetur, ea exercitationem fuga pariatur quod sed?</p>*/}
              <Button title="Задати запитання" onClick={() => setIsOpenModal(true)} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
