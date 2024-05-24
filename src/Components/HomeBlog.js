import React from 'react'

const HomeBlog = () => {
  return (
    <>
    <div class=" px-4 py-20 font-[sans-serif] text-center md:text-center">
      <div class="max-w-7xl max-md:max-w-lg mx-auto">
        <h2 class="text-4xl font-bold text-[#c69840]">Latest Blog</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 ">
          <div className="bg-white cursor-pointer rounded overflow-hidden group border border-gray-100 shadow-md" >
            <div class="relative overflow-hidden">
              <img src="/bcommitmentBlog.jpg" alt="Blog Post 1" class="w-full h-60 object-cover group-hover:scale-125 transition-all duration-300" />
              {/* <div class="px-4 py-2.5 text-white text-sm tracking-wider bg-orange-500 absolute bottom-0 right-0">June 10, 2023</div> */}
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-[#333]">Inside Al Noor Town's Commitment to Comunity</h3>
              <button type="button" class="px-4 py-2 mt-6 rounded text-white text-sm tracking-wider border-none outline-none bg-[#c69840] hover:bg-opacity-80">Read More</button>
            </div>
          </div>
          <div className="bg-white cursor-pointer rounded overflow-hidden group border border-gray-100 shadow-md" >
            <div class="relative overflow-hidden">
              <img src="/UniqueFeaturesBlog.jpg" alt="Blog Post 2" class="w-full h-60 object-cover group-hover:scale-125 transition-all duration-300" />
              {/* <div class="px-4 py-2.5 text-white text-sm tracking-wider bg-orange-500 absolute bottom-0 right-0">April 20, 2023</div> */}
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-[#333]">A Journey through its Unique Features</h3>
              <button type="button" class="px-4 py-2 mt-6 rounded text-white text-sm tracking-wider border-none outline-none bg-[#c69840] hover:bg-opacity-80">Read More</button>
            </div>
          </div>
          <div className="bg-white cursor-pointer rounded overflow-hidden group border border-gray-100 shadow-md" >
            <div class="relative overflow-hidden">
              <img src="/construc6.png" alt="Blog Post 3" class="w-full h-60 object-cover group-hover:scale-125 transition-all duration-300" />
              {/* <div class="px-4 py-2.5 text-white text-sm tracking-wider bg-orange-500 absolute bottom-0 right-0">August 16, 2023</div> */}
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-[#333]">The Story Behind Al Noor Towon's Development</h3>
              <button type="button" class="px-4 py-2 mt-6 rounded text-white text-sm tracking-wider border-none outline-none bg-[#c69840] hover:bg-opacity-80">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default HomeBlog
