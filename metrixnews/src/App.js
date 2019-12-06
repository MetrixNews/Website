import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from './configureStore'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInfo } from '@fortawesome/free-solid-svg-icons'
import {faNewspaper} from '@fortawesome/free-solid-svg-icons'
import {faLandmark } from '@fortawesome/free-solid-svg-icons'

import FooterMenu from './components/page_structure/FooterMenu'
import Sidebar from './components/page_structure/Sidebar'
import TopBar from './components/page_structure/TopBar'

import NewsfeedComponent from './components/newsfeed.js';
import ElectionComponent from './components/election.js';
import MetrixComponent from './components/metrix.js';

import './app.scss';

const store = configureStore()

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: 0,
      windowHeight: 0
    };
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  updateDimensions() {
    let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;

    this.setState({ windowWidth, windowHeight });
  }

   render() {
    let newspaper = <FontAwesomeIcon icon={faNewspaper} />;
    let election = <FontAwesomeIcon icon={faLandmark} />;
    let about = <FontAwesomeIcon icon={faInfo} />;

    const { windowWidth } = this.state;

    const styles = {
      white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      topBarHeight: 40,
      footerMenuHeight: 50,
      showFooterMenuText: windowWidth > 500,
      showSidebar: windowWidth > 768,
      sidebarWidth: windowWidth < 1100 ? 50 : 150,
      sidebarCollapsed: windowWidth < 1100
    };

    const menuItems = styles.showSidebar
    ? [
        { icon: newspaper, text: "NewsFeed" },
        { icon: election, text: "Election" },
        { icon: about, text: "About" },
        { icon: `⚙`, text: "Settings" }
      ]

    : [
      { icon: newspaper, text: "NewsFeed" },
      { icon: election, text: "Election" },
      { icon: about, text: "About" },
      ];

      return (
        <div style={{
          backgroundColor: styles.black(0.05),
          minHeight: "100vh",
          position: "relative"
        }}>

        <Provider store={store}>
          <Router>
            <ul>
                {styles.showSidebar ? (
                  <Sidebar menuItems={menuItems} styles={styles} />
                ) : (
                  <TopBar styles={styles} />
                )}

                {!styles.showSidebar && (
                  <FooterMenu menuItems={menuItems} styles={styles} />
                )}
                <Route exact path='/' component={NewsfeedComponent}></Route>    
                <Route exact path='/election' component={ElectionComponent}></Route>
                <Route exact path='/metrix' component={MetrixComponent}></Route>
              </ul>
            </Router>
          </Provider>
      </div>
      );
   }
}

