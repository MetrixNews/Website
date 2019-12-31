import React, { Component }  from 'react';
import Card from 'react-bootstrap/Card';
import '../../app.scss';
 
export default class Bio extends Component {
    constructor(props) {
        super(props);
    }

    render() {

      const candidate = {
        width: "100%",
        padding: "5px",
      }

      const container = {
          position: "relative",
          width: "auto",
          margin: "0 auto",
          display: "table",
          color: "var(--font-color)",
          textAlign: "center",

      }

      return (
        <div style={candidate}>
          <div className="container">
          <Card>
          <Card.Img className="candidatePic" variant="top" src={this.props.person.photo} />
          <Card.Body>
              <Card.Text className="content">
                <h3>{this.props.person.name}</h3>
                <p>{this.props.person.party}</p>
              </Card.Text>
            </Card.Body>
          </Card>
          <a href={this.props.person.website} target="_blank" rel="noopener noreferrer">
             <button className="button">Campaign Site</button>
          </a>
          <a href={this.props.person.issues} target="_blank" rel="noopener noreferrer">
             <button className="button">Platform</button>
          </a>
          <a href={this.props.person.website} target="_blank" rel="noopener noreferrer">
             <button className="button">Donation Link</button>
          </a>
          </div>
        </div>
    )
}
}