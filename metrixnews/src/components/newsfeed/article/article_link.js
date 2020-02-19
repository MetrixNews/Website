import React, { PureComponent } from 'react';
import '../newsfeed.scss'
 
export default class ArticleLink extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
      return (
        <div className="article_link">
            <a href={this.props.story.url}  target="_blank" rel="noopener noreferrer">
                <span>{this.props.story.url}</span>
            </a>
        <span></span>
    </div>
    )
}
}         

                