import React, { Component }  from 'react';
import '../newsfeed.scss'


export default class ArticleSummary extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const summary = {
            color: "var(--article-font-color)",
            fontSize: "12pt",
            textAlign: "left",
            marginTop: "5px",
            marginBottom: "5px",
            textAlign: "left",
        }
    return (
        <section>
            <p style={summary}>
                {this.props.story.description}        
            </p>
      </section>
    )
}
}

