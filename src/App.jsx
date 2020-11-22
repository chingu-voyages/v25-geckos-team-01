import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Nav } from './components/presentational/Nav.jsx';
import { Footer } from './components/presentational/Footer.jsx';
import SplashPage from './App/endpoints/splash/components/container/SplashPageConnect.jsx';
import LoginRegister  from './App/endpoints/login/components/container/LoginRegisterConnect.jsx';

function App() {
  return (
    <Router>
        <div className="App">
            <Nav />
            <Switch>
                <Route exact path="/">
                    <SplashPage />
                </Route>
                <Route path="/login" component={ () => <LoginRegister type="login"  /> } />
                <Route pate="/register" component={ () => <LoginRegister type="register"  /> } />
            </Switch>
            <Footer />
        </div>
    </Router>
  );
}

export default App;
