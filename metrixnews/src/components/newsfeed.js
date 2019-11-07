import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Spinner from 'react-bootstrap/Spinner';

import fetchArticlesAction from '../actionCreators/newsfeed';
import {getArticlesError, getArticles, getArticlesPending} from '../reducers/newsfeed';

import Spectrum from './newsfeed/spectrum/news_spectrum'

class Newsfeed extends Component {
  constructor(props) {
      super(props);

      this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  UNSAFE_componentWillMount() {
      const {fetchArticles} = this.props;
      fetchArticles();
  }

  shouldComponentRender() {
      const {pending} = this.props;
      if(this.pending === false) return false;
      // more tests
      return true;
  }

  render() {
      const {articles, error, pending} = this.props;

      if(!this.shouldComponentRender()) return <Spinner />

      return (
        <div>
          <Spectrum articles={articles} />
      </div>
      )
  }
}

Newsfeed.propTypes = {
  articles: PropTypes.array,
}

const mapStateToProps = state => ({
  error: getArticlesError(state),
  articles: getArticles(state),
  pending: getArticlesPending(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchArticles: fetchArticlesAction
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Newsfeed );