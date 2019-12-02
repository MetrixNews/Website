// import React, { Component } from 'react';
// import CardDeck from 'react-bootstrap/CardDeck';
// import Candidate from './election/candidate/candidate';
// import CandidateContainer from './election/candidate';
// import './election/party/party.scss';
// import PoliticalParty from './election/party/candidate_deck';

//import '../app.scss';

// class Election extends Component {
//    constructor(props) {
//        super(props);
 
//        this.shouldComponentRender = this.shouldComponentRender.bind(this);
//    }
   
//    componentDidMount() {
//        const {loadedCandidates} = this.props;
//        loadedCategories();
//    }
 
//    shouldComponentRender() {
//        const {pending} = this.props;
//        if(this.pending === false) return false;
//        // more tests
//        return true;
//    }
 
//    render() {
//        if(!this.shouldComponentRender()) return <Spinner />
 
//        return (
            // <div className="polls">
            //     <PrimaryButton />
            //     <PrimaryButton />
            //     <PrimaryButton />
            // </div>
//          <div>
//              <Candidate />  
//          </div>
//        )
//    }
//  }
 
//  Election.propTypes = {
//    candidates: PropTypes.array,
//    candidate: PropTypes.array,
//    pending: PropTypes.bool
//  }
 
//  // Newsfeed.propTypes = {
//  //   arrayWithShape: PropTypes.arrayOf(PropTypes.shape({
//  //     id: PropTypes.string.isRequired,
//  //     source: PropTypes.string.isRequired,
//  //   })).isRequired,
//  // }
 
//  const mapStateToProps = state => ({
//    error: getCandidatesError(state),
//    categories: getCandidates(state),
//    pending: getCandidatesPending(state)
//  })
 
//  const mapDispatchToProps = dispatch => bindActionCreators({
//    loadedCandidates: loadCandidates
//  }, dispatch)
 
//  export default connect(
//    mapStateToProps,
//    mapDispatchToProps
//  )(Election );