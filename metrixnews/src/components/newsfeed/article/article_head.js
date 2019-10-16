import React, { Component }  from 'react';

function ArticleHead(props) {
    return (
        <div className="publish_info">
            <div className="logo_div">
                <img src="https://via.placeholder.com/50" className="source_logo"  alt=""/>
            </div>

            <div className="publish_text">
                <span className="source_name">New York Times</span><br/>
                <span className="author">AJ Raymond</span>
                <span>   -   </span>
                <span className="time">15 mins</span>
            </div>
      </div>
    );
}

export default ArticleHead;