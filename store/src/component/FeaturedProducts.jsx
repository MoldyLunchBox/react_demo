import React from 'react'
import { FeaturedCard } from './FeaturedCard';

export const FeaturedProducts = ({ title }) => {
    const data = [
        {
            name: "jean tshirt",
            image1: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
            image2: "https://images.pexels.com/photos/981619/pexels-photo-981619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            id: 1,
            oldPrice: 5,
            price: 10,
        },
        {
            name: "jean tshirt",
            image1: "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
            image2: "",
            id: 2,
            oldPrice: 5,
            price: 10,
        },
        {
            name: "jean tshirt",
            image1: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
            image2: "",
            id: 3,
            oldPrice: 5,
            price: 10,
        },
    ];


    return (
        <div className='flex flex-col my-5'>
            <div className='mx-10 mb-2 text-lg font-semibold'>
                {title}
            </div>
            <div className=' mx-12 flex flex-row gap-2 justify-between '>
                {data.map((product) => (
                    <div className="max-w-[200px] bg-black">
                        <FeaturedCard product={product} />
                    </div>
                ))}
            </div>
        </div>
    )
}
