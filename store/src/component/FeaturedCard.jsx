import React from 'react'

export const FeaturedCard = ({ product }) => {
    return (
        <div key={product.id} className=' flex flex-col' >
            <div style={{
                background: url("foo.jpg")
            }}>

                <img className='hover:hidden object-contain  ' src={product.image1} />
                <img className='hover:flex object-contain hidden' src={product.image2} />
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
