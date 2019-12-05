import React, { Component }  from 'react';
import '../newsfeed.scss'

export default class ArticleHead extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        // let sourcelogo = {"https://logo.clearbit.com/" + this.props.source}
    return (
        <div>
            <div className="logo_div">
                <img src="https://logo.clearbit.com/nyt.com" className="source_logo"  alt=""/>
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
