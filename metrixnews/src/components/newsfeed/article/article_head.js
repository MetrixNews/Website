import React, { Component }  from 'react';
import './article.scss'

function ArticleHead(props) {
    return (
        <div className="publish_info">
            <div className="logo_div">
                <img src="https://via.placeholder.com/50" className="source_logo"  alt=""/>
            </div>

            <div className="publish_text">

                {this.props.articles.map((article, id) => (
                            <span key={id} {...article} className="source_name">{article.source}</span>
                    ))}
                {this.props.articles.map((article, id) => (
                            <span key={id} {...article} className="author">{article.author}</span>
                    ))}
                <span>   -   </span>    
                {this.props.articles.map((article, id) => (
                            <span key={id} {...article} className="time">{article.publishedAt}</span>
                    ))}                                        
            </div>
      </div>
    );
}

export default ArticleHead;