import React from 'react'
import { FeaturedCard } from './FeaturedCard';

export const FeaturedProducts = ({ title, data }) => {



    return (
        <div className='flex flex-col  my-5'>
            <div className='mx-10 mb-2 text-lg font-semibold'>
                {title}
            </div>
            <div className=' mx-12 flex flex-row flex-wrap gap-2 justify-between '>
                {data.map((product) => (
                    <div className="max-w-[200px]">
                        <FeaturedCard product={product} />
                    </div>
                ))}
            </div>
        </div>
    )
}
