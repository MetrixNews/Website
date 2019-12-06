import React, { Component }  from 'react';
import '../../app.scss'
 
export default class Data extends Component {
    constructor(props) {
        super(props);
    }

    render() {
      return (
        <div className="newsData">
            <a href={this.props.topic.data1} >
      <button className="button">{this.props.topic.topic} Data: {this.props.topic.data1}</button>
            </a>
            
            <button className="button">{this.props.topic.topic} Data: {this.props.topic.data2}</button>
        </div>
    )
}
}