"use client"
import React, { useState, useEffect } from 'react';

const MyCarousel = () => {
    // State to track the current image index
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    // State to control animation of text
    const [textAnimation, setTextAnimation] = useState(false);

    // Data for your images, headings, and paragraphs
    const carouselData = [
        {
            imageUrl: "/MainGate.jpg",
            heading: "Al Noor Town's Main Entrance",
            paragraph: "Welcoming entrance where luxury meets tranquility"
        },
        {
            imageUrl: "/Mosque3D.jpeg",
            heading: "Al Noor Town Mosque",
            paragraph: "A symbol of spiritual enlightenment."
        },
        {
            imageUrl: "/Office.JPG",
            heading: "Al Noor Town Office",
            paragraph: "Step into the Al Noor Town office to turn your dreams into reality."
        },
    ];

    // Function to handle previous button click
    const handlePrevClick = () => {
        setTextAnimation(false);
        setCurrentImageIndex(prevIndex => (prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1));
    };

    // Function to handle next button click
    const handleNextClick = () => {
        setTextAnimation(false);
        setCurrentImageIndex(prevIndex => (prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1));
    };

    // Effect to trigger text animation when image changes
    useEffect(() => {
        setTextAnimation(true);
    }, [currentImageIndex]);

    return (
        <>
            <div id="indicators-carousel" className="relative w-full h-auto md:h-[500px] mx-auto" data-carousel="static">
                {/* Carousel wrapper */}
                <div className="relative h-56 md:h-full">
                    {/* Map through carousel data and render them */}
                    {carouselData.map((item, index) => (
                        <div
                            key={index}
                            className={`${index === currentImageIndex ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 ease-in-out absolute inset-0`}
                            data-carousel-item={index === currentImageIndex ? 'active' : ''}
                        >
                            <img
                                src={item.imageUrl}
                                className="absolute inset-0 w-full h-full object-cover transition-opacity"
                                alt={`Slide ${index + 1}`}
                                style={{ opacity: index === currentImageIndex ? 1 : 0 }}
                            />
                            <div className="absolute inset-0 bg-black opacity-60"></div>
                            <div className={`absolute inset-0 flex flex-col justify-center items-center mt-20 md:mt-36 text-white ${textAnimation ? 'animate-slide-from-bottom' : ''}`}>
                                <h1 className="text-[16px] md:text-3xl lg:text-4xl font-bold mb-2">{item.heading}</h1>
                                <p className="text-[12px] md:text-base lg:text-lg">{item.paragraph}</p>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Slider controls */}
                <button
                    type="button"
                    className="absolute top-1/2 transform -translate-y-1/2 left-4 z-30 flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/30 text-white hover:bg-gray-800/50 focus:outline-none"
                    data-carousel-prev
                    onClick={handlePrevClick}
                >
                    <span className="sr-only">Previous</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 md:w-8 md:h-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
                </button>
                <button
                    type="button"
                    className="absolute top-1/2 transform -translate-y-1/2 right-4 z-30 flex items-center justify-center w-10 h-10 rounded-full bg-gray-800/30 text-white hover:bg-gray-800/50 focus:outline-none"
                    data-carousel-next
                    onClick={handleNextClick}>
                    <span className="sr-only">Next</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 md:w-8 md:h-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                </button>
                {/* Dots */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                    {carouselData.map((_item, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-4 h-1 md:w-6 md:h-1 bg-gray-100 rounded-sm ${index === currentImageIndex ? 'bg-gray-500' : ''}`}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default MyCarousel;

