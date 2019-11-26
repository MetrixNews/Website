import fetch from 'cross-fetch'
import {fetchCandidatesPending, fetchCandidatesSuccess, fetchCandidatesError} from '../actions/index';

const candidates = [
    "http://134.209.163.4/articles/category/Bernie%20Sanders",
];

function fetchCandidates(candidate) {
    return new Promise((resolve, reject) => {
            fetch(candidate)
            .then(response => {
                return response.json();
            })
            // .then(res => res.text())
            // .then(text => console.log(text))
            // .then(url => console.log(candidate)) 

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
