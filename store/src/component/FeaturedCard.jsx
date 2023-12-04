import React from 'react'

export const FeaturedCard = ({ product }) => {
    const switchImageEffect = {

    }
    return (
        <div key={product.id} className=' flex  flex-col' >
            <div className='img-area overflow-hidden'>
                <img className='img-back max-w-[200px]' src={product.image1} />
                <img className='img-front ' src={product.image2} />
            </div>
            <div className='flex flex-col'>
                <h2>{product.name}</h2>
                <div className="flex flex-row gap-4">
                    <h3 className='text-gray-400 line-through'>${product.oldPrice}</h3>
                    <h3>${product.price}</h3>
                </div>
            </div>
        </div>
    )
}
