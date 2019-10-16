import React, { Component }  from 'react';
import ArticleHead from './article_head';
import './article.scss'

function Article(props) {
    return (
        <div>
            <ArticleHead />
            <div>
                <img className="articlephoto" src="https://via.placeholder.com/250" alt=""/>
            </div>

            <div className="row">
                <div className="headline">Article titles are very catchy</div>
            </div>

            <div className="article_link">
                <i className="fas fa-link"></i>
                <a href="https://www.nytimes.com/" className="article_link" target="_blank" rel="noopener noreferrer">https://www.nytimes.com/</a>
                <span></span>
            </div>
        </div>
    )
}

export default Article;