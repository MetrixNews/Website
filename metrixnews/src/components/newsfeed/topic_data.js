import React, { Component }  from 'react';
// import '../../app.scss'
 
export default class Data extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const data = {
            textAlign: "left",
            width: "100%",
        }

        const button = {
            backgroundColor: "var(--bg-color)",
            border: "solid var(--metrix-color)",
            width: "25%",
            color: "var(--metrix-color)",
            margin: "5px",
            textAlign: "center",
            display: "inline-block",
            fontSize: "12pt",
            cursor: "pointer",
          }

      return (
        <div style={data}>
            <a href={this.props.topic.data1} target="_blank" rel="noopener noreferrer">
                <button style={button}>{this.props.topic.topic} Data</button>
            </a>
            <a href={this.props.topic.data2} target="_blank" rel="noopener noreferrer">
                <button style={button}>{this.props.topic.topic} Data</button>
            </a>
        </div>
    )
}
}