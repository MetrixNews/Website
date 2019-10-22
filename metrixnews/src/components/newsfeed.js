import React, { Component } from 'react';
import Spectrum from './newsfeed/spectrum/news_spectrum';
import TopicComponent from './topic';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


function NewsfeedComponent (){
 return (
    <div>
      <div className="newsTopic">
        <ul>
          <li>
            <Link to='/topic'><h2>Cimate Change</h2></Link> 
          </li>
        </ul>
        <Route exact path='/topic' component={TopicComponent}></Route>
      </div>
      <Spectrum />
    </div>
    



 )
}
export default NewsfeedComponent;