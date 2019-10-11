import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import NewsfeedComponent from './components/newsfeed.js';
import news_feed from './components/newsfeed.js';
import ElectionComponent from './components/election.js';
import MetrixComponent from './components/metrix.js';
import ProfileComponent from './components/profile.js';

class App extends React.Component {
   render() {
      return (
        <Router>
        <div>
          <ul>
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

          <Route exact path='/' render={(props) => <NewsfeedComponent {...props.news_feed} title={news_feed.title} />}
              />)
            }/>       
          <Route exact path='/election' component={ElectionComponent}></Route>
          <Route exact path='/metrix' component={MetrixComponent}></Route>
          <Route exact path='/profile' component={ProfileComponent}></Route>

        </div>
      </Router>
      );
   }
}

export default App;