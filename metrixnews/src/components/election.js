import React, { Component } from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Candidate from './election/candidate/candidate';
import CandidateContainer from './election/candidate';
import './election/party/party.scss';
// import PoliticalParty from './election/party/candidate_deck';

function ElectionComponent (){
 return (
   <div class="polticalParty">
   <h2>Democrats:</h2>
   <CardDeck>
      <Candidate />  
   </CardDeck>
</div>
 )
}

export default ElectionComponent;