// import { Main } from "next/document";
// import Image from "next/image";

// export default function Home() {
//   return (
//     <main>
//       <Home/>
//     </main>
//   );
// }

import CallToAction from "@/Components/CallToAction";
import Features3 from "@/Components/Features3";
import HomeBlog from "@/Components/HomeBlog";
// import HomeSlider from "@/Components/HomeSlider";
import LightGalleryComp from "@/Components/LightGallery";
import MyCarousel from "@/Components/MyCarousel";
import MyCarousel1 from "@/Components/MyCarousel";
import OverView from "@/Components/OverView";
import Slide from "@/Components/Slide";
import SliderDevelopment from "@/Components/SliderDevelopment";
import Vision from "@/Components/Vision";
import { Slider } from "@nextui-org/react";
import Image from "next/image";
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <main>
      {/* <HomeSlider/> */}
      {/* <MyCarousel1/> */}
      {/* <Slide/>
      <OK/> */}
      <MyCarousel/>
      <Vision/>
      <OverView/>
      <Features3/>
      <SliderDevelopment/>
      <HomeBlog/>
      <CallToAction/>
      {/* <LightGalleryComp/> */}

    </main>
  );
}
