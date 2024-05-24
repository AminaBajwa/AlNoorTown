import React from 'react'
import Image from "next/image";
const Maps = () => {
  return (
  <>
    <div className="flex flex-col md:h-[calc(100vh-9rem)] lg:flex-row text-[#2B161B]">

      <div className="flex w-full">
        <div className="w-1/2 h-full flex-1 relative">
          <img
          src= "/Location2.jpg"
          alt=""
          className=" w-full h-[400px]"
          />
        </div>
      </div>
    </div>

    <div className="mt-12 rounded-md px-0 md:px-4 py-12">
        <div className="grid md:grid-cols-2 justify-center items-center gap-12 max-w-7xl mx-auto">
          <div className="max-md:text-center order-first">
            <h2 className="md:text-4xl text-3xl font-bold md:!leading-[50px] mb-8 mx-6 text-[#c69840]">Al Noor Town - Premier Residential Living in Sialkot, Pakistan</h2>
            <p className="text-gray-700 mx-6">Al Noor Town is a well-planned community situated on Chenab Rangers Road in Sialkot, Punjab, Pakistan. It is a premium lifestyle experience located 2.4 kilometers away from VMall. This residential project offers state-of-the-art features and a modern infrastructure, making it an attractive investment opportunity for those seeking a comfortable and secure living environment. The community boasts wide roads, greenbelts, and well-planned residential and commercial areas, ensuring a high standard of living for its residents.</p>
          </div>
          <div>
            <img src="/location3.jpg" alt="Premium Benefits" className="w-full mx-auto order-last md:order-first" />
          </div>
        </div>
      </div>

      <div className="map">
          <iframe width="100%" height="500" frameBorder="0" scrolling="no"src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Chenab%20rangers%20road%20Sialkot,%20Punjab,%20Pakistan,%20Sialkot,%20Pakistan+(Al%20Noor%20Town)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps vehicle tracker</a></iframe>
      </div>
  </>
  )
}

export default Maps


