import React, { PureComponent } from 'react';
import './newsfeed.scss'
 
export default class ArticleTitle extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
      return (
        <div className="headline">
            <span>{this.props.story.Title}</span>
        </div>
    )
}
}