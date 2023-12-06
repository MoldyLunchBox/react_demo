import React, { useEffect, useState } from 'react'
import { FeaturedCard } from './FeaturedCard';
import axiosInstance from '../requests/axiosInstance'; // Importing custom Axios instance

export const FeaturedProducts = ({ type, title }) => {
const [products, setProducts] = useState([])
useEffect(()=>{
    const fetchData = async ()=>{

        try {
            const res = await axiosInstance.get(process.env.REACT_APP_API_URL + `products?populate=*&[filters][type][$eq]=${type}`, {
                headers :{
                    Authorization: "bearer " + process.env.REACT_APP_API_TOKEN
                }
            })
            setProducts(res.data.data)
        }
        catch (err){
            
        }
    }
    fetchData()
},[])

useEffect(()=>{
console.log(products)
},[products])

    return (
        <div className='flex flex-col  my-5'>
            <div className='mx-10 mb-2 text-lg font-semibold'>
                {title}
            </div>
            <div className=' mx-12 flex flex-row flex-wrap gap-2 justify-between '>
                {products.map((product, index) => (
                    <div key={index} className="max-w-[200px]">
                        <FeaturedCard product={product.attributes} />
                    </div>
                ))}
            </div>
        </div>
    )
}
