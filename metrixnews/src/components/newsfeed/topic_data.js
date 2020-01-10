import React, { Component }  from 'react';
// import '../../app.scss'
 
export default class Data extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const data = {
            textAlign: "center",
            width: "100%",
        }

        const button = {
            backgroundColor: "var(--metrix-color)",
            border: "solid var(--metrix-color)",
            borderRadius: "20px",
            width: "47%",
            color: "var(--bg-color)",
            padding: "2px",
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