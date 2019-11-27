import React, { Component } from 'react';
import Spectrum from './spectrum/news_spectrum';


class Topic extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="newsTopic">
          <h2>Climate Change</h2>
        </div>
        <Spectrum categories={this.props.categories}/>
      </div>
      )
    }
}
export default Topic;