import React, { Component }  from 'react';
import Card from 'react-bootstrap/Card';
import CandidateComponent from '../../candidatepage';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

// Still needs new styling ... used React Bootstrap ... https://react-bootstrap.github.io/components/cards/#image-caps
function Candidate(props) {
    return (

      <div className="">
          <ul>
              <li>
                <Link to="./components/candidatepage.js">
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
                </Link>
                <Route exact path='./components/candidatepage.js' component={CandidateComponent}></Route>
              </li>
            ))
         </ul>

      <hr />

      </div>

    )   
}

export default Candidate; 