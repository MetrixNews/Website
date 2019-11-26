import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
import Card from '../article/card';
import './spectrum.scss';

export default class Spectrum extends Component {
  render() {
    return (
        <div className="app">
            <div className="newsTopic">
                <h2>Climate Change</h2>
            </div>
            <div className="full hide-scroll">
                <ul className="hs">
                    {/* {this.props.articles.map((article, id) => (
                        <Card key={id} {...article} />
                    ))}    */}
                </ul>
            </div> 
        </div>
    )
  }
}

Spectrum.propTypes = {
  articles: PropTypes.array
}
        