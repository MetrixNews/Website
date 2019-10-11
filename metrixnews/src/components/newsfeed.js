import React, { Component } from 'react';
import PageHeader from './page_header.js';
import Footer from './footer.js';
// import Spectrum from './news_spectrum';


function NewsfeedComponent (props){
 return (
     <PageHeader header={props.newsfeed}/>,
     <Footer />
 )
}

const news_feed = {
        title: 'NEWS EXPLORATION',
        desc: 'Browse todays hottest political topics from trusted news sources. Select any topic to analyze it more in depth. Click here to suggest a new topic or source. Visit the About page to learn how we label articles.'
};

export default NewsfeedComponent;