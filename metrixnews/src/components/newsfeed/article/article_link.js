import React, { Component }  from 'react';
import '../newsfeed.scss'
 
export default class ArticleLink extends Component {
    constructor(props) {
        super(props);
    }

    render() {
      return (
        <div className="article_link">
        <i className="fas fa-link"></i>
            <a href={this.props.story.url} className="article_link" target="_blank" rel="noopener noreferrer">
                <span>{this.props.story.url}</span>
            </a>
        <span></span>
    </div>
    )
}
}         

                