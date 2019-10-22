import React, { Component } from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Candidate from './election/candidate/candidate';
import CandidateComponent from './candidatepage';
import './election/party/party.scss';
import {
   BrowserRouter as Router,
   Route,
   Link
 } from 'react-router-dom'
// import PoliticalParty from './election/party/candidate_deck';

function ElectionComponent (){
 return (
   <div class="polticalParty">
   <h2>Democrats:</h2>
   <CardDeck>
      <ul>
         <li>
            <Link to='./candidatepage'> <Candidate /> </Link>
         </li>
      </ul>
      <Route exact path='/candidatepage' component={CandidateComponent}></Route>  
   </CardDeck>
</div>
 )
}

export default ElectionComponent;