import React from 'react'


export const FeaturedCard = ({ product }) => {
    return (
        <div key={product.id} className='w-[200px] mb-10 flex flex-col' >
            <div className='h-[200px]'>

                <div className='flex '>
                    <img className='max-h-[200px]' src={process.env.REACT_APP_UPLOAD_URL + product.img.data.attributes.url} />
                </div>
            </div>
            <div className='flex flex-col'>
                <h2>{product.title}</h2>
                <div className="flex flex-row gap-4">
                    <h3 className='text-gray-400 line-through'>${product.oldPrice}</h3>
                    <h3>${product.price}</h3>
                </div>
            </div>
        </div>
    )
}
