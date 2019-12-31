import React, { Component } from 'react';
import PropTypes from 'prop-types'

import Bio from './bio'
import Spectrum from '../newsfeed/spectrum/news_spectrum'

export default class Candidate extends Component {
   constructor(props) {
     super(props);
   }
 
   render() {
    const candidate = {
      borderTop: "solid thick var(--highlight-color)",
      paddingTop: "10px",
    }
     return (
        <div style={candidate}>
          <Bio person={this.props.person}/>
          <Spectrum articles={this.props.person.articles}/>
        </div>
       )
     }
 }

 Candidate.propTypes = {
  candidate: PropTypes.array
}