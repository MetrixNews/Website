import React, { Component }  from 'react';
import Article from './article';
import Metrics from './metrics';

function Card(props) {
    return(
        <li className="item">
            <a href="#openModal">
                <Article publishinfo={props.card}/>
                <Metrics scores={props.card}/>
            </a>
        </li>
    )
}

export default Card;