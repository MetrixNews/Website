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
    "https://api.metrix.news/articles/candidate/Joseph%20R.%20Biden%20Jr.",
    "https://api.metrix.news/articles/candidate/Michael%20R.%20Bloomberg",
    "https://api.metrix.news/articles/candidate/Pete%20Buttigieg",
    "https://api.metrix.news/articles/candidate/Tulsi%20Gabbard",
    "https://api.metrix.news/articles/candidate/Amy%20Klobuchar",
    "https://api.metrix.news/articles/candidate/Bernie%20Sanders",
    "https://api.metrix.news/articles/candidate/Tom%20Steyer",
    "https://api.metrix.news/articles/candidate/Donald%20J.%20Trump",
    "https://api.metrix.news/articles/candidate/Elizabeth%20Warren",
    "https://api.metrix.news/articles/candidate/William%20F.%20Weld",

];
