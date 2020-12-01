import React, { useEffect } from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import store from './store';
import { connect } from 'react-redux';

import Nav from './components/container/NavConnect.jsx';
import { Footer } from './components/presentational/Footer.jsx';
import SplashPage from './App/endpoints/splash/components/container/SplashPageConnect.jsx';
import { Auth }  from './App/endpoints/auth/components/presentational/Auth.jsx';
import UserDashboard from './App/endpoints/user/components/container/UserDashboardConnect.jsx';
import Tasks from './App/endpoints/tasks/components/container/TasksConnect.jsx';

import setAuthToken from './utils/setAuthToken';
import { loadUser } from './App/endpoints/auth/actions';

if( localStorage.token ) {
  setAuthToken( localStorage.token );
}

const App = ( { auth } ) => {

  useEffect( () => {
    store.dispatch( loadUser() );
  }, [] );

  return (
    <Router>
        <div className="App">
            <Nav />
            <Switch>
                <Route exact path="/">
                    { !auth.isAuthenticated ?
                      <SplashPage />
                      :
                      <UserDashboard />
                    }
                </Route>
                <Route path="/login" component={ () => <Auth type="login"  /> } />
                <Route path="/register" component={ () => <Auth type="register"  /> } />
                <Route path="/projects" component={ () => <Tasks /> } />
            </Switch>
            <Footer />
        </div>
    </Router>
  );
}

function mapStateToProps( state ) {
  return { auth: state.auth }
}

export default connect( mapStateToProps )( App );
