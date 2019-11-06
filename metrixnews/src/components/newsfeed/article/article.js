import React, { Component }  from 'react';
import ArticleHead from './article_head';
import './article.scss'
 
export default class Article extends Component {
    render() {
      return (
        <div>
            {this.props.articles.map((article, id) => (
                <ArticleHead key={id} {...article} />
            ))}
            <div>
                {this.props.articles.map((article, id) => (
                    <img key={id} {...article} className="articlephoto" src={article.urlToImage} alt="" />
                ))}
            </div>

            <div>
                <div className="headline">
                    {this.props.articles.map((article, id) => (
                        <span key={id} {...article}>{article.title}</span>
                    ))}
                </div>
            </div> 

            <div className="article_link">
                <i className="fas fa-link"></i>
                {this.props.articles.map((article, id) => (
                    <a href={article.url} className="article_link" target="_blank" rel="noopener noreferrer">
                        <span>{article.url}</span>
                    </a>
                    ))}

                <span></span>
            </div>
        </div>
    )
}
}