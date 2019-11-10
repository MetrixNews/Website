import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';

import TopicComponent from '../../topic'
import Card from '../article/card';
import './spectrum.scss';

export default class Spectrum extends Component {
  render() {
    return (
        <div>
            <ul>
                {this.props.articles.map(article => (
                    <li key={article.id}>{article.title}</li>
                ))}
            </ul>
        </div>

        // <div className="app">
        //     <div className="newsTopic">
        //         <ul>
        //             <li>
        //                 <Link to='/topic'><h2>Climate Change</h2></Link> 
        //             </li>
        //         </ul>
        //         <Route exact path='/topic' component={TopicComponent}></Route>
        //     </div>
        //     <div className="full hide-scroll">
        //         <ul className="hs">
        //             {this.props.articles.map((article, id) => (
        //                 <Card key={id} {...article} />
        //             ))}   
        //         </ul>
        //     </div> 
        // </div>
    )
  }
}

Spectrum.propTypes = {
  articles: PropTypes.array
}
        