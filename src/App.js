import './App.scss';
import { Nav } from './components/presentational/Nav.js';
import { Footer } from './components/presentational/Footer.js';
import SplashPage from './components/container/SplashPageConnect.js';

function App() {
  return (
    <div className="App">
      <Nav />
      <SplashPage />
      <Footer />
    </div>
  );
}

export default App;
