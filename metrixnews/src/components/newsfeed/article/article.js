import React, { Component }  from 'react';
import ArticleHead from './article_head';
import './article.scss'

function Article(props) {
    return (
        <div>
            <ArticleHead />
            <div>
                <img className="articlephoto" src="https://via.placeholder.com/475x300" alt=""/>
            </div>

            <div>
                <div className="headline">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
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