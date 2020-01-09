import React, { Component } from 'react';

import positive from '../assets/icons/metrics/positive.png';
import negative from '../assets/icons/metrics/negative.png';
import neutral from '../assets/icons/metrics/neutral.png';

import joy from '../assets/icons/metrics/joy.png';
import trust from '../assets/icons/metrics/trust.png';
import fear from '../assets/icons/metrics/fear.png';
import surprise from '../assets/icons/metrics/surprise.png';
import sadness from '../assets/icons/metrics/sadness.png';
import disgust from '../assets/icons/metrics/disgust.png';
import anger from '../assets/icons/metrics/anger.png';
import anticipation from '../assets/icons/metrics/anticipation.png';
import plutchik from '../assets/img/plutchik.jpg';

import left from '../assets/icons/metrics/left.png';
import center_left from '../assets/icons/metrics/center_left.png';
import center from '../assets/icons/metrics/center.png';
import center_right from '../assets/icons/metrics/center_right.png';
import right from '../assets/icons/metrics/right.png';

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

      const section={
        width: "100%",
        height: "auto",
        marginBottom: "50px",
      }

      const half={
        width: "50%",
        height: "100%",
      }

      const metricContainer = {
        display: "flex",
        justifyContent: "center",
      }

      const legend = {
        textAlign: "center",
      }

      const metric = {
        width: "50%",
        height: "auto",
        margin: "0px auto",
    }
      

        return (
          <div style={contentStyle}>
            <div className="pageDescription">
              <h1>About</h1>
            </div>

            <div style={section}>
              <p>Mission Statement</p>
            </div>

            <div style={section}>
              <div style={half}>
                tfidf chart
              </div>
              <div style={half}>
                <h2>Key Words:</h2>
                <p>First, Metrix breaks down daily political news stories into key words. We analyze stories from the most popular topics and candidates in the 2020 presidential election debates.</p>
              </div>
            </div>

            <div style={section}>
                <h2>Sentiment:</h2>
                <p>Next, it presents a sentiment analysis which determines if the story is positive, neutral, or negative.</p>
                <div style={metricContainer}>
                  <div style={legend}>
                    <p>Positive</p>
                    <img src={positive} style={metric} alt="positive"></img>
                  </div>
                  <div style={legend}>
                    <p>Neutral</p>
                    <img src={neutral} style={metric} alt="neutral"></img>
                  </div>
                  <div style={legend}>
                    <p>Negative</p>
                    <img src={negative} style={metric} alt="negative"></img>
                  </div>
                </div>
            </div>


            <div style={section}>
              <div style={half}>
                <img src={plutchik} style={{width:"50%"}}></img>
              </div>
              <div style={half}>
              <h2>Emotion:</h2>
                <p>Then, Metrix matches key words to each of the following basic emotions and presents the most prominent.</p>
                <div style={metricContainer}>
                  <div style={legend}>
                    <p>Joy</p>
                    <img src={joy} style={metric} alt="joy"></img>
                  </div>
                  <div style={legend}>
                    <p>Trust</p>
                    <img src={trust} style={metric} alt="trust"></img>
                  </div>
                  <div style={legend}>
                    <p>Fear</p>
                    <img src={fear} style={metric} alt="fear"></img>
                  </div>
                  <div style={legend}>
                    <p>Surpirse</p>
                    <img src={surprise} style={metric} alt="surprise"></img>
                  </div>
                </div>
                <div style={metricContainer}>
                  <div style={legend}>
                    <p>Sadness</p>
                    <img src={sadness} style={metric} alt="sadness"></img>
                  </div>
                  <div style={legend}>
                    <p>Disgust</p>
                    <img src={disgust} style={metric} alt="disgust"></img>
                  </div>
                  <div style={legend}>
                    <p>Anger</p>
                    <img src={anger} style={metric} alt="anger"></img>
                  </div>
                  <div style={legend}>
                    <p>Anticipation</p>
                    <img src={anticipation} style={metric} alt="anticipation"></img>
                  </div>              
                </div>
            </div>
            </div>

            <div style={section}>
                <h2>Political Bias:</h2>
                <p>Finally, it learns from all key word, sentiment, and emotion data to predict political bias of each story. You are welcome to disagree with our label by completing the form under each article</p>
                <div style={metricContainer}>
                  <div style={legend}>
                    <p>Left</p>
                    <img src={left} style={metric} alt="left"></img>
                  </div>
                  <div style={legend}>
                    <p>Center-Left</p>
                    <img src={center_left} style={metric} alt="center_left"></img>
                  </div>
                  <div style={legend}>
                    <p>Center</p>
                    <img src={center} style={metric} alt="center"></img>
                  </div>
                  <div style={legend}>
                    <p>Center-Right</p>
                    <img src={center_right} style={metric} alt="center_right"></img>
                  </div>
                  <div style={legend}>
                    <p>Right</p>
                    <img src={right} style={metric} alt="right"></img>
                  </div>
                </div>
            </div>
          
          </div>
        )
    }
  }

export default Metrix;