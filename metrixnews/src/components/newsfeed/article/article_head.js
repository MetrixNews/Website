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
                <img src="https://logo.clearbit.com/Npr.org" className="source_logo"  alt=""/>
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
    const source = props.story.source;

    if(source.search(".com") > 0) {
        let sourcelogo = source.substring(0,source.search(".com")) + ".com"
        return (
            <img src={sourcelogo} className="source_logo"  alt="logo"/>
        )
    }
    if(source.search(".net") > 0) {
        let sourcelogo = source.substring(0,source.search(".net")) + ".net"
        return (
            <img src={sourcelogo} className="source_logo"  alt="logo"/>
        )
    }
    if(source.search(".org") > 0) {
        let sourcelogo = source.substring(0,source.search(".org")) + ".org"
        return (
            <img src={sourcelogo} className="source_logo"  alt="logo"/>
        )
    }
  }
