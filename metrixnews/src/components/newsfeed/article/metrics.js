import React, { Component }  from 'react';
import '../newsfeed.scss'


function Metrics(props) {
    return (
        <div className="metricRow">
            <img src="https://via.placeholder.com/50" className="metric" alt="bias"/>
            <img  src="https://via.placeholder.com/50" className="metric" alt="emotion"/>
            <img  src="https://via.placeholder.com/50" className="metric" alt="sentiment"/>
        </div>
    )
}

export default Metrics;