import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Nav } from './components/presentational/Nav.jsx';
import { Footer } from './components/presentational/Footer.jsx';
import SplashPage from './App/endpoints/splash/components/container/SplashPageConnect.jsx';
import { Auth }  from './App/endpoints/auth/components/presentational/Auth.jsx';

function App() {
  return (
    <Router>
        <div className="App">
            <Nav />
            <Switch>
                <Route exact path="/">
                    <SplashPage />
                </Route>
                <Route path="/login" component={ () => <Auth type="login"  /> } />
                <Route pate="/register" component={ () => <Auth type="register"  /> } />
            </Switch>
            <Footer />
        </div>
    </Router>
  );
}

export default App;
