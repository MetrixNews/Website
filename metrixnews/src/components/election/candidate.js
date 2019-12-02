import React, { Component } from 'react';
import Candidate from './candidate/candidate';

export default class Candidate extends Component {
   constructor(props) {
     super(props);
   }
 
   render() {
     console.log(this.props)
     return (
       <div className="candidate">
         <div className="candidateName">
           <h2>Bernie Sanders</h2>
         </div>
         <Spectrum articles={this.props.topic}/>
         <div className="campaignLinks">
           <PrimaryButton/>
           <PrimaryButton/>
           <PrimaryButton/>
         </div>
       </div>
       )
     }
 }