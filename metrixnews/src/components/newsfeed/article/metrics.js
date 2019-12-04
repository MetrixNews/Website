import React, { Component }  from 'react';
import '../newsfeed.scss'


export default class Metrics extends Component {
    constructor(props) {
        super(props);
    }

    render() {
    return (
        <div className="metricRow">
            <p className="metric">{this.props.story.political_biasness}</p>
            <p className="metric">{this.props.story.emotion}</p>
            <p className="metric">{this.props.story.sentiment}</p>
        </div>
    );
}
}

{/* <img  src="https://via.placeholder.com/50" className="metric" alt="emotion"/>
<img  src="https://via.placeholder.com/50" className="metric" alt="sentiment"/> */}