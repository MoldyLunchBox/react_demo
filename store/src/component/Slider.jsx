import React, { useState } from 'react'
import { Carousel } from "@material-tailwind/react";



export const Slider = () => {
    const images = [
        "https://images.pexels.com/photos/52518/jeans-pants-blue-shop-52518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/1138560/pexels-photo-1138560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "https://images.pexels.com/photos/4210866/pexels-photo-4210866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ]
        const [currentIndex, setCurrentIndex] = useState(0);

        const nextSlide = () => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }

        const prevSlide = () => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
        }

        return (
            <div className="relative">
      <div className="flex justify-between absolute w-full top-1/2 transform -translate-y-1/2">
        <button onClick={prevSlide} className="text-white bg-gray-800 p-2 rounded-full focus:outline-none">
          Prev
        </button>
        <button onClick={nextSlide} className="text-white bg-gray-800 p-2 rounded-full focus:outline-none">
          Next
        </button>
      </div>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="w-full max-w-lg h-auto" />
    </div>
        )
    
}
