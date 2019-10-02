import React, { Component }  from 'react';

// Still needs new styling ... used React Bootstrap ... https://react-bootstrap.github.io/components/cards/#image-caps
function Candidate(props) {
    return (
        <Card>
        <Card.Img variant="top" src={props.pic} />
        <Card.Body>
          <Card.Text>
            <p>{props.name}</p>
            <p>{props.party}</p>
            <p>{props.title}</p>
            <p>{props.state}</p>
            <p>{props.slogan}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    )   
}


const candidate = {
    pic:  'https://upload.wikimedia.org/wikipedia/commons/d/de/Bernie_Sanders.jpg',
    name: 'Bernie Sanders',
    party: 'Democrat',
    title: 'U.S. Senator',
    state: 'Vermont',
    slogan: '"Not Me, Us"'
};