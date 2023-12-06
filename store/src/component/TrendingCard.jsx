import React from 'react'

export const TrendingCard = ({ product }) => {
    const options = { 
        minimumFractionDigits: 2,
        maximumFractionDigits: 2 
      };

      function calculateDiscountedPrice(originalPrice, discountPercentage) {
        // Ensure the discount percentage is between 0 and 100
        if (discountPercentage < 0 || discountPercentage > 100) {
          console.error('Invalid discount percentage');
          return null; // or handle the error accordingly
        }
      
        // Calculate the discounted price
        const discountAmount = (originalPrice * discountPercentage) / 100;
        const discountedPrice = originalPrice - discountAmount;
      
        return discountedPrice;
      }
    return (
        <div key={product.id} className='w-[200px] flex flex-col' >
            <div className='h-[230px] relative'>

                <div className='img-area '>
                    <img className='img-back max-w-[200px] max-h-[200px]' src={process.env.REACT_APP_UPLOAD_URL + product.img.data.attributes.url} />
                    <img className='img-front  max-w-[200px] max-h-[200px]' src={product.img2.data ? process.env.REACT_APP_UPLOAD_URL + product.img2.data.attributes.url : "#"} />
                </div>
            </div>
            <div className='flex flex-col'>
                <h2 className='text-[#252B42] montserratFont font-bold'>{product.title.charAt(0).toUpperCase() + product.title.slice(1)}</h2>
                <div className="flex flex-row gap-4">
                    <h3 className='text-gray-400 line-through'>${Number(product.price).toLocaleString('en', options)}</h3>
                    <h3 className='text-[#23856D] montserratFont font-bold'>${Number(calculateDiscountedPrice(product.price, product.discount)).toLocaleString('en', options)}</h3>
                </div>
            </div>
        </div>
    )
}
