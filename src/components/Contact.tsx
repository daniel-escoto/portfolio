import { motion } from "framer-motion";
import React from "react";

interface InputFieldProps {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  name: string;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  id,
  type,
  placeholder,
  name,
  required,
}) => (
  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
    <label
      className="block uppercase tracking-wide text-gray-700 dark:text-gray-300 text-xs font-bold mb-2"
      htmlFor={id}
    >
      {label}
    </label>
    <motion.input
      className="appearance-none block w-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:focus:bg-black focus:border-gray-500"
      id={id}
      type={type}
      placeholder={placeholder}
      name={name}
      required={required}
      whileFocus={{ y: -2 }}
    />
  </div>
);

interface TextAreaFieldProps {
  label: string;
  id: string;
  name: string;
  placeholder: string;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({
  label,
  id,
  name,
  placeholder,
}) => (
  <div className="w-full px-3">
    <label
      className="block uppercase tracking-wide text-gray-700 dark:text-gray-300 text-xs font-bold mb-2"
      htmlFor={id}
    >
      {label}
    </label>
    <motion.textarea
      className="no-resize appearance-none block w-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white dark:focus:bg-black focus:border-gray-500 h-48 resize-none"
      id={id}
      name={name}
      placeholder={placeholder}
      whileFocus={{ y: -2 }}
    ></motion.textarea>
  </div>
);

export default function Contact() {
  return (
    <>
      <section className="container mx-auto px-6 py-20" id="contact">
        <h2 className="text-4xl font-bold mb-8 dark:text-white">Contact</h2>
        <form
          className="w-full"
          action="https://getform.io/f/73a0091d-0901-4415-837b-683e8288bed5"
          method="POST"
        >
          <div className="flex flex-wrap -mx-3 mb-6">
            <InputField
              label="Name"
              id="grid-name"
              type="text"
              placeholder="John"
              name="name"
              required
            />
            <InputField
              label="Email"
              id="grid-email"
              type="email"
              placeholder="johndoe@info.com"
              name="_replyto"
              required
            />
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <TextAreaField
              label="Message"
              id="grid-message"
              name="message"
              placeholder="Hi, I'm interested in your work..."
            />
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3">
              <motion.button
                className="shadow bg-stone-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Send
              </motion.button>
            </div>
            <div className="md:w-2/3"></div>
          </div>
        </form>
      </section>
    </>
  );
}
