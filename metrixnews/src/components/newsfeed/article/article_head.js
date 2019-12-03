import React, { Component }  from 'react';
import '../newsfeed.scss'

export default class ArticleHead extends Component {
    constructor(props) {
        super(props);
    }
    render() {
    return (
        <div className="publish_info">
            <div className="logo_div">
                <img src="https://via.placeholder.com/50" className="source_logo"  alt=""/>
            </div>

            <div className="publish_text">
                <span className="source_name">{this.props.story.source}</span><br/>
                <span className="author">{this.props.story.author}</span>
                <span>   -   </span>    
                <span className="time">{this.props.story.published_at}</span>                                      
            </div>
      </div>
    );
}
}
