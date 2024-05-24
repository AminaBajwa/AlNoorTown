"use client";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    video: "/AlVideoHero.mp4",
  }, 
];

const VideoSlider = () => {

  return (
    <div className="flex  md:h-[calc(100vh-9rem)] lg:flex-row bg-[#e0dadc] text-[#2B161B]">
      {/* VIDEO CONTAINER */}
      <div className="flex w-full">
        <div className="w-full h-full flex-1 relative">
          <video
            src={data[0].video}
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

export default VideoSlider;