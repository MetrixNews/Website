import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Card from '../article/card';
import './spectrum.scss';

export default class Spectrum extends Component {
    constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="app">
            <div className="full hide-scroll">
                <ul className="hs">
                  {/* {this.props.articles.map((article) => (
                    <Card
                      key={article.id}
                      source={article.source}
                    />
                    ))}                 */}
                  </ul>
              </div> 
        </div>
    )
  }
}

Spectrum.propTypes = {
  articles: PropTypes.array
}
        