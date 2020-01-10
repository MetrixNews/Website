import React, { Component }  from 'react';
import '../../app.scss';
import './candidate.scss'
 
export default class Bio extends Component {
    constructor(props) {
        super(props);
    }

    render() {

 
      const bio = {
        // display: "table",
        width: "100%",
      }

      const picContainer ={
        float: "left",
      }

      const pic = {
        height: 145,
        marginBottom: 5,
      }

       const buttonContainer = {
        float: "left",
        width: "calc(100% - 160px)",
      }

      const name = {
        color: "var(--font-color)",
        fontSize: "14pt",
        paddingLeft: "10px",
        textAlign: "left",
      }
      const button = {
        backgroundColor: "var(--metrix-color)",
        border: "solid var(--metrix-color)",
        borderRadius: "20px",
        width: "100%",
        color: "var(--bg-color)",
        margin: "5px 5px",
        textAlign: "center",
        display: "inline-block",
        fontSize: "12pt",
        cursor: "pointer",
      }


      return (
        <div style={bio}>
          <div style={picContainer}>
            <img style={pic} variant="top" src={this.props.person.photo} />
          </div>
          <div style={buttonContainer}>
              <h2 style={name}>{this.props.person.Name} ({this.props.person.party})</h2>
            <a href={this.props.person.website} target="_blank" rel="noopener noreferrer">
              <button style={button}>Campaign Site</button>
            </a>
            <a href={this.props.person.issues} target="_blank" rel="noopener noreferrer">
              <button style={button}>Platform</button>
            </a>
            <a href={this.props.person.website} target="_blank" rel="noopener noreferrer">
              <button style={button}>Donation Link</button>
            </a>
          </div>
        </div>
    )
}
}