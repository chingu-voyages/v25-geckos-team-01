import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Nav } from './components/presentational/Nav.jsx';
import { Footer } from './components/presentational/Footer.jsx';
import SplashPage from './components/container/SplashPageConnect.jsx';

function App() {
  return (
    <Router>
        <div className="App">
          <Nav />
          <SplashPage />
          <Footer />
        </div>
    </Router>
  );
}

export default App;
