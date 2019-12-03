import React, { Component }  from 'react';
import '../newsfeed.scss'

export default class ArticleContent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
    return (
        <section>
            <p className = "article_content">
                {this.props.story.content}
            </p>
        </section>
    )
}
}