import React, { useEffect } from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import store from './store';
import { connect } from 'react-redux';

import Nav from './GlobalComponents/container/NavConnect.jsx';
import { Footer } from './GlobalComponents/presentational/Footer.jsx';
import SplashPage from './App/splash/container/SplashPageConnect.jsx';
import { Auth }  from './App/auth/presentational/Auth.jsx';
import UserDashboard from './App/user/container/UserDashboardConnect.jsx';
import Tasks from './App/tasks/container/TasksConnect.jsx';

import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/authActions';

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
                <Route path="/tasks" component={ () => <Tasks /> } />
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
