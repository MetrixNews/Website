import React, { Component }  from 'react';
// import '../../app.scss'
 
export default class Data extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const data = {
            margin: "0 auto",
            textAlign: "center",
            width: "100%",
        }

        const button = {
            backgroundColor: "var(--bg-color)",
            border: "solid var(--metrix-color)",
            borderRadius: "15px",
            width: "45%",
            color: "var(--font-color)",
            padding: "5px",
            margin: "5px",
            textAlign: "center",
            display: "inline-block",
            fontSize: "20pt",
            scrollMarginBottom: "5px",
            webkitTransitionDuration: "0.4s", /* Safari */
            transitionDuration: "0.4s",
            cursor: "pointer",
          }

      return (
        <div style={data}>
            <a href={this.props.topic.data1} >
                <button style={button}>Data: {this.props.topic.data1}</button>
            </a>
            <a href={this.props.topic.data2} >
                <button style={button}>Data: {this.props.topic.data2}</button>
            </a>
        </div>
    )
}
}