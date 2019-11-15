import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Spinner from 'react-bootstrap/Spinner';
import loadCategories from '../actionCreators/newsfeed';
import {getCategoriesError, getCategories, getCategoriesPending} from '../reducers/newsfeed';

import Spectrum from './newsfeed/spectrum/news_spectrum'

class Newsfeed extends Component {
  constructor(props) {
      super(props);

      this.shouldComponentRender = this.shouldComponentRender.bind(this);
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
      const {categories} = this.props;

      if(!this.shouldComponentRender()) return <Spinner />

      return (
        <div>
          <Spectrum categories={this.props.categories} />
        </div>
      )
  }
}

Newsfeed.propTypes = {
  categories: PropTypes.array,
  pending: PropTypes.bool
}

const mapStateToProps = state => ({
  error: getCategoriesError(state),
  categories: getCategories(state),
  pending: getCategoriesPending(state)

  // categories: state.categories.categories,
  // loading: state.articles.pending,
  // error: state.articles.error
})

const mapDispatchToProps = dispatch => bindActionCreators({
  loadedCategories: loadCategories
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Newsfeed );