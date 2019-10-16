import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import PageHeader from './components/page_structure/page_header';
import Footer from './components/page_structure/footer';
import NewsfeedComponent from './components/newsfeed.js';
import ElectionComponent from './components/election.js';
import MetrixComponent from './components/metrix.js';
import ProfileComponent from './components/profile.js';

class App extends React.Component {
   render() {
      return (
        <Router>
        <div className="AppContainer">
          <nav className="nav">
            <ul className="nav-links">
              <li>
                <Link to="/"> Newsfeed </Link>
              </li>
              <li>
                <Link to="/election"> Election </Link>
              </li>
              <li>
                <Link to="/metrix"> Metrix </Link>
              </li>
              <li>
                <Link to="/profile"> Profile </Link>
              </li>
            </ul>
          </nav>
          <PageHeader />

          <Route exact path='/' component={NewsfeedComponent}></Route>    
          <Route exact path='/election' component={ElectionComponent}></Route>
          <Route exact path='/metrix' component={MetrixComponent}></Route>
          <Route exact path='/profile' component={ProfileComponent}></Route>
          
          <Footer />
        </div>
      </Router>
      );
   }
}

export default App;