"use client";

import Link from "next/link";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import icons for controllers

const SliderDevelopment = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2, // Show 2 slides at a time
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1, // Show 1 slide at a time on smaller screens
                },
            },
        ],
    };

    // Data for your images
    const images = [
        "/workers.png",
        "/MosqueConstruc.png",
        "/construc7.png",
        "/construc8.png",
        "/construc6.png",
    ];

    // Reference to the slider
    let slider;

    const handlePrevClick = () => {
        slider.slickPrev();
    };

    const handleNextClick = () => {
        slider.slickNext();
    };

    return (
        <>
            <div className="container mx-auto py-8">
                <h1 className="text-center my-12 text-4xl font-bold text-[#c69840]">Project Development</h1>
            </div>

            <div className="relative w-3/4 mx-auto gap-10">
                <Slider ref={c => (slider = c)} {...settings}>
                    {images.map((image, index) => (
                        <div key={index} className="slide-wrapper">
                            <img src={image} alt={`Slide ${index + 1}`} className="slider-image " />
                        </div>
                    ))}
                </Slider>
                {/* Previous and Next controllers */}
                <div className="absolute top-1/2 left-8 transform -translate-y-1/2 z-50">
                    <button onClick={handlePrevClick} className="text-white rounded-full w-10 h-10 flex items-center justify-center  bg-gray-800/30 hover:bg-gray-800/50 focus:outline-none">
                        <FaChevronLeft className="w-6 h-6" />
                    </button>
                </div>
                <div className="absolute top-1/2 right-8 transform -translate-y-1/2 z-50">
                    <button onClick={handleNextClick} className="text-white rounded-full w-10 h-10 flex items-center justify-center  bg-gray-800/30 hover:bg-gray-800/50 focus:outline-none">
                        <FaChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>
            <div className="flex justify-center gap-8 my-10">
                <button className="group relative h-8 w-40 md:h-12 md:w-64 overflow-hidden rounded-lg bg-white text-lg shadow">
                    <div className="absolute inset-0 w-3 bg-[#c69840] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                    <span className="relative text-black group-hover:text-white text-[12px] md:text-[18px]"><Link href="/projects">Project Development »</Link></span>
                </button>
                <button className="group relative h-8 w-40 md:h-12 md:w-64 overflow-hidden rounded-lg bg-white text-lg shadow">
                    <div className="absolute inset-0 w-3 bg-[#c69840] transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                    <span className="relative text-black group-hover:text-white text-[12px] md:text-[18px]"><Link href="/amenityOverView">Explore Media Gallery »</Link></span>
                </button>
            </div>
        </>
    );
}

export default SliderDevelopment;
