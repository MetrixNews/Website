import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'

import { Element } from 'react-scroll'

import Bio from './bio'
import Spectrum from '../news/news_spectrum'

import '../news/newsfeed.scss';

const candidate = {
  borderTop: "solid 2px var(--highlight-color)",
  paddingTop: "10px",
}

export default class Candidate extends PureComponent {
   constructor(props) {
     super(props);
   }
 
   render() {
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