// Importing CSS

// import logo from './logo.svg';
import './css/App.css';


import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-particles-js';

// Importing Components
import Navigation from './components/Navigation';
import Profile from './components/Profile';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';

function App() {

  return (

    <div className="App">
      <Navigation />
      <header className="App-header" >
        <Particles className="particle-js"
          params={{
            particles: {
              number: {
                value: 45,
                density: {
                  enable: false,
                  value_area: 300
                }
              },
              size: {
                value: 3, 
              },
              move: {
                enable: true,
                speed: 0.5
              },
              opacity: {
                value: 0.1,
              },
              line_linked: {
                enable: true,
                opacity: 0.1,
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: true,
                  mode: "grab",
                }
              },
              modes: {
                grab: {
                  distance: 200,
                }
              }
            }
          }}
        />
        <Profile />
        <a name="aboutme" />
        <AboutMe />
        <a name="portfolio" />
        <Portfolio />
      </header>
    </div>
  );

  
}

export default App;
