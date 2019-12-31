import React, { Component }  from 'react';
import Moment from 'react-moment';
import '../newsfeed.scss'

export default class ArticleHead extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const row = {
            width: "100%",
            height: "auto",
        }

        const publishInfo = {
            width: "75%",
            float: "left",
            paddingBottom: "5px",
            color: "var(--article-font-color)",
            fontSize: "12pt",
        }

        const source = {
            textAlign: "left",
            fontWeight: "bold",
        }

    return (
        <div style={row}>
            <div>
                <SourceLogo story={this.props.story}/>
            </div>

            <div style={publishInfo}>
                <span style={source}>{this.props.story.source}</span><br/>
                <span>{this.props.story.author}</span>
                <span>   -   </span>    
                <PrettyDate story={this.props.story}/>                                    
            </div>
      </div>
    );
}
}

function SourceLogo(props) {
    const url = props.story.url;

    const logo = {
        width: "15%",
        float: "left",
        padding: "5px",
    }

    if(url.search(url.match(".com")) >= 0) {
        return (
            <img src={"https://logo.clearbit.com/" + url.substring(0,url.search(".com")+4)} style={logo}  alt="logo"/>
        )
    }
    if(url.search(url.match(".org")) >= 0) {
        return (
            <img src={"https://logo.clearbit.com/" + url.substring(0,url.search(".org")+4)} style={logo}  alt="logo"/>
        )
    }
    if(url.search(url.match(".net")) >= 0) {
        return (
            <img src={"https://logo.clearbit.com/" + url.substring(0,url.search(".net")+4)} style={logo}  alt="logo"/>
        )
    }
    if(url.search(url.match(".co.uk")) >= 0) {
        return (
            <img src={"https://logo.clearbit.com/" + url.substring(0,url.search(".co.uk")+6)} style={logo}  alt="logo"/>
        )
    }
    else {
        return (
            <img src="https://via.placeholder.com/50x50" style={logo}  alt="logo"/>
        )
    }
  }

  function PrettyDate(props) {
    const time = props.story.published_at;

    const timeStyle = {
        fontStyle: "italic",
    }
        return (
            <span style={timeStyle}>
                <Moment fromNow ago>{time}</Moment>
            </span>
            
        );
    }