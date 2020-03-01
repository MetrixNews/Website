import React, { PureComponent } from 'react';
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'

import positive from '../../assets/icons/metrics/positive.png';
import negative from '../../assets/icons/metrics/negative.png';
import neutral from '../../assets/icons/metrics/neutral.png';

import joy from '../../assets/icons/metrics/joy.png';
import trust from '../../assets/icons/metrics/trust.png';
import fear from '../../assets/icons/metrics/fear.png';
import surprise from '../../assets/icons/metrics/surprise.png';
import sadness from '../../assets/icons/metrics/sadness.png';
import disgust from '../../assets/icons/metrics/disgust.png';
import anger from '../../assets/icons/metrics/anger.png';
import anticipation from '../../assets/icons/metrics/anticipation.png';

// import left from '../assets/icons/metrics/left.png';
// import center_left from '../assets/icons/metrics/center_left.png';
// import center from '../assets/icons/metrics/center.png';
// import center_right from '../assets/icons/metrics/center_right.png';
// import right from '../assets/icons/metrics/right.png';

import Research from '../../assets/brand/Research.pdf';

import '../../app.scss';

const pageDescription = {
  color: "var(--highlight-color)",
  textAlign: "center",
  fontSize: "24pt",
  fontWeight: "bold",
  borderBottom: "solid 2px var(--highlight-color)",

}

const header = {
  borderTop: "solid 2px var(--highlight-color)",
  marginTop: "30px",
  color: "var(--metrix-color)",
  fontSize: "32pt",
  fontWeight: "bold",
}

const mission = {
  paddingTop: "20px",
  maxWidth: "1000px", 
  margin: "0 auto", 
  textAlign: "center", 
  color: "var(--metrix-color)",
}

const legend = {
  textAlign: "center",
  width: "100%",
  float: "left",
}

const metric = {
  width: "40px",
  height: "auto",
  margin: "0px auto",
}

const gridContainer ={
  display: "grid",
  gridTemplateColumns: "50% 50%",
  gridGap: "5px",
  backgroundColor: "var(--bg-color)",
  marginBottom: "20px",
}

const founder ={
  minWidth: "30%",
  backgroundColor: "var(--bg-color)",
  textAlign: "center",
}

class Metrix extends PureComponent {
    constructor(props) {
        super(props);
    }
  
    render() {
      const contentStyle = {
        paddingTop: this.props.styles.showSidebar ? 20 : this.props.styles.topBarHeight,
        paddingRight: 10,
        paddingBottom: this.props.styles.showSidebar ? 20 : this.props.styles.footerMenuHeight + 20,
        paddingLeft: this.props.styles.showSidebar ? this.props.styles.sidebarWidth + 10 : 10,
        width: "100%",
      };
        return (
          <div style={contentStyle}>
            <div style={pageDescription}>
              <h1>User Guide</h1>
            </div>


          {/* Mission */}
          <div style={mission}> 
            <h5>America is facing critical environmental, social, and governance issues that must be addressed in the next presidential term.</h5><br/>
            <h5>Metrix.News is an analytical research tool for the 2020 presidential election.</h5><br/>
            <h5>Metrix.News presents data and information from diverse, credible sources through a simple platform. We do not collect, store, or analyze personal user data. 
              Instead, we collect, store, and analyze daily news stories to hint toward authors' emotions and tone.<a href={Research} target="_blank" rel="noopener noreferrer"> Click here to continue reading about our research</a> </h5>
          </div>
            
          {/* Legend */}
          <div >
            <h2 style={header}>Tones</h2>
          </div>
          <div style={gridContainer}>
            <div style = {{
                      border: "#83c441 solid 10px",
                      textAlign: "center",
                      padding: "10px",
                    }}>
            <div style={legend}>
              <img src={positive} style={metric}/>
              <div>
                <h3>Positive</h3>
                <div>
              </div>
            </div>
            </div>
            </div>
            <div style = {{
                      border: "#e73642 solid 10px",
                      textAlign: "center",
                      padding: "10px",
                    }}>            
            <div style={legend}>
              <img src={negative} style={metric}/>
              <div>
                <h3>Negative</h3>
              </div>
            </div>
            </div>
            <div style = {{
                      border: "#f8d524 solid 10px",
                      textAlign: "center",
                      padding: "10px",
                      gridColumn: "1 / span 2",
                    }}>            
            <div style={legend}>
              <img src={neutral} style={metric}/>
              <div>
                <h3>Nuetral</h3>
              </div>
            </div>
            </div>    
          </div>


          <div>
            <h2 style={header}>Emotions</h2>
          </div>
          <div style={gridContainer}>
            <div style = {{
                      border: "#fffcd6 solid 10px",
                      textAlign: "center",
                      padding: "10px",
                    }}>
            <div style={legend}>
              <img src={joy} style={metric}/>
              <div>
                <h3>Joy</h3>
                <div>
                  <br />
                  <h5>Optimism, Serenity, Love, Ecstacy</h5>
                </div>
              </div>
            </div>
            </div>
            <div style = {{
                      border: "#d8e9b5 solid 10px",
                      textAlign: "center",
                      padding: "10px",
                    }}>            
            <div style={legend}>
              <img src={trust} style={metric}/>
              <div>
                <h3>Admiration</h3>
                <div>
                  <br />
                  <h5>Love, Acceptance, Submission, Hopeful</h5>
                </div>
              </div>
            </div>
            </div>
            <div style = {{
                      border: "#a0d5b1 solid 10px",
                      textAlign: "center",
                      padding: "10px",
                    }}>            
            <div style={legend}>
              <img src={fear} style={metric}/>
              <div>
                <h3>Fear</h3>
                <div>
                  <br />
                  <h5>Submission, Apprehension, Awe, Terror</h5>
                </div>
              </div>
            </div>
            </div>
            <div style = {{
                      border: "#bdd8ec solid 10px",
                      textAlign: "center",
                      padding: "10px",
                    }}>            
            <div style={legend}>
              <img src={surprise} style={metric}/>
              <div>
                <h3>Surprise</h3>
                <div>
                  <br />
                  <h5>Awe, Distraction, Disapproval, Amazement</h5>
                </div>
              </div>
            </div>
            </div>
            <div style = {{
                      border: "#c7def4 solid 10px",
                      textAlign: "center",
                      padding: "10px",
                    }}>            
            <div style={legend}>
              <img src={sadness} style={metric}/>
              <div>
                <h3>Sadness</h3>
                <div>
                  <br />
                  <h5>Disapproval, Pensiveness, Remorse, Grief</h5>
                </div>
              </div>
            </div>
            </div>
            <div style = {{
                      border: "#ccbfde solid 10px",
                      textAlign: "center",
                      padding: "10px",
                    }}>            
            <div style={legend}>
              <img src={disgust} style={metric}/>
              <div>
                <h3>Disgust</h3>
                <div>
                  <br />
                  <h5>Remorse, Boredom, Contempt, Loathing</h5>
                </div>
              </div>
            </div>
            </div>
            <div style = {{
                      border: "#f9bab0 solid 10px",
                      textAlign: "center",
                      padding: "10px",
                    }}>            
            <div style={legend}>
              <img src={anger} style={metric}/>
              <div>
                <h3>Anger</h3>
                <div>
                  <br />
                  <h5>Contempt, Annoyance, Aggressiveness, Rage</h5>
                </div>
              </div>
            </div>
            </div>
            <div style = {{
                      border: "#ffdfb5 solid 10px",
                      textAlign: "center",
                      padding: "10px",
                    }}>            
            <div style={legend}>
              <img src={anticipation} style={metric}/>
              <div>
                <h3>Anticipation</h3>
                <div>
                  <br />
                  <h5>Aggressiveness, Interest, Optimism, Vigilance</h5>
                </div>
              </div>
            </div>
            </div>        
          </div>

{/* Founders */}
          <div>
            <h2 style={header}>Founders</h2>
          </div>
          <CardGroup>
          <Card style={founder}>
              <Card.Body>
                <Card.Text>
                <h3>AJ Raymond</h3>
                  <br />
                  <h5>Researcher, Frontend Engineer, Data Scientist</h5>
                  <h5><a href="https://www.linkedin.com/in/antraymond/" target="_blank" rel="noopener noreferrer">LinkedIn</a></h5>
                </Card.Text>
              </Card.Body>
             </Card>

             <Card style={founder}>
              <Card.Body>
                <Card.Text>
                <h3>Marcus Cymerman</h3>
                  <br />
                  <h5>Backend Engineer, Data Scientist</h5>
                  <h5><a href="https://www.linkedin.com/in/mpcymerman/" target="_blank" rel="noopener noreferrer">LinkedIn</a></h5>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={founder}>
              <Card.Body>
                <Card.Text>
                <h3>Simon Mantlo</h3>
                  <br />
                  <h5>Researcher, Data Engineer</h5>
                  <h5><a href="https://www.linkedin.com/in/simonmantlo/" target="_blank" rel="noopener noreferrer">LinkedIn</a></h5>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={founder}>
              <Card.Body>
                <Card.Text>
                <h3>Kiki Mowery</h3>
                  <br />
                  <h5>Designer, UI/UX Tester </h5>
                  <h5><a href="https://www.linkedin.com/in/kiki-mowery-532465a7/" target="_blank" rel="noopener noreferrer">LinkedIn</a></h5>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={founder}>
              <Card.Body>
                <Card.Text>
                <h3>Nick Wethington</h3>
                  <br />
                  <h5>UI/UX Tester</h5>
                  <h5><a href="https://www.linkedin.com/in/nick-wethington-387ab01a/" target="_blank" rel="noopener noreferrer">LinkedIn</a></h5>
                </Card.Text>
              </Card.Body>
            </Card>
            </CardGroup>

          {/* Cooklies Policy */}
          <div >
            <h2 style={header}>Cookies Policy</h2>
            <h5>Review our cookies policy here:  </h5> 
            <h5><a href="https://www.cookiepolicygenerator.com/live.php?token=MaqKu1fNLSk0aRRRo1DMTN6Totu21QJN" alt="cookiesPolicy">Cookies Policy</a></h5>
          </div>
          
          {/* Acknowledgements */}
          <div>
            <h2 style={header}>Support</h2>
            <h5>We sincerely thank the following organizations for their supporting research, services, designs, and more.</h5>
            <h5><a href="https://kelley.iu.edu/faculty-research/centers-institutes/entrepreneurship-innovation/index.cshtml" target="_blank" rel="noopener noreferrer" >Johnson Center for Enrepreneurship and Innovation</a></h5> 
            <h5><a href="https://luddy.indiana.edu/academics/innovation-entrepreneurship/index.html" target="_blank" rel="noopener noreferrer" >Shoemaker Innovation Center</a></h5>  
            <h5><a href="https://mediacloud.org/" target="_blank" rel="noopener noreferrer" >MediaCloud</a></h5>  
            <h5><a href="https://newsapi.org/" target="_blank" rel="noopener noreferrer" >NewsAPI</a></h5>  
            <h5><a href="http://sentiment.nrc.ca/lexicons-for-research/" target="_blank" rel="noopener noreferrer" >NRC Emotion Lexicon</a></h5>  
            <h5><a href="https://www.joypixels.com/emoji" target="_blank" rel="noopener noreferrer" >JoyPixels</a></h5>  
          </div>

          {/* Contact */}
          <div>
            <h2 style={header}>Contact</h2>
            <h5>Email: <a href="info@metrix.news" target="_blank" rel="noopener noreferrer" > info@metrix.news</a></h5> 
            <h5>Open Source Code: <a href="https://github.com/MetrixNews" target="_blank" rel="noopener noreferrer" > Github</a></h5>  
          </div>
  </div>         
        )
    }
  }

export default Metrix;