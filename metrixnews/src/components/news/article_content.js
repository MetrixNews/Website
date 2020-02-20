import React, { PureComponent } from 'react';
import './newsfeed.scss'

const content = {
    color: "var(--article-font-color)",
    fontSize: "10pt",
    position: "relative",
    textAlign: "left",
    padding: "0px 5px 0px 5px",
}

export default class ArticleContent extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
    return (
        <section>
            <p style={content}>
                {this.props.content}
            </p>
        </section>
    )
}
}