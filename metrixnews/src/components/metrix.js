import React, { Component } from 'react';

import '../app.scss';
import './page_structure/page_structure.scss'

class Metrix extends Component {
    constructor(props) {
        super(props);
    }
  
    render() {

        return (
          <div>
            <div className="pageDescription">
              <h1>ABOUT METRIX NEWS</h1>
            </div>
            <p>
              It's presidential election year. We understand it will be especially toxic this year. This is a tool to understand different perspectives, topics, and candidates without judgement, confirmation bias, or favoritism in your political media. Understand. Accept. Vote.
            </p>
            <div className="about"> 
                <h2>What We Do</h2>
                <h2>How it Works</h2>
                <h2>Our People</h2>
            </div>
          </div>
        )
    }
  }

export default Metrix;