import React, { PureComponent } from 'react';
import data from '../../assets/icons/data.png';
import './newsfeed.scss'
 
export default class Data extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {

        // const links = {
        //     textAlign: "left",
        //     float: "left",
        // }

        const button = {
            width: "100%",
            color: "var(--metrix-color)",
            marginBottom: "5px",
            textAlign: "left",
            // display: "inline-block",
            fontSize: "14pt",
            cursor: "pointer",
          }
        
        const icon ={
            width: "20px",
            height: "20px",
            margin: "0px 5px 0px 0px"
        }

        const bold = {
            fontWeight: "bold",
          }

      return (
        <div className="half">
            <a href={this.props.topic.data1} target="_blank" rel="noopener noreferrer">
                <div style={button}>
                    <img src={data} style={icon} alt="data"></img>
                    <span style={bold}>Data: </span>
                    <Data1 topic={this.props.topic}/>
                </div>
            </a>
            <a href={this.props.topic.data2} target="_blank" rel="noopener noreferrer">
                <div style={button}>
                    <img src={data} style={icon} alt="data"></img>
                    <span style={bold}>Data: </span>
                    <Data2 topic={this.props.topic}/>
                </div>            
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