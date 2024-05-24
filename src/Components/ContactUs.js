"use client"
import React from "react";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenter } from 'react-icons/hi2';
import Image from "next/image";
import ContactForms from "./ContactForm";


const ContactUs = () => {
  return (
    <>
      <div className="flex  md:h-[calc(100vh-9rem)] lg:flex-row text-[#2B161B]">
        <div className="flex w-full">
          <div className="w-full h-full flex-1 relative">
            <Image
              src="/alnoorHero1.jpg"
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 mt-20">
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-lg shadow-md p-10 flex flex-col items-center border border-grey">
            <div className="h-16 w-16 mb-4">
              <img src="/Office-email.png" alt="" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#c69840]">Email Address</h3>
            <p className="text-gray-600">alnoortown0@gmail.com</p>
          </div>

          <div className="rounded-lg shadow-md p-10 flex flex-col items-center border border-grey">
            <div className="h-16 w-16 mb-4">
              <img src="/Phone-number.png" alt="" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#c69840]">Phone Number</h3>
            <p className="text-gray-600">+92 311 1111268</p>
          </div>

          <div className="rounded-lg shadow-md p-10 flex flex-col items-center border border-grey">
             <div className="h-16 w-16 mb-4">
              <img src="/Office-Address.png" alt="" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#c69840]">Office Address</h3>
            <p className="text-gray-600 items-center justify-center">
            Chenab rangers road Sialkot, <br /> <span className="item-center justify-center px-10">Punjab, Pakistan</span>
            </p>
          </div>
        </div>
      </div>

      <div>
        <ContactForms/>
      </div>
      <div className="map">
          <iframe width="100%" height="500" frameBorder="0" scrolling="no"src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Chenab%20rangers%20road%20Sialkot,%20Punjab,%20Pakistan,%20Sialkot,%20Pakistan+(Al%20Noor%20Town)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps vehicle tracker</a></iframe>
      </div>
      
    </>
  );
};

export default ContactUs;
