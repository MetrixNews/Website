import React, { Component } from 'react';

import '../app.scss';
import './page_structure/page_structure.scss'

class Metrix extends Component {
    constructor(props) {
        super(props);
    }
  
    render() {

      const contentStyle = {
        paddingTop: this.props.styles.showSidebar ? 20 : this.props.styles.topBarHeight,
        paddingRight: 10,
        paddingBottom: this.props.styles.showSidebar ? 20 : this.props.styles.footerMenuHeight + 20,
        paddingLeft: this.props.styles.showSidebar ? this.props.styles.sidebarWidth + 20 : 10
      };

        return (
          <div style={contentStyle}>
            <div className="pageDescription">
              <h1>About</h1>
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