import React, { Component }  from 'react';

import donate from '../../assets/icons/donate.png';
import platform from '../../assets/icons/platform.png';
import candidate from '../../assets/icons/bio.png';

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
        color: "var(--metrix-color)",
        fontSize: "16pt",
        fontWeight: "bold",
        textAlign: "left",
        paddingLeft: "5px",
      }
      const button = {
        backgroundColor: "var(--bg-color)",
        border: "solid var(--metrix-color)",
        borderRadius: "20px",
        width: "100%",
        maxWidth: "700px",
        color: "var(--metrix-color)",
        margin: "5px 5px",
        textAlign: "left",
        display: "block",
        fontSize: "10pt",
        cursor: "pointer",
      }

      const bold = {
        fontWeight: "bold",
      }

      const icon = {
        width: 30,
        height: 30,
        margin: "0px 5px 0px 10px"
      }
 

      return (
        <div style={bio}>
          <div style={picContainer}>
            <img style={pic} variant="top" src={this.props.person.photo} />
          </div>
          <div style={buttonContainer}>
              <h2 style={name}>{this.props.person.Name} ({this.props.person.party})</h2>
            <a href={this.props.person.website} target="_blank" rel="noopener noreferrer">
              <button style={button}>
                <img src={candidate} alt="bio" style={icon} /> 
                <span style={bold}>Bio: </span>
                {this.props.person.website}
              </button>
            </a>
            <a href={this.props.person.issues} target="_blank" rel="noopener noreferrer">
            <button style={button}>
                <img src={platform} alt="platform" style={icon} /> 
                <span style={bold}>Platform: </span>
                {this.props.person.issues}
              </button>            </a>
            <a href={this.props.person.donation} target="_blank" rel="noopener noreferrer">
            <button style={button}>
                <img src={donate} alt="donate" style={icon} /> 
                <span style={bold}>Donate: </span>
                <Donate person={this.props.person}/>
              </button>            </a>
          </div>
        </div>
    )
}
}

function Donate(props) {
  const url = props.person.donation;

  const font = {
    fontSize: "10pt",
}

  if(url.search(url.match(".com")) >= 0) {
    return (
        <span style={font}>
            {url.substring(0,url.search(".com")+4)}
        </span>
    )
}
  else {
      return (
          <span>Link</span>
      )
  }
}