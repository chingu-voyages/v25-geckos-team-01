import React, { useEffect } from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import store from './store';

import Nav from './components/container/NavConnect.jsx';
import { Footer } from './components/presentational/Footer.jsx';
import SplashPage from './App/endpoints/splash/components/container/SplashPageConnect.jsx';
import { Auth }  from './App/endpoints/auth/components/presentational/Auth.jsx';
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './App/endpoints/auth/actions';

if( localStorage.token ) {
  setAuthToken( localStorage.token );
}

const App = () => {

  useEffect( () => {
    store.dispatch( loadUser() );
  }, [] );

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
