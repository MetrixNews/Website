import React, { Component } from 'react';

import '../app.scss';

class Metrix extends Component {
    constructor(props) {
        super(props);
    }
  
    render() {

        return (
          <div className="about"> 
              <h2>What We Do</h2>
              <h2>How it Works</h2>
              <h2>Our People</h2>
          </div>
        )
    }
  }

export default Metrix;