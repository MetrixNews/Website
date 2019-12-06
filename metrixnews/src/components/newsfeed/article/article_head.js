import React, { Component }  from 'react';
import '../newsfeed.scss'

export default class ArticleHead extends Component {
    constructor(props) {
        super(props);
    }
    render() {
    return (
        <div>
            <div className="logo_div">
                <SourceLogo story={this.props.story}/>
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

function SourceLogo(props) {
    const url = props.story.url;

    if(url.search(url.match(".com")) >= 0) {
        return (
            <img src={"https://logo.clearbit.com/" + url.substring(0,url.search(".com")+4)} className="source_logo"  alt="logo"/>
        )
    }
    if(url.search(url.match(".org")) >= 0) {
        return (
            <img src={"https://logo.clearbit.com/" + url.substring(0,url.search(".org")+4)} className="source_logo"  alt="logo"/>
        )
    }
    if(url.search(url.match(".net")) >= 0) {
        return (
            <img src={"https://logo.clearbit.com/" + url.substring(0,url.search(".net")+4)} className="source_logo"  alt="logo"/>
        )
    }
    if(url.search(url.match(".co.uk")) >= 0) {
        return (
            <img src={"https://logo.clearbit.com/" + url.substring(0,url.search(".co.uk")+6)} className="source_logo"  alt="logo"/>
        )
    }
    else {
        return (
            <img src="https://via.placeholder.com/50x50" className="source_logo"  alt="logo"/>
        )
    }
  }