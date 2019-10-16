import React, { Component }  from 'react';
import './article.scss'

function ArticleContent(props) {
    return (
        <section>
            <h4>Content</h4>
            <p className = "article_content">
                article content is where we show the first paragraph or so of the article's content
            </p>
        </section>
    )
}

export default ArticleContent;