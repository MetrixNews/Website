import React, { Component }  from 'react';
import data from '../../assets/icons/data.png';
// import '../../app.scss'
 
export default class Data extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const links = {
            textAlign: "left",
            width: "100%",
        }

        const button = {
            backgroundColor: "var(--bg-color)",
            border: "solid var(--metrix-color)",
            borderRadius: "20px",
            width: "47%",
            color: "var(--metrix-color)",
            padding: "2px",
            margin: "5px",
            textAlign: "center",
            display: "inline-block",
            fontSize: "12pt",
            cursor: "pointer",
          }
        const icon ={
            width: "25px",
            height: "25px",
            marginRight: "10px",
        }

      return (
        <div style={links}>
            <a href={this.props.topic.data1} target="_blank" rel="noopener noreferrer">
                <button style={button}>
                    <img src={data} style={icon} alt="data"></img>
                    <Data1 topic={this.props.topic}/>
                </button>
            </a>
            <a href={this.props.topic.data2} target="_blank" rel="noopener noreferrer">
                <button style={button}>
                    <img src={data} style={icon} alt="data"></img>
                    <Data2 topic={this.props.topic}/>
                </button>            
            </a>
        </div>
    )
}
}

function Data1(props) {
    const url = props.topic.data1;

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
    if(url.search(url.match(".org")) >= 0) {
        return (
            <span style={font}>
                {url.substring(0,url.search(".org")+4)}
            </span>        
            )
    }
    if(url.search(url.match(".gov")) >= 0) {
        return (
            <span style={font}>
                {url.substring(0,url.search(".gov")+4)}
            </span>        
            )
    }
    if(url.search(url.match(".net")) >= 0) {
        return (
            <span style={font}>
                {url.substring(0,url.search(".net")+4)}
            </span>        
            )
    }
    else {
        return (
            <span style={font}>{url}</span>
        )
    }
  }


  function Data2(props) {
    const url = props.topic.data2;

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
    if(url.search(url.match(".org")) >= 0) {
        return (
            <span style={font}>
                {url.substring(0,url.search(".org")+4)}
            </span>        
            )
    }
    if(url.search(url.match(".gov")) >= 0) {
        return (
            <span style={font}>
                {url.substring(0,url.search(".gov")+4)}
            </span>        
            )
    }
    if(url.search(url.match(".net")) >= 0) {
        return (
            <span style={font}>
                {url.substring(0,url.search(".net")+4)}
            </span>        
            )
    }
    else {
        return (
            <span style={font}>{url}</span>
        )
    }
  }