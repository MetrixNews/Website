import React, { Component } from 'react';
import PropTypes from 'prop-types'

import Spectrum from './spectrum/news_spectrum';


export default class Topic extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="newsTopic">
          <h2>Climate Change</h2>
        </div>
        <Spectrum articles={this.props.topic}/>
      </div>
      )
    }
}

Topic.propTypes = {
  topic: PropTypes.array
}