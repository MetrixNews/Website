import React, { Component }  from 'react';

function PageHeader(props) {
    return (
        <div className="pageDescription">
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
        </div>
    )
}

const page_header = {
    title: 'NEWS EXPLORATION',
    desc: 'Browse todays hottest political topics from trusted news sources. Select any topic to analyze it more in depth. Click here to suggest a new topic or source. Visit the About page to learn how we label articles.'
};