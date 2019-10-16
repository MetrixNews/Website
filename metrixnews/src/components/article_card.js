import React, { Component }  from 'react';
import Article from './article';
import Metrics from './metrics';

function Card(props) {
    return(
        <li className="item">
            <a href="#openModal">
                <Article />
                <Metrics />
            </a>
        </li>
    )
}

export default Card;