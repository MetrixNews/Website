import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from './configureStore'

import StatusBar from './components/page_structure/status_bar'
import Footer from './components/page_structure/footer';
import NewsfeedComponent from './components/newsfeed.js';
import ElectionComponent from './components/election.js';
import MetrixComponent from './components/metrix.js';

import newsfeed from './assets/icons/nav/newsfeed.png';
import election from './assets/icons/nav/election.png';
import metrix from './assets/icons/nav/metrix.png';

import './app.scss';

const store = configureStore()

export default class App extends React.Component {
   render() {
      return (
        <div className="appContainer">
        <StatusBar />
        <Provider store={store}>
          <Router>
          <div>
            <nav className="nav">
              <ul className="nav-links">
                <li>
                  <Link to="/"><img src={newsfeed} alt="newsfeed" className="navIcon"></img></Link>
                </li>
                <li>
                  <Link to="/election"> <img src={election} alt="election" className="navIcon"></img> </Link>
                </li>
                <li>
                  <Link to="/metrix"> <img src={metrix} alt="metrix" className="navIcon"></img> </Link>
                </li>
              </ul>
            </nav>

            <Route exact path='/' component={NewsfeedComponent}></Route>    
            <Route exact path='/election' component={ElectionComponent}></Route>
            <Route exact path='/metrix' component={MetrixComponent}></Route>
            
            <Footer />
          </div>
        </Router>
      </Provider>
      </div>
      );
   }
}

