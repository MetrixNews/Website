import {FETCH_CANDIDATES_PENDING, FETCH_CANDIDATES_SUCCESS, FETCH_CANDIDATES_ERROR} from '../actions/index'

const initialState = {
    pending: false,
    candidates: [],
    error: null,
}

export default function candidatesReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_CANDIDATES_PENDING: 
            return {
                ...state,
                pending: true
            }
        case FETCH_CANDIDATES_SUCCESS:
            return {
                ...state,
                pending: false,
                candidates: action.candidates
            }
        case FETCH_CANDIDATES_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}

export const getCandidates = state => state.candidates;
export const getCandidatesPending = state => state.pending;
export const getCandidatesError = state => state.error;