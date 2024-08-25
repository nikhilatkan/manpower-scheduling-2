import React, { useEffect, useState } from 'react';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import SPManpowerImg from "../../assets/images/spManPower_img.png";
import HelloFreshImg from "../../assets/images/HelloFresh_img.png";
import FactormealsImg from "../../assets/images/factor_meals_img.webp";
import "./Slider.css";

function Slider() {
    const data = [
        {
            src: SPManpowerImg,
            alt: "img"
        },
        {
            src: HelloFreshImg,
            alt: "img"
        },
        {
            src: FactormealsImg,
            alt: "img"
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide === data.length - 1 ? 0 : prevSlide + 1));
        }, 3000);
        return () => clearInterval(interval);
    })

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? data.length - 1 : prevSlide - 1));
    };

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === data.length - 1 ? 0 : prevSlide + 1));
    };

    return (
        <div className='carousel'>
            <ArrowCircleLeftIcon onClick={prevSlide} className='arrow arrow-left' />
            <div className='carousel-inner' style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {data.map((item, idx) => (
                    <img
                        src={item.src}
                        alt={item.alt}
                        key={idx}
                        className={currentSlide === idx ? "slide slide-active" : "slide"}
                    />
                ))}
            </div>
            <ArrowCircleRightIcon onClick={nextSlide} className='arrow arrow-right' />
        </div>
    );
}

export default Slider;
