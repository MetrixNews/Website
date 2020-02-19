import React, { PureComponent } from 'react';
import '../newsfeed.scss'
 
export default class ArticlePhoto extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
      return (
        <img className="articlephoto" src={this.props.story.url_to_image} alt="" />
    )
}
}