import React, { Component }  from 'react';


export default class ArticleSummary extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const summary = {
            color: "var(--article-font-color)",
            fontSize: "10pt",
            textAlign: "left",
            marginTop: "5px",
            marginBottom: "40px",
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

