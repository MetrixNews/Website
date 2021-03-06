import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import Card from './card';
import './newsfeed.scss';
// import '../../../app.scss';

export default class Spectrum extends PureComponent {
    constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="app">
            <div className="full hide-scroll">
                <ul className="hs">
                {this.props.articles.map((article, i) => (
                  <Card
                    key={i}
                    story={article}
                  />
                ))}            
                  </ul>
              </div> 
        </div>
    )
  }
}

Spectrum.propTypes = {
  articles: PropTypes.array
}
        