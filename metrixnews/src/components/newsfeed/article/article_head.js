import React, { Component }  from 'react';
import './article.scss'

function ArticleHead(props) {
    return (
        <div className="publish_info">
            <div className="logo_div">
                <img src="https://via.placeholder.com/50" className="source_logo"  alt=""/>
            </div>

            <div className="publish_text">
                <span className="source_name">article source</span>
                <span className="author">author</span>
                <span>   -   </span>    
                <span className="time">time</span>                                      
            </div>
      </div>
    );
}

export default ArticleHead;