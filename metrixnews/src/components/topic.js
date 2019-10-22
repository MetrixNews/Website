import React, { Component } from 'react';
import Spectrum from './newsfeed/spectrum/news_spectrum';


function TopicComponent (){
 return (
    <div>
      <div className="newsTopic">
        <h2>Climate Change</h2>
      </div>
      <Spectrum />
    </div>
 )
}
export default TopicComponent;