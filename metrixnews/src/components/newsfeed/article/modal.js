import React, { Component }  from 'react';
import Card from './article_card'
import Article from './article';
import Metrics from './metrics';
import ArticleSummary from './article_summary';
import ArticleContent from './article_content';

import './article.scss'

function Modal() {
    return (
        <div>
            <Card />
            <div id="openModal" className="modalDialog">
                <div>
                    <a href="#close" title="Close" className="close">X</a>
                    <article>
                        <div className="row articlebox">
                            <Article />
                            <ArticleSummary />
                            <ArticleContent />
                        </div>
                        <Metrics />
                    </article>
                </div> 
             </div> 
        </div>
    )   
}

export default Modal;