import { useEffect } from 'react';
// Importing CSS

// import logo from './logo.svg';
import './css/App.css';
import './css/root.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-particles-js';

// Importing Components
import Navigation from './components/Navigation';
import Profile from './components/Profile';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Skills from './components/Skills';

import { pageStyling } from './EditMe';

function App() {

  useEffect(() => {    
    var root = document.querySelector(':root');
    root.style.setProperty('--bg-color', pageStyling.backgroundColor);
    root.style.setProperty('--bg-over', pageStyling.foregroundColor);
    root.style.setProperty('--primary-color', pageStyling.primaryColor);
    root.style.setProperty('--secondary-color', pageStyling.secondaryColor);
    root.style.setProperty('--font', pageStyling.font);
    root.style.setProperty('--text-color', pageStyling.textColor);
    root.style.setProperty('--sub-text-color', pageStyling.subTextColor);
  });

  return (
    <div className="App">
      <Navigation />
      <header className="App-header" >
        {pageStyling.particleEffect && (
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
        )}
        <Profile />
        <a name="aboutme" />
        <AboutMe />
        <a name="portfolio" />
        <Portfolio />
        <a name="experience" />
        <Experience />
        <a name="skills" />
        <Skills />
      </header>
    </div>
  );

  
}

export default App;
