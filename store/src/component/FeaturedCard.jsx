import React from 'react'

export const FeaturedCard = ({ product }) => {
    console.log(product.img.data.attributes.url)
    return (
        <div key={product.id} className='w-[200px] flex relative flex-col' >
            <div className='img-area h-[133px]'>
                <img className='img-back max-w-[200px]' src={process.env.REACT_APP_UPLOAD_URL + product.img.data.attributes.url} />
                <img className='img-front ' src={process.env.REACT_APP_UPLOAD_URL + product.img2.data.attributes.url} />
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
