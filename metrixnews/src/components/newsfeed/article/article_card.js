import React, { Component }  from 'react';
import Article from './article';
import Metrics from './metrics';
import './article.scss'

function Card() {
    return(
        <a href="#openModal">
        
            <li className="item">
                <div className="row articlebox">
                    <Article />
                </div>
                <Metrics />
            </li>
         </a>
    )
}

export default Card;