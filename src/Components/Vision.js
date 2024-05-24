
import React from 'react';

const Vision = () => {
  return (
    <>
      <div className="mt-20 px-0 py-12 md:mt-32 rounded-md md:px-4 md:py-12">
        <div className="grid md:grid-cols-2 justify-center items-center gap-12 max-w-7xl mx-auto">
          <div>
            <img src="/vision.jpg" alt="Premium Benefits" className="w-full mx-auto order-last md:order-first" />
          </div>
          
          <div className="max-md:text-center order-first md:order-last">
            <div className="mt-4 mb-2 mx-6 text-[#c69840]">
              <p className='text-[#c69840]'>A place where everyone is invited to join our community</p>
            </div>
            <h2 className="md:text-4xl text-3xl font-bold md:!leading-[50px] mb-10 mx-6 text-[#c69840]">Al Noor Town's residential area vision</h2>
            <p className="text-gray-700 mx-6">At Al Noor Town, we're all about creating a neighborhood where everyone feels like they belong.
                A place where you walk down the street and feel genuinely at home, where your neighbors become your friends, and where you're surrounded by green spaces and modern comforts.
                Our vision for the residential area is simple yet powerful, we want to build a community where
                 people from all walks of life can thrive together. Safety and sustainability are our top priorities,
                 along with making sure you have everything you need right at your fingertips. Join us at Al
                 Noor Town, where the warmth of community awaits you!
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 rounded-md px-0 md:px-4 py-12">
        <div className="grid md:grid-cols-2 justify-center items-center gap-12 max-w-7xl mx-auto">
          <div className="max-md:text-center order-first">
            <div className="mt-4 mb-2 mx-6">
              <p className='text-[#c69840]'> Creating Connections, Building Communities</p>
            </div>
            <h2 className="md:text-4xl text-3xl font-bold md:!leading-[50px] mb-8 mx-6 text-[#c69840]">Al Noor Town's Mission for Community Excellence</h2>
            <p className="text-gray-700 mx-6">At Al Noor Town, we are on a mission to redefine the essence of home, where dreams
            flourish and lives are transformed. Our dedication lies in crafting living spaces that transcend the ordinary,
            offering a haven where comfort, security, and community converge seamlessly. We lead the industry by embracing
            innovation and sustainability, ensuring that our developments not only meet but exceed the evolving needs of
            our residents. With a steadfast commitment to customer satisfaction, we pave the way for individuals to find
            their ideal sanctuary in the heart of Al Noor Town. Experience the essence of living where dreams become reality.</p>
          </div>
          <div>
            <img src="/Main Gate.jpg" alt="Premium Benefits" className="w-full mx-auto order-last md:order-first" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Vision;

