import React, { Component }  from 'react';
import '../newsfeed.scss'

export default class ArticleContent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
    return (
        <section>
            <h4>Content</h4>
            <p className = "article_content">
                {this.props.story.content}
            </p>
        </section>
    )
}
}