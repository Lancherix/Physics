import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="Home">
      <div className='Home-hero'></div>
      <div className='Home-subhero'>
        <div className='Home-subsubhero1'></div>
        <div className='Home-subsubhero2'></div>
      </div>
      <div className='Home-subsubhero3'></div>
      <div className='Home-subhero'>
        <div className='Home-subsubhero4'></div>
        <div className='Home-subsubhero5'></div>
      </div>
    </div>
  );
}

export default Home;