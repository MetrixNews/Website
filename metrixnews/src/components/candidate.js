import React, { Component }  from 'react';
import Card from 'react-bootstrap/Card'

// Still needs new styling ... used React Bootstrap ... https://react-bootstrap.github.io/components/cards/#image-caps
function Candidate(props) {
    return (
        <Card>
        <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/d/de/Bernie_Sanders.jpg" />
        <Card.Body>
          <Card.Text>
            <p>Bernie Sanders</p>
            <p>Democrat</p>
            <p>U.S. Senator</p>
            <p>Vermont</p>
            <p>"Not Me, Us"</p>
          </Card.Text>
        </Card.Body>
      </Card>
    )   
}

export default Candidate; 