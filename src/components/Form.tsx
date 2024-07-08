import React, { useContext, useState } from 'react';
import { InputField } from './InputField.tsx';
import { Button } from './Button.tsx';
import { ModalContext } from '../context/Context.tsx';

export const Form: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  
  const { setIsOpenModal } = useContext(ModalContext)

  const cleanForm = () => {
    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
  }

  const onSubmit = (e:  React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newMessage = {
      name,
      phone,
      email,
      message
    }

    console.log(newMessage)
    setIsOpenModal(false)
    cleanForm()
  }
  
  return (
    <form className="flex flex-1 flex-col gap-y-4 w-full" onSubmit={onSubmit}>
      <h1 className="m-auto text-2xl mb-8" >Задай запитання</h1>
      <div className="flex flex-col gap-y-4">
        <InputField
          type="text"
          value={name}
          label="Імʼя"
          onChange={(e) => setName(e.target.value)}
          name="name"
        />
        <InputField
          type="text"
          value={phone}
          label="Телефон"
          onChange={(e) => setPhone(e.target.value)}
          name="name"
        />
        <InputField
          type="text"
          value={email}
          label="Пошта"
          onChange={(e) => setEmail(e.target.value)}
          name="name"
        />
        <label>
          <p className="ml-1 text-[color:var(--accent-color)]">Повідомлення</p>
          <textarea
            className="border w-full border-black resize-y max-h-[200px] min-h-[40px] outline outline-0 p-2 lg:w-[300px]"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
      </div>
      <div className="">

        <Button title="Відправити" type="submit" />
      </div>
    </form>
  );
};
