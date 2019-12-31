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

    const topic = {
      borderTop: "solid thick var(--highlight-color)",
      backgroundColor: "var(--bg-color)",
    }

    const topicTitle = {
      color: "var(--font-color)",
      fontSize: "20pt",
      paddingLeft: "10px",
      textAlign: "left",
    }
    

    return (
      <div style={topic}>
        <div >
          <h2 style={topicTitle}>{this.props.topic.topic}</h2>
        </div>
        <Data topic={this.props.topic}/>
        <Spectrum articles={this.props.topic.articles}/>
      </div>
      )
    }
}

Topic.propTypes = {
  topic: PropTypes.array
}