import React, { Component }  from 'react';
import Card from './article_card';

function Spectrum(props) {
    return(
        <div className="app">
            <div className="newsTopic">
                <a href="topic.html">
                    <h2>{props.topic}</h2>
                </a>
            </div>
            <div className="full hide-scroll">
                <ul className="hs">
                     <Card card={props.card}/>
                     <Card card={props.card}/>
                     <Card card={props.card}/>
                     <Card card={props.card}/>
                     <Card card={props.card}/>
                     <Card card={props.card}/>
                     <Card card={props.card}/>
                     <Card card={props.card}/>
                     <Card card={props.card}/>
                </ul>
            </div>
        </div>
    )
}

// const spectrum = {

//     card: {
//         articlephoto: 'https://via.placeholder.com/250',
//         title: 'The findings of a new study that looked at the heart of a swimmer vs. the heart of a runner underscored how sensitive our bodies are to different types of exercise',
//         articlelink: 'https://newyorktimes.com',
//         sourcelogoURL: 'https://via.placeholder.com/50',
//         sourcename: 'New York Times',
//         author: 'Marcus Cymerman',
//         time: '15mins',
//         bias: 'https://via.placeholder.com/50',
//         emotion: 'https://via.placeholder.com/50',
//         sentiment: 'https://via.placeholder.com/50'
//     },

//     topic: 'Climate Change'

// };

export default Spectrum;