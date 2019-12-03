import React, { Component }  from 'react';
import ArticleHead from './article_head';
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

                <div className="article_link">
                    <i className="fas fa-link"></i>
                        <a href={this.props.story.url} className="article_link" target="_blank" rel="noopener noreferrer">
                            <span>{this.props.story.url}</span>
                        </a>
                    <span></span>
                </div>
        </div>
    )
}
}