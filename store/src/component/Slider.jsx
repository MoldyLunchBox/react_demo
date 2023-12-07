import React, { useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
export const Slider = () => {
    const images = [
        "slider-1.jpg",
        "slider-2.jpg",
        "slider-3.jpg",
        "slider-4.jpg",
    ]
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }

    return (
        <div className="relative flex justify-center items-center overflow-hidden  w-full h-full bg-red-200">

            <div className='flex flex-row img-slider w-full transition-transform ease-out duration-500  h-full ' style={{ transform: `translate(-${currentIndex * 100}%)` }}>
                {images.map((image) => {
                    return <img
                        key={image}
                        src={image}
                        alt={`Slide ${currentIndex}`}
                        className=" "
                    />
                })}
            </div>


            <div className="flex justify-between absolute w-full  h-full top-1/2 transform -translate-y-1/2">
                <button onClick={prevSlide} className="transition ease-in-out delay-150 text-black hover:bg-opacity-25 hover:bg-gray-400 p-2 focus:outline-none">
                    <ArrowBackIosIcon />
                </button>
                <button onClick={nextSlide} className="transition ease-in-out delay-150 text-black hover:bg-opacity-25 hover:bg-gray-400 p-2 focus:outline-none">
                    <ArrowForwardIosIcon />
                </button>
            </div>
            <div className="absolute bottom-4 left-0 right-0">
                <div className="flex justify-center items-center gap-2">
                    {images.map((_, i) => (
                        <div className={`w-3 h-3 bg-black border-2 border-white rounded-full ${i == currentIndex ? "p-2" : "bg-opacity-50"}`}>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )

}
