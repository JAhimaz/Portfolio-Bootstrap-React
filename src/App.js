// Importing CSS

import logo from './logo.svg';
import './css/App.css';


import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-particles-js';

// Importing Components
import Navigation from './components/Navigation';
import Profile from './components/Profile';

function App() {

  return (

    <div className="App">
      <Navigation />
      <header className="App-header" >
        <Particles className="particle-js"
          params={{
            particles: {
              number: {
                value: 40,
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
      </header>
    </div>
  );

  
}

export default App;
