import React, { PureComponent } from 'react';
import './newsfeed.scss'

export default class ArticleContent extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const content = {
            color: "var(--article-font-color)",
            fontSize: "10pt",
            position: "relative",
            textAlign: "left",
            padding: "0px 5px 0px 5px",
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