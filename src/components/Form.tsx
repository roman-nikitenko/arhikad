import React, { useContext, useEffect, useRef, useState } from "react";
import { InputField } from "./InputField.tsx";
import { Button } from "./Button.tsx";
import { ModalContext } from "../context/Context.tsx";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

export const Form: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [token, setToken] = useState<string | null>(null);
  const [error, setError] = useState<boolean>(false);
  const captchaRef = useRef<ReCAPTCHA | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  const { setIsOpenModal } = useContext(ModalContext);

  const emailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const emailJsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const emailJsPublickKey = import.meta.env.VITE_EMAILJS_PUBLICK_KEY;
  const captchaKey = import.meta.env.VITE_GOOGLE_RECAPTCHA_KEY;

  const cleanForm = () => {
    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
    setToken(null);
    
    if (captchaRef.current) {
      captchaRef.current.reset();
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current) {
      emailjs
        .sendForm(emailJsServiceId, emailJsTemplateId, formRef.current, {
          publicKey: emailJsPublickKey,
        })
        .then(() => {
          console.log("SUCCESS!");
        });
    }

    setIsOpenModal(false);
    cleanForm();
  };

  const phoneInChangeGHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!/^\d*$/.test(e.target.value)) return;
    if (e.target.value.length > 12) return;

    setPhone(e.target.value);
  };

  useEffect(() => {
    if (name && email && message && token) {
      setError(true);
    } else {
      setError(false);
    }
  }, [name, email, message, token]);

  return (
    <form
      ref={formRef}
      className="flex flex-1 flex-col gap-y-4 w-full"
      onSubmit={onSubmit}
    >
      <h1 className="m-auto text-2xl mb-8">Задай запитання</h1>
      <div className="flex flex-col gap-y-4">
        <InputField
          type="text"
          value={name}
          label="Імʼя"
          onChange={(e) => setName(e.target.value)}
          name="name"
          isRequired
        />
        <InputField
          type="text"
          value={phone}
          label="Телефон"
          onChange={phoneInChangeGHandler}
          name="phone"
        />
        <InputField
          type="email"
          value={email}
          label="Пошта"
          onChange={(e) => setEmail(e.target.value)}
          name="reply_to"
          isRequired
        />
        <label>
          <p className="ml-1 after:content-['*'] after:ml-0.5 after:text-red-500 text-[color:var(--accent-color)]">
            Повідомлення
          </p>
          <textarea
            className="border w-full border-[var(--dark)] bg-[var(--light)] resize-y max-h-[200px] min-h-[40px] outline outline-0 p-2 lg:w-[300px]"
            value={message}
            name="message"
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
      </div>
      <ReCAPTCHA
        ref={captchaRef}
        sitekey={captchaKey}
        onChange={(token) => setToken(token)}
      />
      <div>
        <Button isDisabled={!error} title="Відправити" type="submit" />
      </div>
    </form>
  );
};
