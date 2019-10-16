import React, { Component }  from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Candidate from './candidate';

// Still needs new styling ... used React Bootstrap ... https://react-bootstrap.github.io/components/cards/#card-deck

function PoliticalParty(props) {
    return (
        <CardDeck>
            <Candidate />
            <Candidate />
            <Candidate />
            <Candidate />
            <Candidate />
        </CardDeck>
    )   
}

export default PoliticalParty;