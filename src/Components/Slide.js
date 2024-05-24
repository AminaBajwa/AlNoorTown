
"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
  {
    image: "/alnoorHero1.jpg",
  },

];

const Slide = () => {

  return (
    <div className="flex bg-black/40 md:h-[calc(100vh-9rem)] lg:flex-row bg-[#e0dadc] text-[#2B161B]">
    {/* VIDEO CONTAINER */}
    <div className="flex w-full">
      <div className="w-full h-full flex-1 relative">
        <video
          src= "/GN_UqBmWW-H9UuwEADnjCh7fpU0BbmdjAAAF.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
  );
};

export default Slide;