import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Spinner from 'react-bootstrap/Spinner';
import Scroll from 'react-scroll'
import Link from 'react-scroll'

import loadCategories from '../actionCreators/newsfeed';
import {getCategoriesError, getCategories, getCategoriesPending} from '../reducers/newsfeed';

import Topic from './newsfeed/topic';
import '../app.scss';
import "./page_structure/page_structure.scss";
import './newsfeed/newsfeed.scss';

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
      paddingTop: this.props.styles.showSidebar ? 40 : this.props.styles.topBarHeight + 40,
      paddingRight: 10,
      paddingBottom: this.props.styles.showSidebar ? 10 : this.props.styles.footerMenuHeight + 20,
      paddingLeft: this.props.styles.showSidebar ? this.props.styles.sidebarWidth + 10 : 10
    };

    const menuItem = {
      fontSize: "8pt",
      fontWeight: "bold",
      border: "solid 2px var(--metrix-color)",
      borderRadius: "7px",
      backgroundColor: "var(--metrix-color)",
      color: "var(--bg-color)", 
  }

  let Link = Scroll.Link;

      if(!this.shouldComponentRender()) return <Spinner />

      else return (
        <div style={contentStyle}>
          <div className="pageDescription">
            <h1>Political Newsfeed</h1>
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
                    className='menuItem' 
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

// Newsfeed.propTypes = {
//   arrayWithShape: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     source: PropTypes.string.isRequired,
//   })).isRequired,
// }

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