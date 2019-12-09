import React, { Component } from 'react';
import PropTypes from 'prop-types'

import Bio from './candidate/bio'
import Spectrum from '../newsfeed/spectrum/news_spectrum'

export default class Candidate extends Component {
   constructor(props) {
     super(props);
   }
 
   render() {
     return (
        <div className="candidate">
          <div className="candidateName">
              <h2>{this.props.person.Name}</h2>
          </div>
          <Bio person={this.props.person}/>
          <Spectrum articles={this.props.person.articles}/>
        </div>
       )
     }
 }

 Candidate.propTypes = {
  candidate: PropTypes.array
}