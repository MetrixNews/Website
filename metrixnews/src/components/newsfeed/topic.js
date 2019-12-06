import React, { Component } from 'react';
import PropTypes from 'prop-types'

import Spectrum from './spectrum/news_spectrum';
import Data from './topic_data';
import '../../app.scss';


export default class Topic extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="newsTopic">
        <div className="topicTitle">
          <h2>{this.props.topic.topic}</h2>
        </div>
        <Spectrum articles={this.props.topic.articles}/>
        <Data topic={this.props.topic}/>
        </div>
      )
    }
}

Topic.propTypes = {
  topic: PropTypes.array
}