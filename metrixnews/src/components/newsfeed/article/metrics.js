import React, { Component }  from 'react';
import '../newsfeed.scss'

export default class Metrics extends Component {
    constructor(props) {
        super(props);
    }
    render() {
    return (
        <div className="metricRow">
            <Bias story={this.props.story}/>
            <Emotion story={this.props.story}/>
            <Sentiment story={this.props.story}/>
        </div>
    );
}
}

function Sentiment(props) {
    const sentiment = props.story.sentiment
    if (sentiment == "pos") {
        return (
            <p className="metric">pos</p>
        )
    }
    if (sentiment == "neu") {
        return (
            <p className="metric">neu</p>
        )
    }
    if (sentiment == "neg") {
        return (
            <p className="metric">neg</p>
        )
    }
    else {
        return (
            <p className="metric">N/A</p>
        )
    }

}

function Emotion(props) {
    const emotion = props.story.emotion
    if (emotion == "joy") {
        return (
            <p className="metric">joy</p>
        )
    }
    if (emotion == "trust") {
        return (
            <p className="metric">trust</p>
        )
    }
    if (emotion == "fear") {
        return (
            <p className="metric">fear</p>
        )
    }
    if (emotion == "surprise") {
        return (
            <p className="metric">surprise</p>
        )
    }
    if (emotion == "sadness") {
        return (
            <p className="metric">sadness</p>
        )
    }
    if (emotion == "disgust") {
        return (
            <p className="metric">disgust</p>
        )
    }
    if (emotion == "anger") {
        return (
            <p className="metric">anger</p>
        )
    }
    if (emotion == "anticipation") {
        return (
            <p className="metric">anticipation</p>
        )
    }
    else {
        return (
            <p className="metric">N/A</p>
        )
    }

}

function Bias (props) {
    const bias = props.story.political_biasness
    if (bias == "left") {
        return (
            <p className="metric">left</p>
        )
    }
    if (bias == "left_center") {
        return (
            <p className="metric">left_center</p>
        )
    }
    if (bias == "center") {
        return (
            <p className="metric">center</p>
        )
    }
    if (bias == "center_right") {
        return (
            <p className="metric">center_right</p>
        )
    }
    if (bias == "right") {
        return (
            <p className="metric">right</p>
        )
    }
    else {
        return (
            <p className="metric">N/A</p>
        )
    }

}

{/* <img  src="https://via.placeholder.com/50" className="metric" alt="emotion"/>
<img  src="https://via.placeholder.com/50" className="metric" alt="sentiment"/> */}