import React from "react";
import Link from "next/link";
const CallToAction = () => {
  return (
    <div id="get-started" className="g-wrapper mx-10 mb-20">
      <div className="paddings innerWidth g-container">
        <div className="flex flex-col items-center gap-6 inner-container bg-[#c69840]  border-6 border-[#c69840] rounded-lg p-8 text-center">
          <span className="primaryText text-white font-semibold text-2xl">Looking for a dream home?</span>
          <span className="secondaryText text-white text-1xl">We can help you realize your dream of a new home<br />Find your residence soon</span>
          <button className="button bg-[#c69840] border-2 border-white rounded-lg px-6 py-2 transition duration-300 ease-in-out transform hover:scale-110 ">
            <Link href="/contact" className="text-white">Book A Site Visit</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
