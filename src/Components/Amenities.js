
import React from "react";
import Link from "next/link";

const Amenities = () => {
  return (
    <>
     <div className="heading-container mb-8 mt-20 md:text-center">
        <h1 className="md:text-center text-4xl font-bold text-[#c69840]">Our Amenities</h1>
      </div>

    {/* Entrance gate  */}

     <div className="mt-32 rounded-md px-4 ">
        <div className="grid md:grid-cols-2 justify-center items-center gap-12 max-w-7xl mx-auto">
          <div >
            <img src="/MainGate.jpg" alt="Entrance Gate" class="w-full mx-auto" />
          </div>
          
          <div className="max-md:text-center">
            <h2 className="md:text-4xl text-3xl font-bold md:!leading-[50px] mb-10 mx-6 text-[#c69840]">Entrance Gates</h2>
            <p className="text-gray-700 mx-6">At Al Noor Town, we're all about creating a neighborhood where everyone feels like they belong.
            At AlNoor Town, we prioritize your safety and comfort. With three entrances, including one for commercial access and two leading directly into our community, we ensure swift and secure entry. Our vigilant security guards guarantee peace of mind for all residents and visitors alike. AlNoor Town isn't just a gated community; it's your haven where security meets serenity.
            </p>
          </div>
        </div>
      </div>
    {/* Mosque */}  
      <div class="mt-12 rounded-md px-4 ">
        <div class="grid md:grid-cols-2 justify-center items-center gap-12 max-w-7xl mx-auto">
          <div class="max-md:text-center">
            <h2 class="md:text-4xl text-3xl font-bold md:!leading-[50px] mb-8 mx-6 text-[#c69840]">Mosque</h2>
            <p class="text-gray-700 mx-6"> Experience the beauty and tranquility of Jamya Masjid "Alnoor Town Mosque" in Sialkot. The graceful structure is mesmerizing and brings peace to your heart. Surrounded by lush greenery, this modern, minimalist mosque blends seamlessly with the rest of the housing scheme. With traditional minarets and a large dome-shaped roof, the mosque offers a spacious and harmonious setting for prayer.
          </p>
          </div>
          <div>
            <img src="/Mosque.png" alt="Mosque" class="w-full mx-auto" />
          </div>
        </div>
      </div>
    {/* Parks and Walkaways   */}
      <div className="mt-12 rounded-md px-4 ">
        <div className="grid md:grid-cols-2 justify-center items-center gap-12 max-w-7xl mx-auto">
          <div >
            <img src="/ParkMonoments2.png" alt="Parks and Walkaways" class="w-full mx-auto" />
          </div>
          
          <div className="max-md:text-center">
            <h2 className="md:text-4xl text-3xl font-bold md:!leading-[50px] mb-10 mx-6 text-[#c69840]">Parks and Walkaways</h2>
            <p className="text-gray-700 mx-6">At Al Noor Town, we're all about creating a neighborhood where everyone feels like they belong.
            Parks in Al Noor Town offer residents vibrant opportunities for outdoor activities, promoting healthier lifestyles. With well-maintained green spaces and attentive staff, our community fosters a luxurious living environment. Residents can enjoy leisurely strolls, family picnics, or invigorating jogs amidst lush surroundings. At Al Noor Town, embrace a lifestyle that prioritizes wellness and vitality within a serene natural setting.
            </p>
            
          </div>
        </div>
      </div>
    {/* Fountain Park */}
      <div class="mt-12 rounded-md px-4">
        <div class="grid md:grid-cols-2 justify-center items-center gap-12 max-w-7xl mx-auto">
          <div class="max-md:text-center">
            <h2 class="md:text-4xl text-3xl font-bold md:!leading-[50px] mb-8 mx-6 text-[#c69840]">Fountain Park</h2>
            <p class="text-gray-700 mx-6">The construction of Fountain Park is progressing rapidly, showcasing significant momentum in its development. This dynamic progress reflects our dedication to creating vibrant community spaces within Al Noor Town. Fountain Park promises to be a central hub where residents can gather, relax, and enjoy recreational activities. Fountain Park is poised to become a cherished destination for families and individuals alike, offering a serene retreat amidst the bustling energy of Al Noor Town.
          </p>
          </div>
          <div>
            <img src="/FountainPark.jpg" alt="Premium Benefits" class="w-full mx-auto" />
          </div>
        </div>
      </div>
      {/* Residential Plots */}
      <div className="mt-32 rounded-md px-4 mb-16">
        <div className="grid md:grid-cols-2 justify-center items-center gap-12 max-w-7xl mx-auto">
        <div >
            <img src="/HousePlots.jpg" alt="plots" class="w-full mx-auto" />
          </div>
          <div className="max-md:text-center ">
            <h2 className="md:text-4xl text-3xl font-bold md:!leading-[50px] mb-10 mx-6 text-[#c69840]">Residential Plots</h2>
            <p className="text-gray-700 mx-6">At Al Noor Town, we're all about creating a neighborhood where everyone feels like they belong.
            Al Noor Town Sialkot recognizes that a home embodies your aspirations, offering a diverse range of residential plots to suit your needs. From cozy 3.5 Marla havens for individuals or small families, to spacious 1 Kanal plots for grand living, they cater to various lifestyles. Whether you seek comfortable living, room for a growing family, or the space to realize your dream home, Al Noor Town has the perfect canvas for you.
            </p>
            
          </div>
        </div>
      </div>

          {/* Play Area */}
          {/* <div class="mt-12 rounded-md px-4 mb-16">
        <div class="grid md:grid-cols-2 justify-center items-center gap-12 max-w-7xl mx-auto">
          <div class="max-md:text-center">
            <h2 class="md:text-4xl text-3xl font-bold md:!leading-[50px] mb-8 mx-6 text-[#c69840]">Play Area</h2>
            <p class="text-gray-700 mx-6"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          </div>
          <div>
            <img src="/Fountain.jpg" alt="Premium Benefits" class="w-full mx-auto" />
          </div>
        </div>
      </div> */}

     






    
  </>  
  );
};

export default Amenities;
