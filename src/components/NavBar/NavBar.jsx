import React, { useState, useEffect } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import logo1 from '../ArtWork/logo3.png';
import searchIcon from '../ArtWork/search.svg';

function NavBar() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const handleSubMenuMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleSubMenuMouseLeave = () => {
    setHoveredItem(null);
  };

  useEffect(() => {
    console.log("Hovered item:", hoveredItem);
  }, [hoveredItem]);

  return (
    <div className="NavBar">
      <div className="NavBar-Top">
        <Link to="/"><img className="NavBar-Logo1" src={logo1} alt="Logo" /></Link>
        <div
          className="NavBar-Core"
          onMouseEnter={() => handleMouseEnter('core')}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/core" className="Link"><button className='NavBar-button'>Core</button></Link>
          {hoveredItem === 'core' && (
            <div
              className="NavBar-SubMenu"
              onMouseEnter={() => handleSubMenuMouseEnter('core')}
              onMouseLeave={handleSubMenuMouseLeave}
            >
              <div className='NavBar-ItemTitle'>
                <Link to="/aslevel">Core</Link>
              </div>
              <div className="NavBar-Item">
                <Link to="/store/option1">Cinematica en una Dimension</Link>
                <Link to="/store/option2">Caida Libre</Link>
                <Link to="/store/option3">Vectores</Link>
              </div>
              <div className="NavBar-Item">
                <Link to="/aslevel/option1">Movimiento Parabolico</Link>
                <Link to="/aslevel/option2">Dinamica</Link>
                <Link to="/aslevel/option3">Movimiento Circular Uniforme</Link>
              </div>
            </div>
          )}
        </div>
        <div
          className="NavBar-Labs"
          onMouseEnter={() => handleMouseEnter('labs')}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/olimpiadas" className="Link"><button className='NavBar-button'>Labs</button></Link>
          {hoveredItem === 'labs' && (
            <div
              className="NavBar-SubMenu"
              onMouseEnter={() => handleSubMenuMouseEnter('labs')}
              onMouseLeave={handleSubMenuMouseLeave}
            >
              <div className='NavBar-ItemTitle'>
                <Link to="/aslevel">Labs</Link>
              </div>
              <div className="NavBar-Item">
                <Link to="/sports/option1">Primera Ronda</Link>
                <Link to="/sports/option2">Segunda Ronda</Link>
                <Link to="/sports/option3">Ronda Final</Link>
              </div>
            </div>
          )}
        </div>
        <div
          className="NavBar-ASLevel"
          onMouseEnter={() => handleMouseEnter('aslevel')}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/aslevel" className="Link"><button className='NavBar-button'>AS Level</button></Link>
          {hoveredItem === 'aslevel' && (
            <div
              className="NavBar-SubMenu"
              onMouseEnter={() => handleSubMenuMouseEnter('aslevel')}
              onMouseLeave={handleSubMenuMouseLeave}
            >
              <div className='NavBar-ItemTitle'>
                <Link to="/aslevel">AS Level</Link>
              </div>
              <div className="NavBar-Item">
                <Link to="/aslevel/option1">Quantities and units</Link>
                <Link to="/aslevel/option2">Kinematics</Link>
                <Link to="/aslevel/option3">Dynamics</Link>
              </div>
              <div className="NavBar-Item">
                <Link to="/aslevel/option3">Forces, density and pressure</Link>
                <Link to="/aslevel/option3">Work, energy and power</Link>
                <Link to="/aslevel/option3">Deformation of solids</Link>
              </div>
              <div className="NavBar-Item">
                <Link to="/aslevel/option3">Waves</Link>
                <Link to="/aslevel/option3">Superposition</Link>
                <Link to="/aslevel/option3">Electricity</Link>
              </div>
              <div className="NavBar-Item">
                <Link to="/aslevel/option3">D.C. circuitsy</Link>
                <Link to="/aslevel/option3">Particle physics</Link>
              </div>
            </div>
          )}
        </div>
        <div
          className="NavBar-Olimpiadas"
          onMouseEnter={() => handleMouseEnter('olimpiadas')}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/olimpiadas" className="Link"><button className='NavBar-button'>Olimpiadas</button></Link>
          {hoveredItem === 'olimpiadas' && (
            <div
              className="NavBar-SubMenu"
              onMouseEnter={() => handleSubMenuMouseEnter('olimpiadas')}
              onMouseLeave={handleSubMenuMouseLeave}
            >
              <div className='NavBar-ItemTitle'>
                <Link to="/aslevel">Olimpiadas</Link>
              </div>
              <div className="NavBar-Item">
                <Link to="/sports/option1">Primera Ronda</Link>
                <Link to="/sports/option2">Segunda Ronda</Link>
                <Link to="/sports/option3">Ronda Final</Link>
              </div>
            </div>
          )}
        </div>
        <div
          className="NavBar-Store"
          onMouseEnter={() => handleMouseEnter('books')}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/store" className="Link"><button className='NavBar-button'>Books</button></Link>
          {hoveredItem === 'books' && (
            <div
              className="NavBar-SubMenu"
              onMouseEnter={() => handleSubMenuMouseEnter('books')}
              onMouseLeave={handleSubMenuMouseLeave}
            >
              <div className='NavBar-ItemTitle'>
                <Link to="/aslevel">Books</Link>
              </div>
              <div className="NavBar-Item">
                <Link target='blanck_' to="http://www0.unsl.edu.ar/~cornette/FISICA_LQ/Francis%20Sears%2C%20Mark%20Zemansky.pdf">Fisica Universitaria</Link>
                <Link target='blanck_' to="https://web.seducoahuila.gob.mx/biblioweb/upload/La%20Fisica%20aventura%20del%20pensamiento%20-%20Albert%20Einstein%20y%20Leopold%20Infeld.pdf">Aventura del Pensamiento</Link>
                <Link target='blanck_' to="https://ia903106.us.archive.org/5/items/CambridgeInternationalASAndALevelPhysicsCoursebook/Cambridge%20International%20AS%20and%20A%20Level%20Physics%20Coursebook.pdf">AS and A Level Textbook</Link>
              </div>
            </div>
          )}
        </div>
        <Link to="/"><img className="NavBar-searchIcon" src={searchIcon} alt="Search" /></Link>
      </div>
    </div>
  );
}

export default NavBar;