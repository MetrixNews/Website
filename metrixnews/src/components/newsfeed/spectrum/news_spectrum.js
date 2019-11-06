import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import fetchArticles from '../../../actionCreators/newsfeed';
import {getArticlesError, getArticles, getArticlesPending} from '../../../reducers/newsfeed';

import Card from '../article/modal';
import './spectrum.scss';
import Spinner from 'react-bootstrap/Spinner';

class ArticleView extends Component {
    constructor(props) {
        super(props);

        this.shouldComponentRender = this.shouldComponentRender.bind(this);
    }

    componentWillMount() {
        const {fetchArticles} = this.props;
        fetchProducts();
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
            <div className="app">
              <div className="full hide-scroll">
                <ul className="hs">
                {error && <span className='article-error'>{error}</span>}
                <Card articles={articles} />
                </ul>
              </div>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    error: getArticlesError(state),
    articles: getArticles(state),
    pending: getArticlesPending(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchArticles: fetchArticles
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ArticleView );