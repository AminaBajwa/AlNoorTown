
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForms = () => {
  const form = useRef(null);
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_4u9glwl', 'template_r6r0g05', form.current, {
          publicKey: 'sFi4BJJW-YaygPE0k',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            setConfirmationMessage('Email sent successfully!');
            setTimeout(() => {
              setConfirmationMessage('');
            }, 5000); // Hide the confirmation message after 5 seconds
            toast.success('Email sent successfully!');
          },
          (error) => {
            console.log('FAILED...', error.text);
            toast.error('Failed to send email.');
          },
        );
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center lg:justify-center px-4 py-12 mx-auto lg:max-w-4xl">
      <div className="lg:w-1/2">
        <h2 className="text-4xl font-bold text-gray-900 mr-10">Reserve a spot for a site visit</h2>
        <div className="w-22 h-22 lg:mt-10 rounded-10 overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="/cont.png"
            alt="image"
          />
        </div>
      </div>
      <div className="lg:w-1/2 lg:mt-10">
        <form ref={form} onSubmit={sendEmail} className="bg-gray-100 p-8 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Name</label>
            <input
              className="appearance-none border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#c69840]"
              type="text"
              name="user_name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              className="appearance-none border-2 rounded w-full py-2 px-4 text-gray-700 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-[#c69840]"
              type="email"
              name="user_email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2">Message</label>
            <textarea
              className="appearance-none border-2 rounded w-full py-2 px-4 text-gray-700 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-[#c69840]"
              name="message"
            />
          </div>
          <button
            className="shadow bg-[#c69840] hover:bg-opacity-80 hover:text-white focus:shadow-outline-purple focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Send
          </button>
          {/* {confirmationMessage && (
            <span className="text-green-600 mt-2 mx-10">{confirmationMessage}</span>
          )} */}
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default ContactForms;

