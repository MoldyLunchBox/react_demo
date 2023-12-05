import logo from './logo.svg';
import './App.css';
import { Slider } from './component/Slider';
import { FeaturedProducts } from './component/FeaturedProducts';

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
  return (
    <div>
     <Slider />
     <FeaturedProducts data={dataTrending} title="Trending Products"/>
     <FeaturedProducts data={dataFeatured} title="Featured Products"/>
    </div>
  );
}

export default App;
