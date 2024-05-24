import React from 'react'
import Link from "next/link";
const Features3 = () => {
  return (
    <div className="px-4 sm:px-10">
    <div className="mt-32 max-w-7xl mx-auto">
      <div className="mb-16 max-w-2xl text-center mx-auto">
        <h2 className="md:text-4xl text-3xl font-bold md:!leading-[50px] mb-6 text-[#c69840]">Our Features</h2>
        <p className="text-gray-700">
          {/* Welcome to Al Noor Town, where everything is designed to enhance your life. Check out the features that make our community the best place for a modern lifestyle. */}
          
          Experience the best at Al Noor Town with TMA-approved facilities designed for your needs. Discover what makes our community ideal for modern living.
          </p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-16  bg-gray-100">
        <div className="text-center px-6 py-12 rounded-2xl">
          <div className='w-16 mb-6 inline-block bg-white p-3 rounded-xl' viewBox="0 0 42 42">
          <img src='/design (1).png' />
          </div>
          <h3 className="text-xl mb-4 text-[#c69840] font-semibold">Innovative Design</h3>
          <p className="text-gray-600">Al Noor Town features cutting-edge architectural designs & urban planning to maximize space and enhance the overall aesthetic appeal of the community.</p>
          {/* <Link href="/amenity" className="text-blue-600 inline-block mt-4 hover:underline">Explore</Link> */}
        </div>


        <div className="text-center px-6 py-12 rounded-2xl">

          <div className='w-16 mb-6 inline-block bg-white p-3 rounded-xl' viewBox="0 0 42 42">
            <img src='/amenities (1).png'/>
          </div>
          <h3 className="text-xl mb-4 text-[#c69840] font-semibold">Amenities and Facilities</h3>
          <p className="text-gray-600">The development offers diverse amenities such as recreational areas, fitness centers, shopping complexes, parks & educational institutions.</p>
          {/* <Link href="/amenity" className="text-blue-600 inline-block mt-4 hover:underline">Explore</Link> */}
        </div>

        
        <div className="text-center px-6 py-12 rounded-2xl">
          <div className='w-16 mb-6 inline-block bg-white p-3 rounded-xl' viewBox="0 0 42 42">
            <img src='/handshake (1).png'/>
          </div>
          <h3 className="text-xl mb-4 text-[#c69840] font-semibold">Community Engagement</h3>
          <p className="text-gray-600">Focuses on community engagement and social interaction through events, clubs, & initiatives to strengthen the sense of community among residents.</p>
          {/* <Link href="/amenity" className="text-blue-600 inline-block mt-4 hover:underline">Explore</Link> */}
        </div>
      </div>
    </div>
  </div>
  )
}

export default Features3
