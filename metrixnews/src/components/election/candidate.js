import React, { Component } from 'react';
import PropTypes from 'prop-types'

import Spectrum from '../newsfeed/spectrum/news_spectrum'

export default class Candidate extends Component {
   constructor(props) {
     super(props);
   }
 
   render() {
     return (
      <div>
        <div className="pageDescription">
          <h1>Election</h1>
        </div>
        <div className="candidate">
          <div className="candidateName">
              <h2>{this.props.candidate.name}</h2>
          </div>
          <Spectrum articles={this.props.candidate.articles}/>
        </div>
       </div>
       )
     }
 }

 Candidate.propTypes = {
  candidate: PropTypes.array
}