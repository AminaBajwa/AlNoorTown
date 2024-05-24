
"use client"
import AccordionUsage from '@/Components/Features'
import Slide from '@/Components/Slide'
import VideoSlider from '@/Components/VideoSlider'
import React from 'react'
import { Accordion, AccordionItem } from '@nextui-org/react';
import Features from '@/Components/Features'
import F from '@/Components/Features';
import Features2 from '@/Components/Features2'
import Features3 from '@/Components/Features3'
import Feature from '@/Components/Feature'


const about = () => {

  return (

   <>
   <VideoSlider/>
   <div className="amenities flex flex-col justify-center items-center md:m-16 m-4">
  <div className="v-wrapper mb-8 w-full flex flex-col md:flex-row">
    <div className="flex flex-col md:w-full">
      <div className="flex flex-col justify-center mt-0 md:mt-10">
        <span className="primaryText text-2xl md:text-3xl lg:text-4xl font-bold mt-0 md:mt-10 text-[#c69840]">Discover Your Ideal Lifestyle at Al Noor Town, Where Modern Comfort Meets Serenity in Sialkot</span>
        <span className=" text-gray-700 mt-0 md:mt-10">
          Experience modern living at Al Noor Town, nestled along picturesque Chenab Rangers Road in Sialkot. Offering premium lifestyle options including residential plots from 5 to 10 marlas and 1 Kanal, as well as lucrative commercial plots. Essential amenities like electricity, a graveyard, a masjid, a community center, and maintenance service ensure unparalleled convenience. The family-friendly environment includes a dedicated play area for children, while wide roads, a robust sewerage system, and 24/7 security ensure safety and comfort. Immediate possession lets you start building your dream home without delay. Embrace luxury and tranquility at Al Noor Town, your gateway to an elevated lifestyle in Sialkot.
          Al Noor Town is a residential subdivision located in Sialkot, Punjab, Pakistan, offering a modern lifestyle within secure, gated communities. The town's contemporary architecture is complemented by its lush green surroundings and convenient access to major highways and local markets. This combination makes it an ideal choice for families seeking a safe and well-connected community. Adding to its appeal, Al Noor Town features several facilities to meet the diverse needs of its residents. Furthermore, the town stands out for its TMA-approved facilities, meticulously designed to cater to the residents' requirements. Overall, Al Noor Town presents a promising and comfortable living environment within the city of Sialkot.  
        </span>
      </div>
    </div>
  </div>

  <Feature/>
</div>
   </>
  )
}

export default about
