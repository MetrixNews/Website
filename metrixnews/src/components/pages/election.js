import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Scroll from 'react-scroll'

import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import loadCandidates from '../../actionCreators/election';
import {getCandidatesError, getCandidates, getCandidatesPending} from '../../reducers/election';

import Candidate from '../candidates/candidate'

import '../../app.scss';

const pageDescription = {
  color: "var(--highlight-color)",
  textAlign: "center",
  fontSize: "24pt",
  fontWeight: "bold",
}
const menuItem = {
  fontSize: "8pt",
  fontWeight: "bold",
  border: "solid 2px var(--metrix-color)",
  borderRadius: "7px",
  backgroundColor: "var(--metrix-color)",
  color: "var(--bg-color)", 
}

const loader = {
  margin: "0 auto",
  textAlign: "center",
}

let Link = Scroll.Link;

class Election extends PureComponent {
   constructor(props) {
       super(props);
 
       this.shouldComponentRender = this.shouldComponentRender.bind(this);
   }
   
   componentDidMount() {
       const {loadedCandidates} = this.props;
       loadedCandidates();
   }
 
   shouldComponentRender() {
       const {pending} = this.props;
       if(this.pending === false) return false;
       // more tests
       return true;
   }
 
   render() {
    const contentStyle = {
      paddingTop: this.props.styles.showSidebar ? 40 : this.props.styles.topBarHeight + 40,
      paddingRight: 10,
      paddingBottom: this.props.styles.showSidebar ? 10 : this.props.styles.footerMenuHeight + 20,
      paddingLeft: this.props.styles.showSidebar ? this.props.styles.sidebarWidth + 10 : 10
    };
    
       return (
        <div style={contentStyle}>
          <div style={pageDescription}>
            <h1>2020 Presidential Candidates</h1>
          </div>
          <div style={loader}>
            <Loader
              type="Oval"
              color="var(--metrix-color)"
              height={100}
              width={100}
              timeout={500} //0.5 secs
            />
          </div>
          <div className="app">
            <div className="full hide-scroll">
              <ul className="menu">
                {this.props.candidates.map((candidate, i) => ( 
                  <Link 
                    person={candidate}
                    key={i}
                    to={candidate.Name}
                    offset={-80}
                    spy={true} 
                    smooth={true} 
                    duration={500} 
                    className='menuItem' 
                    activeClass='some-active-class'
                    >
                      <li style={menuItem} key={i} topic={candidate}>
                       {candidate.Name}
                      </li>
                  </Link>
                ))}
                </ul>
              </div> 
          </div>

          <div className="bg">
            {this.props.candidates.map((candidate, i) => (
              <Candidate
                key={i}
                person={candidate}
              />
            ))}
          </div>
        </div>
       )
   }
 }
 
 Election.propTypes = {
   candidates: PropTypes.array,
   candidate: PropTypes.array,
   pending: PropTypes.bool
 }
 
 // Newsfeed.propTypes = {
 //   arrayWithShape: PropTypes.arrayOf(PropTypes.shape({
 //     id: PropTypes.string.isRequired,
 //     source: PropTypes.string.isRequired,
 //   })).isRequired,
 // }
 
 const mapStateToProps = state => ({
   error: getCandidatesError(state),
   candidates: getCandidates(state),
   pending: getCandidatesPending(state)
 })
 
 const mapDispatchToProps = dispatch => bindActionCreators({
   loadedCandidates: loadCandidates
 }, dispatch)
 
 export default connect(
   mapStateToProps,
   mapDispatchToProps
 )(Election );