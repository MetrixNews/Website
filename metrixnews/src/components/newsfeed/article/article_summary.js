import React, { Component }  from 'react';
import '../newsfeed.scss'


export default class ArticleSummary extends Component {
    constructor(props) {
        super(props);
    }

    render() {
    return (
        <section>
            <p className = "article_summary">
                {this.props.story.description}        
            </p>
      </section>
    )
}
}

