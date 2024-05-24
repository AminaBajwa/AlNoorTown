import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DevelopmentSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    const data = [
        {
            img: "/Mosque.jpg"
        },
        {
            img: "/Mosque.jpg"
        },
        {
            img: "/Mosque.jpg"
        },
        {
            img: "/Mosque.jpg"
        },
        {
            img: "/Mosque.jpg"
        },
        {
            img: "/Mosque.jpg"
        },
    ];

    return (
        <div className='w-3/4 m-auto'>
            <div className='mt-20'>
                <Slider {...settings}>
                    {data.map((d) => (
                        <div className='h-[450px] rounded-xl' key={d.img}>
                            <img src="/Mosque.jpg" alt='' className='h-44 w-44' />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default DevelopmentSlider;