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


function Article(props) {
    return (
        <div className="row articlebox">
            <ArticleHead publishinfo={props.publishinfo}/>
            <div>
                <img className="articlephoto" src={props.publishinfo.articlephoto} alt=""/>
            </div>

            <div className="row">
                <div className="headline">{props.publishinfo.title}</div>
            </div>

            <div className="article_link">
                <i className="fas fa-link"></i>
                <a href="https://www.nytimes.com/" className="article_link" target="_blank" rel="noopener noreferrer">{props.publishinfo.articlelink}</a>
                <span></span>
            </div>
        </div>
    )
}

function Metrix(props) {
    return (
        <div className="metricRow">
            <img src={props.scores.bias} className="metric" alt="bias"/>
            <img  src={props.scores.emotion} className="metric" alt="emotion"/>
            <img  src={props.scores.sentiment} className="metric" alt="sentiment"/>
        </div>
    )
}

function Card(props) {
    return(
        <li className="item">
            <a href="#openModal">
                <Article publishinfo={props.card}/>
                <Metrix scores={props.card}/>
            </a>
        </li>
    )
}

function Spectrum(props) {
    return(
        <div className="app">
            <div className="newsTopic">
                <a href="topic.html">
                    <h2>{props.topic}</h2>
                </a>
            </div>
            <div className="full hide-scroll">
                <ul className="hs">
                     <Card card={props.card}/>
                     <Card card={props.card}/>
                     <Card card={props.card}/>
                     <Card card={props.card}/>
                     <Card card={props.card}/>
                     <Card card={props.card}/>
                     <Card card={props.card}/>
                     <Card card={props.card}/>
                     <Card card={props.card}/>
                </ul>
            </div>
        </div>
    )
}

const spectrum = {

    card: {
        articlephoto: 'https://via.placeholder.com/250',
        title: 'The findings of a new study that looked at the heart of a swimmer vs. the heart of a runner underscored how sensitive our bodies are to different types of exercise',
        articlelink: 'https://newyorktimes.com',
        sourcelogoURL: 'https://via.placeholder.com/50',
        sourcename: 'New York Times',
        author: 'Marcus Cymerman',
        time: '15mins',
        bias: 'https://via.placeholder.com/50',
        emotion: 'https://via.placeholder.com/50',
        sentiment: 'https://via.placeholder.com/50'
    },

    topic: 'Climate Change'

};