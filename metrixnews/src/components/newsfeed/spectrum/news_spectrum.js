import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Card from '../article/card';
import './spectrum.scss';

export default class Spectrum extends Component {
  render() {
    // var categories = {categories};
    // var articles = [];
    // Object.keys(categories).forEach(function(key) {
    //   articles.push(categories[key]);
    // });
    return (
        <div className="app">
            <div className="full hide-scroll">
                <ul className="hs">
                  {/* {articles.map(categories => <Card key={categories.id} source={categories.source} author={categories.author} />)} */}
                </ul>
            </div> 
        </div>
    )
  }
}

Spectrum.propTypes = {
  articles: PropTypes.array
}
        