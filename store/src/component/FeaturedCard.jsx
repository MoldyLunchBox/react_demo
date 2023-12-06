import React from 'react'


export const FeaturedCard = ({ product }) => {
    const options = { 
        minimumFractionDigits: 2,
        maximumFractionDigits: 2 
      };
    return (
        <div key={product.id} className='w-[200px] p-3  mb-10 flex flex-col' >
            <div className='h-[200px]'>

                <div className='flex '>
                    <img className='max-h-[200px]' src={process.env.REACT_APP_UPLOAD_URL + product.img.data.attributes.url} />
                </div>
            </div>
            <div className='flex flex-col mt-2'>
                <h2 className=' text-[#252B42] montserratFont font-bold'>{product.title.charAt(0).toUpperCase() + product.title.slice(1)}</h2>
                <h2 className='text-xs montserratFont text-[#737373] font-bold'>{product.categories.data[0].attributes.title.charAt(0).toUpperCase() + product.categories.data[0].attributes.title.slice(1)}</h2>
                <div className="flex text-[#23856D] montserratFont font-bold flex-row gap-4">
                    <h3>${Number(product.price).toLocaleString('en', options)}</h3>
                </div>
            </div>
        </div>
    )
}
