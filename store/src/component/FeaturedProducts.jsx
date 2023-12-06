import React, { useEffect, useState } from 'react'
import { TrendingCard } from './TrendingCard';
import axiosInstance from '../requests/axiosInstance'; // Importing custom Axios instance
import { FeaturedCard } from './FeaturedCard';

export const FeatureProducts = ({ type, title }) => {
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


    return (
        <div className='flex flex-col  my-5'>
            <div className={`mx-10 text-2xl font-semibold ${type === "featured" ? "mb-10" : "mb-2 "}`} >
                {title}
            </div>
            <div className='mx-12 flex flex-row flex-wrap gap-2 justify-center items-center'>
                {products.map((product, index) => (
                    <div key={index} className="max-w-[200px] md:my-10">
                        {
                            type === "trending" ?
                            <TrendingCard product={product.attributes} />
                            :
                            <FeaturedCard product={product.attributes} />

                        }
                    </div>
                ))}
            </div>
        </div>
    )
}
