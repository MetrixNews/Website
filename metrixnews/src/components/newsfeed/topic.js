import React, { Component } from 'react';
import PropTypes from 'prop-types'

import Spectrum from './spectrum/news_spectrum';
import Data from './topic_data';
import './newsfeed.scss';

export default class Topic extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const topic = {
      borderTop: "solid 2px var(--highlight-color)",
      backgroundColor: "var(--bg-color)",
    }

    return (
      <div style={topic}>
        <div className="half">
          <h2 className="topic">{this.props.topic.topic}</h2>
        </div>
        <Data topic={this.props.topic}/>
        <Spectrum articles={this.props.topic.articles}/>
        
      </div>
      )
    }
}

Topic.propTypes = {
  topic: PropTypes.object
}