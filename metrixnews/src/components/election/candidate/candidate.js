import React, { Component }  from 'react';
import Card from 'react-bootstrap/Card';

// Still needs new styling ... used React Bootstrap ... https://react-bootstrap.github.io/components/cards/#image-caps
function Candidate(props) {
    return (

      <div className="">
        <div className="candidate">
          <div className="container">
          <Card>
          <Card.Img className="candidatePic" variant="top" src="https://upload.wikimedia.org/wikipedia/commons/d/de/Bernie_Sanders.jpg" />
          <Card.Body>
              <Card.Text className="content">
                <h3>Bernie Sanders</h3>
                <p>Democrat</p>
                <p>U.S. Senator</p>
                <p>Vermont</p>
                <p>"Not Me, Us"</p>
              </Card.Text>
            </Card.Body>
          </Card>
          </div>
        </div>
      </div>

    )   
}

export default Candidate; 