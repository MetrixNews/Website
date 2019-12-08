import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Spinner from 'react-bootstrap/Spinner';
import loadCategories from '../actionCreators/newsfeed';
import {getCategoriesError, getCategories, getCategoriesPending} from '../reducers/newsfeed';

import Topic from './newsfeed/topic'
import '../app.scss';
import "./page_structure/page_structure.scss"

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
      paddingTop: this.props.styles.showSidebar ? 20 : this.props.styles.topBarHeight,
      paddingRight: 10,
      paddingBottom: this.props.styles.showSidebar ? 20 : this.props.styles.footerMenuHeight + 20,
      paddingLeft: this.props.styles.showSidebar ? this.props.styles.sidebarWidth + 20 : 10
    };

      if(!this.shouldComponentRender()) return <Spinner />

      else return (
        <div style={contentStyle}>
          <div className="pageDescription">
            <h1>Newsfeed</h1>
          </div>
          <div className="bg">
            {/* {this.props.categories.map((category, i) => (
              <Topic
                key={i}
                topic={category}
              />
            ))} */}
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