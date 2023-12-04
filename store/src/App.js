import logo from './logo.svg';
import './App.css';
import { Slider } from './component/Slider';
import { FeaturedProducts } from './component/FeaturedProducts';

function App() {
  return (
    <div>
     <Slider />
     <FeaturedProducts title="Trending Products"/>
    </div>
  );
}

export default App;
