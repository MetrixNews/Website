import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'

import { Element } from 'react-scroll'

import Spectrum from '../news/news_spectrum';
import Data from './topic_data';
import '../news/newsfeed.scss';

const topic = {
  borderTop: "solid 2px var(--highlight-color)",
  backgroundColor: "var(--bg-color)",
}

export default class Topic extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Element id={this.props.topic.topic} name={this.props.topic.topic}>
        <div style={topic}>
          <div className="half">
            <h2 className="topic">{this.props.topic.topic}</h2>
          </div>
          <Data topic={this.props.topic}/>
          <Spectrum articles={this.props.topic.articles}/>
        </div>
      </Element>
      )
    }
}

Topic.propTypes = {
  topic: PropTypes.object
}