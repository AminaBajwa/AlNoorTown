import React from 'react'
import CallToAction from './CallToAction';

const Feature = () => {
  return (

  <div className="px-4 sm:px-10">
      <div className="mt-32 max-w-7xl mx-auto">
        <div className="mb-16 max-w-2xl text-center mx-auto">
          <h2 className="md:text-4xl text-3xl font-bold mb-6 text-[#c69840]">TMA-Approved Facilities Await You at Al Noor Town</h2>
          <p className="mt-6">Welcome to Al Noor Town, where everything is designed to make your life better. Check out the great features that make our community the best place to live a modern lifestyle.</p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 max-md:max-w-lg mx-auto gap-8 mb-28">
          
          <div className="feature-card sm:p-6 p-4 flex bg-white rounded-md border shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]">

            <div className='text-center'>
              <div className='w-16 inline-block bg-white p-3 rounded-xl' viewBox="0 0 42 42">
                <img src='/PlotSize.png'/>
            </div>
              <h3 className="text-xl font-bold mb-2">Range of Plot Sizes</h3>
              <p>Choose from 5, 8, 10 marla, and 1 Kanal residential plots, as well as commercial plots.</p>
            </div>
          </div>


          <div className="feature-card sm:p-6 p-4 flex bg-white rounded-md border shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]">
           
            <div className='text-center'>
              <div className='w-16 inline-block bg-white p-3 rounded-xl' viewBox="0 0 42 42">
                <img src='/amenities (1).png'/>
            </div>
              <h3 className="text-xl font-bold mb-2">Essential Amenities</h3>
              <p>Uninterrupted access of electricity, graveyard, mosque, and community center</p>
            </div>
          </div>



          <div className="feature-card sm:p-6 p-4 flex bg-white rounded-md border shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]">
          
          <div className='text-center'>
              <div className='w-16 inline-block bg-white p-3 rounded-xl' viewBox="0 0 42 42">
                <img src='/Infrastructure.png'/>
            </div>
              <h3 className="text-xl font-bold mb-2">Infrastructure</h3>
              <p>Benefit from proper sewerage system, water tank, & 24/7 security for your peace of mind</p>
            </div>
          </div>


          <div className="feature-card sm:p-6 p-4 flex bg-white rounded-md border shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]">
          <div className='text-center'>
              <div className='w-16 inline-block bg-white p-3 rounded-xl' viewBox="0 0 42 42">
                <img src='/maintenanens (1).png'/>
            </div>
              <h3 className="text-xl font-extrabold mb-2">Maintenance Services</h3>
              <p>Our dedicated team ensures your surroundings are well-kept</p>
            </div>
          </div>



          <div className="feature-card sm:p-6 p-4 flex bg-white rounded-md border shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]">
          <div className='text-center'>
              <div className='w-16 inline-block bg-white p-3 rounded-xl' viewBox="0 0 42 42">
                <img src='/family.png'/>
            </div>
              <h3 className="text-xl font-bold mb-2">Friendly Environment</h3>
              <p>Let your children thrive in our play areas designed specifically for them.</p>
            </div>
          </div>




          <div className="feature-card sm:p-6 p-4 flex bg-white rounded-md border shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]">
          <div className='text-center'>
              <div className='w-16 inline-block bg-white p-3 rounded-xl' viewBox="0 0 42 42">
                <img src='/road.png'/>
            </div>
              <h3 className="text-xl font-bold mb-2">Well-Connected Roads</h3>
              <p>Easily move around on wide carpeted roads with plenty of street lighting for safety and convenience.</p>
            </div>
          </div>

          
        </div>
      </div>
      <CallToAction/>
    </div>
  )
}

export default Feature;
