import React, { Component }  from 'react';
import '../../app.scss';
 
export default class Bio extends Component {
    constructor(props) {
        super(props);
    }

    render() {

 
      const bio = {
        // display: "table",
        // width: "100%",
      }

      const picContainer ={
        float: "left",
      }

      const pic = {
        maxWidth: "100%",
        maxHeight: "50vw",
        borderRadius: "10px",
        marginLeft: "10px",
      }

      const buttonContainer = {
        float: "left",
        width: "50%",
        // display: "table-cell",
        // verticalAlign: "center",
      }
      const name = {
        color: "var(--font-color)",
        fontSize: "16pt",
        paddingLeft: "10px",
        textAlign: "left",
      }
      const button = {
        backgroundColor: "var(--bg-color)",
        border: "solid var(--metrix-color)",
        borderRadius: "15px",
        width: "100%",
        color: "var(--font-color)",
        // padding: "2px",
        margin: "5px 5px",
        textAlign: "center",
        display: "inline-block",
        fontSize: "12pt",
        // scrollMarginBottom: "5px",
        // webkitTransitionDuration: "0.4s", /* Safari */
        // transitionDuration: "0.4s",
        cursor: "pointer",
      }


      return (
        <div style={bio}>
          <div style={picContainer}>
            <img style={pic} variant="top" src={this.props.person.photo} />
          </div>
          <div style={buttonContainer}>
              <h2 style={name}>{this.props.person.Name} - {this.props.person.party}</h2>
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