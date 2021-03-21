// Importing CSS

import logo from './logo.svg';
import './css/App.css';


import 'bootstrap/dist/css/bootstrap.min.css';

// Importing Components
import Navigation from './components/Navigation';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Navigation />
      <header className="App-header">
        <Profile />
      </header>
    </div>
  );
}

export default App;
