import logo from './logo.svg';
import './App.css';
import { Slider } from './component/Slider';
import { FeaturedProducts } from './component/FeaturedProducts';
import { OurMission } from './component/OurMission';
import { useEffect, useState } from 'react';
import axios from "axios"
const dataTrending = [
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
  {
      name: "jean tshirt",
      image1: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
      image2: "",
      id: 3,
      oldPrice: 5,
      price: 10,
  },
];


const dataFeatured = [
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
  {
      name: "jean tshirt",
      image1: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
      image2: "",
      id: 3,
      oldPrice: 5,
      price: 10,
  },
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
{
    name: "jean tshirt",
    image1: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
    image2: "",
    id: 3,
    oldPrice: 5,
    price: 10,
},
];

function App() {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                const res = await axios.get(process.env.REACT_APP_API_URL + "products", {
                    headers :{
                        Authorization: "bearer " + process.env.REACT_APP_API_TOKEN
                    }
                })
                setProducts(res.data.data)
            }
            catch (err){
                console.log(err)
            }

        }
        fetchData()
    },[])
    useEffect(()=>{
        console.log(products)
    },[products])
  return (
    <div>
     <Slider />
     <div className='space-y-10 '>

     <FeaturedProducts data={dataTrending} title="Trending Products"/>
     <FeaturedProducts data={dataFeatured} title="Featured Products"/>
     <OurMission />
     </div>
    </div>
  );
}

export default App;
