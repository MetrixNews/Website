import React, { Component }  from 'react';


function Metrics(props) {
    return (
        <div className="metricRow">
            <img src={props.scores.bias} className="metric" alt="bias"/>
            <img  src={props.scores.emotion} className="metric" alt="emotion"/>
            <img  src={props.scores.sentiment} className="metric" alt="sentiment"/>
        </div>
    )
}

export default Metrics;