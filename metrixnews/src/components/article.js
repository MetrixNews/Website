import React, { Component }  from 'react';
import ArticleHead from './article_head';

function Article(props) {
    return (
        <div className="row articlebox">
            <ArticleHead publishinfo={props.publishinfo}/>
            <div>
                <img className="articlephoto" src={props.publishinfo.articlephoto} alt=""/>
            </div>

            <div className="row">
                <div className="headline">{props.publishinfo.title}</div>
            </div>

            <div className="article_link">
                <i className="fas fa-link"></i>
                <a href="https://www.nytimes.com/" className="article_link" target="_blank" rel="noopener noreferrer">{props.publishinfo.articlelink}</a>
                <span></span>
            </div>
        </div>
    )
}

export default Article;