import React, { Component }  from 'react';
import ArticleHead from './article_head';
import ArticleLink from './article_link'
import '../newsfeed.scss'
 
export default class Article extends Component {
    constructor(props) {
        super(props);
    }

    render() {
      return (
            <div className="article">
                <ArticleHead story={this.props.story}/>
                <div className="test"> 
                    <img className="articlephoto" src={this.props.story.url_to_image} alt="" />
                    <div className="headline">
                        <span>{this.props.story.title}</span>
                    </div>
                </div> 
                <ArticleLink story={this.props.story} />
        </div>
    )
}
}