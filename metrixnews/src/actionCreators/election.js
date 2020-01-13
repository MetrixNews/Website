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
    "http://134.209.163.4/articles/candidate/Michael%20Bennet",
    "http://134.209.163.4/articles/candidate/Joseph%20R.%20Biden%20Jr.",
    "http://134.209.163.4/articles/candidate/Michael%20R.%20Bloomberg",
    "http://134.209.163.4/articles/candidate/Pete%20Buttigieg",
    "http://134.209.163.4/articles/candidate/Julián%20Castro",
    "http://134.209.163.4/articles/candidate/John%20Delaney",
    "http://134.209.163.4/articles/candidate/Tulsi%20Gabbard",
    "http://134.209.163.4/articles/candidate/Amy%20Klobuchar",
    "http://134.209.163.4/articles/candidate/Bernie%20Sanders",
    "http://134.209.163.4/articles/candidate/Tom%20Steyer",
    "http://134.209.163.4/articles/candidate/Donald%20J.%20Trump",
    "http://134.209.163.4/articles/candidate/Joe%20Walsh",
    "http://134.209.163.4/articles/candidate/Elizabeth%20Warren",
    "http://134.209.163.4/articles/candidate/William%20F.%20Weld",
    "http://134.209.163.4/articles/candidate/Marianne%20Williamson",
    "http://134.209.163.4/articles/candidate/Andrew%20Yang",
];
