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

import left from '../assets/icons/metrics/left.png';
import center_left from '../assets/icons/metrics/center_left.png';
import center from '../assets/icons/metrics/center.png';
import center_right from '../assets/icons/metrics/center_right.png';
import right from '../assets/icons/metrics/right.png';

import Research from '../assets/brand/Research.pdf';

import AJ  from '../assets/img/AJ.jpg';
import marcus  from '../assets/img/marcus.jpg';
import simon  from '../assets/img/simon.jpg';

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

     const header={
        background: "var(--bg-color)",
        color: "var(--metrix-color)",
        fontSize: 32,
        fontWeight: "bold",
        textAlign: "left",
        float: "left",
      }
      const metricContainer = {
        display: "flex",
        justifyContent: "left",
        flexWrap: "wrap",
        margin: "10px 0px",
        borderBottom: "solid 2px var(--highlight-color)"
      }

      const legend = {
        textAlign: "center",
        margin: "0px 8px",
        fontSize: "10pt"
      }

      const metric = {
        width: "40px",
        height: "auto",
        margin: "0px auto",

    }

    const text = {
      fontSize: "12pt",
    }

    const founder = {
      width: "100%",
      height: "auto",
    }
      

        return (
          <div style={contentStyle}>
            <div className="pageDescription">
              <h1>User Guide</h1>
            </div>
            
          {/* Legend */}
          <Card style={{marginBottom: "25px"}}>
          <Card.Header as="h1" style={header}>Legend</Card.Header>
          <Card.Body>
            <Card.Title as="h1" style={{color: "var(--metrix-color"}}>Political Bias</Card.Title>
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

            <Card.Title as="h1">Emotional Language</Card.Title>
            <span style={text}>Read what these mean here: </span><a href="https://www.6seconds.org/2017/04/27/plutchiks-model-of-emotions/" target="_blank" rel="noopener noreferrer" style={text}>Plutchik's Wheel of Emotions</a> 

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


            <Card.Title as="h1">Tone</Card.Title>
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
          </Card.Body>
        </Card>

          {/* Resaerch and Code */}
          <Card style={{marginBottom: "25px"}}>
            <Card.Header as="h1" style={header}>Research and Code</Card.Header>
            <Card.Body>
              <Card.Text>
                <span style={text}>Read more about our research here: </span><a href={Research} target="_blank" rel="noopener noreferrer" style={text}>Research</a> <br/><br/>
                <span style={text}>Review our open source code here: </span><a href="https://github.com/MetrixNews" target="_blank" rel="noopener noreferrer" style={text}>Github</a> <br/><br/>
                <p style={text}>Email: info@metrix.news</p>
              </Card.Text> 
            </Card.Body>
          </Card>

          {/* Team */}
          <Card>
            <Card.Header as="h1" style={header}>Founders</Card.Header>
          </Card>
          <CardGroup style={{marginBottom: "25px"}}>
            <Card>
              <Card.Img variant="top" src={AJ} style={founder}/>
              <Card.Body>
                <Card.Title as="h2" style={{fontWeight: "bold"}}>AJ Raymond</Card.Title>
                <Card.Text as="h4">
                  Researcher, Frontend Engineer, Data Scientist
                  <br></br>
                  <a href="https://www.linkedin.com/in/antraymond/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
            <Card.Img variant="top" src={marcus}/>
              <Card.Body>
                <Card.Title as="h2" style={{fontWeight: "bold"}}>Marcus Cymerman</Card.Title>
                <Card.Text as="h4">
                  Backend Engineer, Data Scientist
                  <br></br>
                  <a href="https://www.linkedin.com/in/mpcymerman/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
            <Card.Img variant="top" src={simon}/>
              <Card.Body>
                <Card.Title as="h2" style={{fontWeight: "bold"}}>Simon Mantlo</Card.Title>
                <Card.Text as="h4">
                  Researher, Data Engineer 
                  <br></br>
                  <a href="https://www.linkedin.com/in/simonmantlo/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>

          {/* Cooklies Policy */}
          <Card style={{marginBottom: "25px"}}>
            <Card.Header as="h1" style={header}>Cookies Policy</Card.Header>
            <Card.Body>
              <Card.Text>
                <span style={text}>Review our cookies policy here:  </span> 
                <a href="https://www.cookiepolicygenerator.com/live.php?token=MaqKu1fNLSk0aRRRo1DMTN6Totu21QJN" alt="cookiesPolicy" style={text}>Cookies Policy</a>
              </Card.Text> 
            </Card.Body>
          </Card>

          {/* Acknowledgements */}
          <Card style={{marginBottom: "25px"}}>
            <Card.Header as="h1" style={header}>Acknowledgements</Card.Header>
            <Card.Body>
              <Card.Text>
                <p style={text}>We sincerely thank the follwoing organizations for their supporting research, services, designs, and more.</p>
                <a href="https://kelley.iu.edu/faculty-research/centers-institutes/entrepreneurship-innovation/index.cshtml" target="_blank" rel="noopener noreferrer" style={text}>Johnson Center for Enrepreneurship and Innovation</a> <br></br>
                <a href="https://luddy.indiana.edu/academics/innovation-entrepreneurship/index.html" target="_blank" rel="noopener noreferrer" style={text}>Shoemaker Innovation Center</a> <br></br>
                <a href="https://mediacloud.org/" target="_blank" rel="noopener noreferrer" style={text}>MediaCloud</a> <br></br>
                <a href="https://newsapi.org/" target="_blank" rel="noopener noreferrer" style={text}>NewsAPI</a> <br></br>
                <a href="http://sentiment.nrc.ca/lexicons-for-research/" target="_blank" rel="noopener noreferrer" style={text}>NRC Emotion Lexicon</a> <br></br>
                <a href="https://www.joypixels.com/emoji" target="_blank" rel="noopener noreferrer" style={text}>JoyPixels</a> <br></br>
              </Card.Text> 
            </Card.Body>
          </Card>

</div>         
        )
    }
  }

export default Metrix;