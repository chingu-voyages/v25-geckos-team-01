import './App.scss';
import { Nav } from './components/presentational/Nav.jsx';
import { Footer } from './components/presentational/Footer.jsx';
import SplashPage from './components/container/SplashPageConnect.jsx';

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
