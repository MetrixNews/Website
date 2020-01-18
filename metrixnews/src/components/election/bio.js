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

      const pic = {
        height: 145,
        marginBottom: 5,
        float: "left"
      }

      const name = {
        color: "var(--metrix-color)",
        fontSize: "24pt",
        fontWeight: "bold",
        textAlign: "left",
        paddingLeft: "5px",
        float: "left",
        width: "calc(100% - 145px)",
        marginLeft: "5px",
      }

      const bold = {
        fontWeight: "bold",
      }

      const icon = {
        width: 30,
        height: 30,
        margin: "0px 5px 0px 5px"
      }
 

      return (
        <div style={bio}>
            <img style={pic} variant="top" src={this.props.person.photo} />
            <h2 style={name}>{this.props.person.Name} ({this.props.person.party})</h2>
            <a href={this.props.person.website} target="_blank" rel="noopener noreferrer">
              <div className="links">
                <img src={candidate} alt="bio" style={icon} /> 
                <span style={bold}>Bio: </span>
                {this.props.person.website}
              </div>
            </a>
            <a href={this.props.person.issues} target="_blank" rel="noopener noreferrer">
              <div className="links">
                <img src={platform} alt="platform" style={icon} /> 
                <span style={bold}>Platform: </span>
                {this.props.person.issues}
              </div>
             </a>
            <a href={this.props.person.donation} target="_blank" rel="noopener noreferrer">
              <div className="links">
                <img src={donate} alt="donate" style={icon} /> 
                <span style={bold}>Donate: </span>
                <Donate person={this.props.person}/>
              </div>            
            </a>
          </div>
    )
}
}

function Donate(props) {
  const url = props.person.donation;

  if(url.search(url.match(".com")) >= 0) {
    return (
        <span>
            {url.substring(0,url.search(".com")+4)}
        </span>
    )
}
if(url.search(url.match(".org")) >= 0) {
  return (
      <span>
          {url.substring(0,url.search(".org")+4)}
      </span>
  )
}
  else {
      return (
          <span>Link</span>
      )
  }
}