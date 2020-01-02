import React, { Component }  from 'react';
import '../newsfeed.scss'

export default class ArticleContent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const content = {
            color: "var(--article-font-color)",
            fontSize: "12pt",
            margin: 5,
            position: "relative",
            textAlign: "left",
        }
    return (
        <section>
            <p style={content}>
                {this.props.story.content}
            </p>
        </section>
    )
}
}