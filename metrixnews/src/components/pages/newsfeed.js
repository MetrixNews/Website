import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Scroll from 'react-scroll'

import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import loadCategories from '../../actionCreators/newsfeed';
import {getCategoriesError, getCategories, getCategoriesPending} from '../../reducers/newsfeed';

import Topic from '../topics/topic';
import '../../app.scss';
import '../news/newsfeed.scss';

const pageDescription = {
  textAlign: "center",
  color: "var(--highlight-color)",
  fontSize: "24pt",
  fontWeight: "bold",
}

const menuItem = {
  fontSize: "10pt",
  fontWeight: "bold",
  border: "solid 2px var(--metrix-color)",
  borderRadius: "7px",
  backgroundColor: "var(--metrix-color)",
  color: "var(--bg-color)", 
}
const loader = {
  margin: "0 auto",
  textAlign: "center",
}

let Link = Scroll.Link;

class Newsfeed extends Component {
  constructor(props) {
      super(props);
      this.shouldComponentRender = this.shouldComponentRender.bind(this);
      this.state = {
        categories: [],
      };
    }
  
  componentDidMount() {
      const {loadedCategories} = this.props;
      loadedCategories();
  }

  shouldComponentRender() {
      const {pending} = this.props;
      if(this.pending === false) return false;
      // more tests
      return true;
  }

  render() {
    const contentStyle = {
      paddingTop: this.props.styles.showSidebar ? 65 : this.props.styles.topBarHeight + 65,
      paddingRight: 10,
      paddingBottom: this.props.styles.showSidebar ? 10 : this.props.styles.footerMenuHeight + 20,
      paddingLeft: this.props.styles.showSidebar ? this.props.styles.sidebarWidth + 10 : 10
    };
      return (
        <div style={contentStyle}>
          <div style={pageDescription}>
            <h1>Political Newsfeed</h1>
          </div>
          <div style={loader}>
            <Loader
              type="Oval"
              color="var(--metrix-color)"
              height={75}
              width={75}
              timeout={1000} //.5 secs
            />
          </div>
          <div className="app">
            <div className="full hide-scroll">
              <ul className="menu">
                {this.props.categories.map((category, i) => ( 
                  <Link 
                    topic={category}
                    key={i}
                    to={category.topic}
                    offset={-80}
                    spy={true} 
                    smooth={true} 
                    duration={500} 
                    activeClass='some-active-class'
                    >
                      <li style={menuItem} key={i} topic={category}>
                       {category.topic}
                      </li>
                  </Link>
                ))}
                </ul>
              </div> 
          </div>
          <div className="bg">
            {this.props.categories.map((category, i) => (
              <Topic
                key={i}
                topic={category}
              />
            ))}
          </div>
        </div>
      )
  }
}


Newsfeed.propTypes = {
  categories: PropTypes.array,
  category: PropTypes.array,
  pending: PropTypes.bool
}

const mapStateToProps = state => ({
  error: getCategoriesError(state),
  categories: getCategories(state),
  pending: getCategoriesPending(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
  loadedCategories: loadCategories
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Newsfeed );