import fetch from 'cross-fetch'
import {fetchCandidatesPending, fetchCandidatesSuccess, fetchCandidatesError} from '../actions/index';

// .then(res => res.text())
// .then(text => console.log(text))
// .then(url => console.log(candidate)) 
function fetchCandidates(candidate) {
    return new Promise((resolve, reject) => {
            fetch(candidate)
            .then(response => {
                return response.json();
            })
            .then((candidate) => {
                // console.log(typeof(category))
                var json = String(candidate);
                var parsed = JSON.parse(candidate);
                // console.log(parsed);
                return JSON.parse(candidate);
            })

            .then((candidate) => {
                resolve(candidate);
            })    
    })
}

export default function loadCandidates(){
    let candidateRequest=[]

    return dispatch => {
        dispatch(fetchCandidatesPending());
        return candidates.map((candidate) => {
                candidateRequest.push(fetchCandidates(candidate))
            }),
        Promise.all(candidateRequest)
            .then((allCandidateData)=>{
                return(allCandidateData)
            })
            .then(allCandidateData => {
                dispatch(fetchCandidatesSuccess(allCandidateData))
            })    
            .catch(error => {
                dispatch(fetchCandidatesError(error));
            })         
    }
}

const candidates = [
    "http://165.227.208.228/articles/candidate/Michael%20Bennet",
    "http://165.227.208.228/articles/candidate/Joseph%20R.%20Biden%20Jr.",
    "http://165.227.208.228/articles/candidate/Michael%20R.%20Bloomberg",
    "http://165.227.208.228/articles/candidate/Pete%20Buttigieg",
    "http://165.227.208.228/articles/candidate/Julián%20Castro",
    "http://165.227.208.228/articles/candidate/John%20Delaney",
    "http://165.227.208.228/articles/candidate/Tulsi%20Gabbard",
    "http://165.227.208.228/articles/candidate/Amy%20Klobuchar",
    "http://165.227.208.228/articles/candidate/Bernie%20Sanders",
    "http://165.227.208.228/articles/candidate/Tom%20Steyer",
    "http://165.227.208.228/articles/candidate/Donald%20J.%20Trump",
    "http://165.227.208.228/articles/candidate/Joe%20Walsh",
    "http://165.227.208.228/articles/candidate/Elizabeth%20Warren",
    "http://165.227.208.228/articles/candidate/William%20F.%20Weld",
    "http://165.227.208.228/articles/candidate/Marianne%20Williamson",
    "http://165.227.208.228/articles/candidate/Andrew%20Yang",
];
