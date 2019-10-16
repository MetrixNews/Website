import React, { Component }  from 'react';
import './article.scss'


function ArticleSummary(props) {
    return (
        <section>
            <h4>Summary</h4>
            <p className = "article_summary">
                article summary is where the article is summarized            
            </p>
      </section>
    )
}

export default ArticleSummary;