import React, { Component }  from 'react';
import ArticleHead from './article_head';
import './article.scss'
 
export default class Article extends Component {
    render() {
      return (
        <div>
            <ArticleHead />
            <div>
                <img className="articlephoto" src="" alt="" />
            </div>

            <div>
                <div className="headline">
                    <span>article title</span>
                </div>
            </div> 

            <div className="article_link">
                <i className="fas fa-link"></i>
                    <a href="" className="article_link" target="_blank" rel="noopener noreferrer">
                        <span>article url</span>
                    </a>
                <span></span>
            </div>
        </div>
    )
}
}