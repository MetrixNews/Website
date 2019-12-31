import React, { Component }  from 'react';
import '../newsfeed.scss'
 
export default class ArticleTitle extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const headline = {
            font: "Source Sans Pro",
            color: "var(--article-font-color)",
            fontSize: "12pt",
            fontWeight: "bold",
            marginTop: "5px",
            marginBottom: "5px",
            position: "relative",
            textAlign: "left",

        }

      return (
        <div style={headline}>
            <span>{this.props.story.title}</span>
        </div>
    )
}
}