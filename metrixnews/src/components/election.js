import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Spinner from 'react-bootstrap/Spinner';
import loadCandidates from '../actionCreators/election';
import {getCandidatesError, getCandidates, getCandidatesPending} from '../reducers/election';


import './election/party/party.scss';
import '../app.scss';

class Election extends Component {
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
       if(!this.shouldComponentRender()) return <Spinner />
 
       return (
           
            <div className="polls">
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