import CallToAction from '@/Components/CallToAction';
import HomeBlog from '@/Components/HomeBlog';
import OverView from '@/Components/OverView';
import SliderDevelopment from '@/Components/SliderDevelopment';
import SimpleSlider from '@/Components/SliderDevelopment';
import Vision from '@/Components/Vision';

import React from 'react'

const alnoorHome = () => {


  return (
    <>
    <Vision/>
    <OverView/>
    <Features3/>
    <div className="container mx-auto py-8">
      <h1 className="text-center my-12 text-4xl font-bold text-[#c69840]">Project Development</h1>
     <SliderDevelopment/>
    </div>
    <HomeBlog/>
    <CallToAction/>
    </>
  )
}

export default alnoorHome;
