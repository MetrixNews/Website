import React, { Component } from 'react';
import PropTypes from 'prop-types'

import { Element } from 'react-scroll'

import Bio from './bio'
import Spectrum from '../newsfeed/spectrum/news_spectrum'

import '../newsfeed/newsfeed.scss';

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
      <Element id={this.props.person.Name} name={this.props.person.Name}>
        <div style={candidate}>
          <Bio person={this.props.person}/>
          <Spectrum articles={this.props.person.articles}/>
        </div>
      </Element>
       )
     }
 }

 Candidate.propTypes = {
  candidate: PropTypes.array
}