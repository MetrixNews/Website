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
    "https://165.227.208.228/articles/candidate/Michael%20Bennet",
    "https://165.227.208.228/articles/candidate/Joseph%20R.%20Biden%20Jr.",
    "https://165.227.208.228/articles/candidate/Michael%20R.%20Bloomberg",
    "https://165.227.208.228/articles/candidate/Pete%20Buttigieg",
    "https://165.227.208.228/articles/candidate/Julián%20Castro",
    "https://165.227.208.228/articles/candidate/John%20Delaney",
    "https://165.227.208.228/articles/candidate/Tulsi%20Gabbard",
    "https://165.227.208.228/articles/candidate/Amy%20Klobuchar",
    "https://165.227.208.228/articles/candidate/Bernie%20Sanders",
    "https://165.227.208.228/articles/candidate/Tom%20Steyer",
    "https://165.227.208.228/articles/candidate/Donald%20J.%20Trump",
    "https://165.227.208.228/articles/candidate/Joe%20Walsh",
    "https://165.227.208.228/articles/candidate/Elizabeth%20Warren",
    "https://165.227.208.228/articles/candidate/William%20F.%20Weld",
    "https://165.227.208.228/articles/candidate/Marianne%20Williamson",
    "https://165.227.208.228/articles/candidate/Andrew%20Yang",
];
