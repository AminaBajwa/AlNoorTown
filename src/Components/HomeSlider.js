// "use client"

// import React from 'react';
// import HeroSlider, { Slide } from 'hero-slider';

// const hero = "/alnoorHero1.jpg";
// const gate = "/gate2.png";
// const worker = "/workers.png";

// const HomeSlider = () => {
//   return (
//     <HeroSlider
//       slidingAnimation="left-to-right"
//       orientation="horizontal"
//       initialSlide={1}
//       onBeforeChange={(previousSlide, nextSlide) => console.log("onBeforeChange", previousSlide, nextSlide)}
//       onChange={nextSlide => console.log("onChange", nextSlide)}
//       onAfterChange={nextSlide => console.log("onAfterChange", nextSlide)}
//       style={{
//         backgroundColor: "rgba(0,0,0,0.33)",
//         height: "300px",
//         position: "relative",
//       }}
//       setting={{
//         slidingDuration: 250,
//         slidingDelay: 100,
//         shouldAutoplay: true,
//         shouldDisplayButtons: true,
//         autoplayDuration: 3000,
//       }}
//     >
//       <Slide
//         background={{
//           backgroundImage: hero,
//           backgroundAttachment: "fixed"
//         }}
//         style={{
//           height: "300px",
//         }}
//       />
//       <Slide
//         background={{
//           backgroundImage: gate,
//           backgroundAttachment: "fixed"
//         }}
//         style={{
//           height: "300px",
//         }}
//       />
//       <Slide
//         background={{
//           backgroundImage: worker,
//           backgroundAttachment: "fixed"
//         }}
//         style={{
//           height: "300px",
//         }}
//       />
//     </HeroSlider>
//   );
// };

// export default HomeSlider;
