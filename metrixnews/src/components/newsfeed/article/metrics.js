import React, { Component }  from 'react';

import positive from '../../../assets/icons/metrics/positive.png';
import negative from '../../../assets/icons/metrics/negative.png';
import neutral from '../../../assets/icons/metrics/neutral.png';

import left from '../../../assets/icons/metrics/left.png';
import center_left from '../../../assets/icons/metrics/center_left.png';
import center from '../../../assets/icons/metrics/center.png';
import center_right from '../../../assets/icons/metrics/center_right.png';
import right from '../../../assets/icons/metrics/right.png';

import joy from '../../../assets/icons/metrics/joy.png';
import trust from '../../../assets/icons/metrics/trust.png';
import fear from '../../../assets/icons/metrics/fear.png';
import surprise from '../../../assets/icons/metrics/surprise.png';
import sadness from '../../../assets/icons/metrics/sadness.png';
import disgust from '../../../assets/icons/metrics/disgust.png';
import anger from '../../../assets/icons/metrics/anger.png';
import anticipation from '../../../assets/icons/metrics/anticipation.png';

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
            <img src={positive} className="metric" alt="positive"></img>
        )
    }
    if (sentiment == "neu") {
        return (
            <img src={neutral} className="metric" alt="neutral"></img>
        )
    }
    if (sentiment == "neg") {
        return (
            <img src={negative} className="metric" alt="negative"></img>
        )
    }
    else {
        return (
            null
        )
    }

}

function Emotion(props) {
    const emotion = props.story.emotion
    if (emotion == "joy") {
        return (
            <img src={joy} className="metric" alt="joy"></img>
        )
    }
    if (emotion == "trust") {
        return (
            <img src={trust} className="metric" alt="trust"></img>
        )
    }
    if (emotion == "fear") {
        return (
            <img src={fear} className="metric" alt="fear"></img>
        )
    }
    if (emotion == "surprise") {
        return (
            <img src={surprise} className="metric" alt="surprise"></img>
        )
    }
    if (emotion == "sadness") {
        return (
            <img src={sadness} className="metric" alt="sadness"></img>
        )
    }
    if (emotion == "disgust") {
        return (
            <img src={disgust} className="metric" alt="disgust"></img>
        )
    }
    if (emotion == "anger") {
        return (
            <img src={anger} className="metric" alt="anger"></img>
        )
    }
    if (emotion == "anticipation") {
        return (
            <img src={anticipation} className="metric" alt="anticipation"></img>
        )
    }
    else {
        return (
            null
        )
    }

}

function Bias (props) {
    const bias = props.story.political_biasness
    if (bias == "left") {
        return (
            <img src={left} className="metric" alt="left"></img>
        )
    }
    if (bias == "center_left") {
        return (
            <img src={center_left} className="metric" alt="center_left"></img>
        )
    }
    if (bias == "center") {
        return (
            <img src={center} className="metric" alt="center"></img>
        )
    }
    if (bias == "center_right") {
        return (
            <img src={center_right} className="metric" alt="center_right"></img>
        )
    }
    if (bias == "right") {
        return (
            <img src={right} className="metric" alt="right"></img>
        )
    }
    else {
        return (
            null
        )
    }

}

{/* <img  src="https://via.placeholder.com/50" className="metric" alt="emotion"/>
<img  src="https://via.placeholder.com/50" className="metric" alt="sentiment"/> */}