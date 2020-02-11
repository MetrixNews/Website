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
import CookieConsent from "react-cookie-consent";

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

    const { windowWidth } = this.state;

    const styles = {
      white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      topBarHeight: 40,
      footerMenuHeight: 50,
      showFooterMenuText: windowWidth > 500,
      showSidebar: windowWidth > 1224,
      sidebarWidth: windowWidth < 1100 ? 50 : 125,
      sidebarCollapsed: windowWidth < 1100,
    };

    const linkStyles = {
      fontSize: 24,
      color: "#492354",
      textAlign: "center",

    }

    let newspaper = <Link to='./' style={linkStyles}> <FontAwesomeIcon icon={faNewspaper} /></Link>;
    let election = <Link to='./election' style={linkStyles}><FontAwesomeIcon icon={faLandmark} /></Link> ;
    let about = <Link to='./metrix' style={linkStyles}><FontAwesomeIcon icon={faInfo} style={{marginRight: 10}} /></Link>;

    const menuItems = styles.showSidebar
    ? [
        { icon: newspaper},
        { icon: election},
        { icon: about}
      ]

    : [
      { icon: newspaper},
      { icon: election},
      { icon: about},
      ];

      return (
        <div style={{
          backgroundColor: "var(--bg-color)",
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

                <Route exact path="/" render={props => 
                    (<NewsfeedComponent {...props} styles={styles} state={this.state}/>)
                } ></Route> 

                  <Route exact path="/election" render={props => 
                    (<ElectionComponent {...props} styles={styles} state={this.state}/>)
                } ></Route> 

                  <Route exact path="/metrix" render={props => 
                    (<MetrixComponent {...props} styles={styles} state={this.state}/>)
                } ></Route> 

              </ul>
            </Router>
          </Provider>
          <CookieConsent
              style={{ background: "var(--metrix-color)", fontSize: "10pt" }}
              buttonStyle={{ background: "var(--bg-color)", fontSize: "10pt" }}
              expires={150}>
              <span>This website uses cookies to enhance the user experience</span>

          </CookieConsent>
      </div>
      );
   }
}

