import React, { Component }  from 'react';

import donate from '../../assets/icons/donate.png';
import platform from '../../assets/icons/platform.png';
import candidate from '../../assets/icons/bio.png';

import '../../app.scss';
import './candidate.scss';
 
export default class Bio extends Component {
    constructor(props) {
        super(props);
    }

    render() {
      const bio = {
        width: "100%",
        marginBottom: "5px",
      }
      const bold = {
        fontWeight: "bold",
        fontSize: "14pt",
      }
      const icon = {
        width: 20,
        height: 20,
        margin: "0px 5px 0px 5px"
      }
 

      return (
        <div style={bio}>
            <img className="pic" variant="top" src={this.props.person.photo} />
            <h2 className="name">{this.props.person.Name} ({this.props.person.party})</h2>
            <a href={this.props.person.website} target="_blank" rel="noopener noreferrer">
              <div className="links">
                <img src={candidate} alt="bio" style={icon} /> 
                <span style={bold}>Bio: </span>
                <span className="link">{this.props.person.website}</span>
              </div>
            </a>
            <a href={this.props.person.issues} target="_blank" rel="noopener noreferrer">
              <div className="links">
                <img src={platform} alt="platform" style={icon} /> 
                <span style={bold}>Platform: </span>
                <span className="link">{this.props.person.issues}</span>
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
        <span className="link">
            {url.substring(0,url.search(".com")+4)}
        </span>
    )
}
if(url.search(url.match(".org")) >= 0) {
  return (
      <span className="link">
          {url.substring(0,url.search(".org")+4)}
      </span>
  )
}
  else {
      return (
          <span className="link">Link</span>
      )
  }
}