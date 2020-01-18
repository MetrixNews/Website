import React, { Component }  from 'react';
import '../newsfeed.scss'
 
export default class ArticleTitle extends Component {
    constructor(props) {
        super(props);
    }

    render() {
      return (
        <div className="headline">
            <span>{this.props.story.title}</span>
        </div>
    )
}
}