import React, { Component } from 'react';
import PropTypes from 'prop-types'

import Spectrum from './spectrum/news_spectrum';
import PrimaryButton from '../misc/button';
import '../../app.scss';


export default class Topic extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="newsTopic">
        <div className="topicTitle">
          <h2>Topic Title</h2>
        </div>
        <Spectrum articles={this.props.topic}/>
        <div className="newsData">
          <PrimaryButton/>
          <PrimaryButton/>
        </div>
      </div>
      )
    }
}

Topic.propTypes = {
  topic: PropTypes.array
}