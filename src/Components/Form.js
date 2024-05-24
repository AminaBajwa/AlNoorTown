
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Forms = () => {
  const form = useRef(null); // Remove type annotation here

  const sendEmail = (e) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_4u9gl', 'template_r6r0g05', form.current, {
          publicKey: 'sFi4BJJW-Yayg',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center lg:justify-center px-4 py-12 mx-auto lg:max-w-4xl">
    <div className="lg:w-1/2">
      <h2 className="text-4xl font-bold text-gray-900">Title of the Page</h2>
      <p className="mt-4 text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
        lacus vel eros commodo interdum.
      </p>
      <div className="w-32 h-32 lg:mt-10 rounded-10 overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="/r1.png"
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
          className="shadow bg-[#c69840] hover:bg-[#efd6a7] hover:text-[#c69840] focus:shadow-outline-purple focus:outline-none text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  </div>
  );
};

export default Forms;
