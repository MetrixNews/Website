import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'

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
        width: "80%",
        display: "flex",
        textAlign: "center",
        margin: "0 auto",
      }

      const mission={
        fontSize: "14pt",
        textAlign: "center",
      }

      const metricContainer = {
        display: "flex",
        justifyContent: "left",
        flexWrap: "wrap",
        margin: "10px 0px"
      }

      const legend = {
        textAlign: "center",
        fontWeight: "bold",
        margin: "0px 8px"
      }

      const metric = {
        width: "40px",
        height: "auto",
        margin: "0px auto",
    }

    const description = {
      fontSize: "12pt",
    }
      

        return (
          <div style={contentStyle}>
            <div className="pageDescription">
              <h1>User Guide</h1>
            </div>
            
            {/* Intro Message */}
            <div style={section}>
              <p style={mission}>Welcome! Metrix is an open source research tool for the 2020 U.S. presidential election. Follow this guide to understand exactly what we do. </p>
            </div>


          {/* Legend */}
          <Card style={{marginBottom: "25px"}}>
          <Card.Header as="h2">Legend</Card.Header>
          <Card.Body>
            <Card.Title as="h3">Political Bias</Card.Title>
            <div style={metricContainer}>
                  <div style={legend}>
                    <img src={left} style={metric} alt="left"></img>
                    <p>Left</p>
                  </div>
                  <div style={legend}>
                    <img src={center_left} style={metric} alt="center_left"></img>
                    <p>Center-Left</p>
                  </div>
                  <div style={legend}>
                    <img src={center} style={metric} alt="center"></img>
                    <p>Center</p>
                  </div>
                  <div style={legend}>
                    <img src={center_right} style={metric} alt="center_right"></img>
                    <p>Center-Right</p>
                  </div>
                  <div style={legend}>
                    <img src={right} style={metric} alt="right"></img>
                    <p>Right</p>
                </div>
              </div>
              <Card.Text style={{borderBottom: "solid grey"}}>
                <p style={description}>Our labels are not influenced by user input. Instead, we analyze the author's language in each political story. Metrix uses Machine Learning to predict political bias of individual news articles using this 5 point scale</p>
              </Card.Text>


            <Card.Title as="h3">Emotion</Card.Title>
            <div style={metricContainer}>
                  <div style={legend}>
                    <img src={joy} style={metric} alt="joy"></img>
                    <p>Joy</p>
                  </div>
                  <div style={legend}>
                    <img src={trust} style={metric} alt="trust"></img>
                    <p>Trust</p>
                  </div>
                  <div style={legend}>
                    <img src={fear} style={metric} alt="fear"></img>
                    <p>Fear</p>
                  </div>
                  <div style={legend}>
                    <img src={surprise} style={metric} alt="surprise"></img>
                    <p>Surpirse</p>
                  </div>
                  <div style={legend}>
                    <img src={sadness} style={metric} alt="sadness"></img>
                    <p>Sadness</p>
                  </div>
                  <div style={legend}>
                    <img src={disgust} style={metric} alt="disgust"></img>
                    <p>Disgust</p>
                  </div>
                  <div style={legend}>
                    <img src={anger} style={metric} alt="anger"></img>
                    <p>Anger</p>
                  </div>
                  <div style={legend}>
                    <img src={anticipation} style={metric} alt="anticipation"></img>            
                    <p>Anticipation</p>
                </div>
              </div>
              <Card.Text style={{borderBottom: "solid grey"}}>
              <p style={description}>Metrix uses Natural Language Processing to indiciate emotional rhetoric in authors' language and presents an emoji representation of the most prominent one. Read more about these emotions here:                 <a href="https://www.6seconds.org/2017/04/27/plutchiks-model-of-emotions/" target="_blank" rel="noopener noreferrer">Plutchik's Wheel of Emotions</a> <br></br>
              </p>
            </Card.Text>

            <Card.Title as="h3">Sentiment</Card.Title>
            <div style={metricContainer}>
                  <div style={legend}>
                    <img src={positive} style={metric} alt="positive"></img>
                    <p>Positive</p>
                  </div>
                  <div style={legend}>
                    <img src={neutral} style={metric} alt="neutral"></img>
                    <p>Neutral</p>
                  </div>
                  <div style={legend}>
                    <img src={negative} style={metric} alt="negative"></img>
                    <p>Negative</p>
                  </div>
                </div>
            <Card.Text>
            <p style={description}>Metrix uses Natural Language Processing to inidicate the overall sentiment of the article. Due to the structure of a news article, the majority are expected to be neutral. The event or author's tone must be rather extreme to recieve a positive or negative score.</p>
            </Card.Text>
          </Card.Body>
        </Card>

          {/* Team */}
          <Card>
            <Card.Header as="h2">Our Team</Card.Header>
          </Card>
          <CardGroup style={{marginBottom: "25px"}}>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/150"/>
              <Card.Body>
                <Card.Title>AJ Raymond</Card.Title>
                <Card.Text>
                  Founder and Developer
                  <br></br>
                  <a href="" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/150"/>
              <Card.Body>
                <Card.Title>Marcus Cymerman</Card.Title>
                <Card.Text>
                  Founder and Developer
                  <br></br>
                  <a href="" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/150"/>
              <Card.Body>
                <Card.Title>Simon Mantlo</Card.Title>
                <Card.Text>
                  Analyst
                  <br></br>
                  <a href="" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>

          {/* Contact */}
          <Card style={{marginBottom: "25px"}}>
            <Card.Header as="h2">Contact Us</Card.Header>
            <Card.Body>
              <Card.Title>Find more information about Metrix.News here or contact us with any questions or comments</Card.Title>
              <Card.Text>
                <a href="" target="_blank" rel="noopener noreferrer">Email</a> <br></br>
                <a href="" target="_blank" rel="noopener noreferrer">Research PDF</a> <br></br>
              </Card.Text> 
            </Card.Body>
          </Card>

          {/* Acknowledgements */}
          <Card style={{marginBottom: "25px"}}>
            <Card.Header as="h2">Acknowledgements</Card.Header>
            <Card.Body>
              <Card.Title>We thank the following services for their support</Card.Title>
              <Card.Text>
                <a href="https://mediacloud.org/" target="_blank" rel="noopener noreferrer">MediaCloud</a> <br></br>
                <a href="https://newsapi.org/" target="_blank" rel="noopener noreferrer">NewsAPI</a> <br></br>
                <a href="http://sentiment.nrc.ca/lexicons-for-research/" target="_blank" rel="noopener noreferrer">NRC Emotion Lexicon</a> <br></br>
                <a href="https://www.joypixels.com/emoji" target="_blank" rel="noopener noreferrer">Emojis</a> <br></br>
              </Card.Text> 
            </Card.Body>
          </Card>

</div>         
        )
    }
  }

export default Metrix;