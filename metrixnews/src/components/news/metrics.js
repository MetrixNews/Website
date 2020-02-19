import React, { PureComponent } from 'react';

import positive from '../../assets/icons/metrics/positive.png';
import negative from '../../assets/icons/metrics/negative.png';
import neutral from '../../assets/icons/metrics/neutral.png';

// import left from '../../../assets/icons/metrics/left.png';
// import center_left from '../../../assets/icons/metrics/center_left.png';
// import center from '../../../assets/icons/metrics/center.png';
// import center_right from '../../../assets/icons/metrics/center_right.png';
// import right from '../../../assets/icons/metrics/right.png';

import joy from '../../assets/icons/metrics/joy.png';
import trust from '../../assets/icons/metrics/trust.png';
import fear from '../../assets/icons/metrics/fear.png';
import surprise from '../../assets/icons/metrics/surprise.png';
import sadness from '../../assets/icons/metrics/sadness.png';
import disgust from '../../assets/icons/metrics/disgust.png';
import anger from '../../assets/icons/metrics/anger.png';
import anticipation from '../../assets/icons/metrics/anticipation.png';

import './newsfeed.scss'

const row = {
    width: "100%",
    height: "40px",
    padding: "0px 5px 0px 5px",
}

export default class Metrics extends PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
    return (
        <div style={row}>
            {/* <Bias story={this.props.story}/> */}
            <Emotion story={this.props.story}/>
            <Sentiment story={this.props.story}/>
        </div>
    );
}
}

const metric = {
    width: "30px",
    height: "30px",
    margin: "5px 5px 5px 5px",
    float: "left",
}

function Sentiment(props) {
    const sentiment = props.story.sentiment

    if (sentiment == "pos") {
        return (
            <img src={positive} style={metric} alt="positive"></img>
        )
    }
    if (sentiment == "neu") {
        return (
            <img src={neutral} style={metric} alt="neutral"></img>
        )
    }
    if (sentiment == "neg") {
        return (
            <img src={negative} style={metric} alt="negative"></img>
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
            <img src={joy} style={metric} alt="joy"></img>
        )
    }
    if (emotion == "trust") {
        return (
            <img src={trust} style={metric} alt="trust"></img>
        )
    }
    if (emotion == "fear") {
        return (
            <img src={fear} style={metric} alt="fear"></img>
        )
    }
    if (emotion == "surprise") {
        return (
            <img src={surprise} style={metric} alt="surprise"></img>
        )
    }
    if (emotion == "sadness") {
        return (
            <img src={sadness} style={metric} alt="sadness"></img>
        )
    }
    if (emotion == "disgust") {
        return (
            <img src={disgust} style={metric} alt="disgust"></img>
        )
    }
    if (emotion == "anger") {
        return (
            <img src={anger} style={metric} alt="anger"></img>
        )
    }
    if (emotion == "anticipation") {
        return (
            <img src={anticipation} style={metric} alt="anticipation"></img>
        )
    }
    else {
        return (
            null
        )
    }

}

// function Bias (props) {
//     const bias = props.story.political_biasness
//     if (bias == "Liberal") {
//         return (
//             <img src={left} style={metric} alt="Left"></img>
//         )
//     }
//     if (bias == "Center-Liberal") {
//         return (
//             <img src={center_left} style={metric} alt="Center_Left"></img>
//         )
//     }
//     if (bias == "Center") {
//         return (
//             <img src={center} style={metric} alt="Center"></img>
//         )
//     }
//     if (bias == "Center-Conservative") {
//         return (
//             <img src={center_right} style={metric} alt="Center_Right"></img>
//         )
//     }
//     if (bias == "Conservative") {
//         return (
//             <img src={right} style={metric} alt="Right"></img>
//         )
//     }
//     else {
//         return (
//             null
//         )
//     }
// }

{/* <img  src="https://via.placeholder.com/50" className="metric" alt="emotion"/>
<img  src="https://via.placeholder.com/50" className="metric" alt="sentiment"/> */}