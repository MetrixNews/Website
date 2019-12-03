import React, { Component }  from 'react';
import '../newsfeed.scss'
 
export default class ArticlePhoto extends Component {
    constructor(props) {
        super(props);
    }

    render() {
      return (
        <img className="articlephoto" src={this.props.story.url_to_image} alt="" />
    )
}
}