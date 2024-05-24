// "use client";
// import Image from "next/image";
// import React, { useEffect, useState } from "react";

// const data = [
//   {
//     id: 1,
//     title: "Beauty Highlighted",
//     p: "Dive into the world of best quality hair color and get the most innovative hair shades that will enhance your glory.",
//     h3: "A whole New Look",
//     // image: "/belini-b-1.jpg",
//     image: "/alnoorHero1.jpg",
//   },
//   {
//     id: 2,
//     title: "Beauty Highlighted",
//     p: "Dive into the world of best quality hair color and get the most innovative hair shades that will enhance your glory.",
//     h3: "A whole New Look",
//     image: "/alnoorHero1.jpg",
//   },
//   // {
//   //   id: 3,
//   //   title: "the best pizza to share with your family",
//   //   image: "/slide3.jpg",
//   // },
// ];

// const Slider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(
//       () =>
//         setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
//       4000
//     );
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-[#e0dadc] text-[#2B161B]">

//       {/* IMAGE CONTAINER */}
//   <div className="flex w-full">
//   <div className="w-1/2 h-full flex-1 relative">
//     <Image
//       src={data[currentSlide].image}
//       alt=""
//       fill
//       className="object-cover"
//     />
//   </div>
// </div>
//     </div>
//   );
// };

// export default Slider;
