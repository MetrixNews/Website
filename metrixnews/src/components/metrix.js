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