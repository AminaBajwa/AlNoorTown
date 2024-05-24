import CallToAction from '@/Components/CallToAction'
import ProjectsDev from '@/Components/ProjectsDev'
import Slide from '@/Components/Slide'
import React from 'react'

const Projects = () => {
  return (
    <>
   <div className="flex  md:h-[calc(100vh-9rem)] lg:flex-row bg-[#e0dadc] text-[#2B161B]">
      {/* VIDEO CONTAINER */}
      <div className="flex w-full">
        <div className="w-full h-full flex-1 relative">
          <video
            src="/GP0sLRkzMxqA12sFAD3UInvOOWAebmdjAAAF.mp4"
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
    <ProjectsDev/>
    <CallToAction/>
    </>
  )
}

export default Projects
