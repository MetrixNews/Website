import React, { Component }  from 'react';

function ArticleHead(props) {
    return (
        <div className="publish_info">
            <div className="logo_div">
                <img src={props.publishinfo.sourcelogoURL} className="source_logo"  alt=""/>
            </div>

            <div className="publish_text">
                <span className="source_name">{props.publishinfo.sourcename}</span><br/>
                <span className="author">{props.publishinfo.author}</span>
                <span>   -   </span>
                <span className="time">{props.publishinfo.time}</span>
            </div>
      </div>
    );
}

export default ArticleHead;