import React, { Component }  from 'react';
import '../newsfeed.scss'

export default class ArticleHead extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log (SourceLogo)
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
    const source = props.story.source;

    if(source.search(".com") > 0) {
        let sourcelogo = source.substring(0,source.search(".com")+4)
        return (
            <img src={sourcelogo} className="source_logo"  alt="logo"/>
        )
    }
    if(source.search(".net") > 0) {
        let sourcelogo = source.substring(0,source.search(".net")+4)
        return (
            <img src={sourcelogo} className="source_logo"  alt="logo"/>
        )
    }
    if(source.search(".org") > 0) {
        let sourcelogo = source.substring(0,source.search(".org")+4)
        return (
            <img src={sourcelogo} className="source_logo"  alt="logo"/>
        )
    }
    else {
        return (
            <img src="https://via.placeholder.com/50x50" className="source_logo"  alt="logo"/>
        )
    }
  }