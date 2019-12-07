//Fetch Categories from MetrixAPI
export const FETCH_CATEGORIES_PENDING = 'FETCH_CATEGORIES_PENDING';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_ERROR = 'FETCH_CATEGORIES_ERROR';


export function fetchCategoriesPending() {
    return {
        type: FETCH_CATEGORIES_PENDING
    }
}

export function fetchCategoriesSuccess(categories) {
    return {
        type: FETCH_CATEGORIES_SUCCESS,
        categories: categories
    }
}

export function fetchCategoriesError(error) {
    return {
        type: FETCH_CATEGORIES_ERROR,
        error: error
    }
}

//Fetch Candidates from MetrixAPI
export const FETCH_CANDIDATES_PENDING = 'FETCH_CANDIDATES_PENDING';
export const FETCH_CANDIDATES_SUCCESS = 'FETCH_CANDIDATES_SUCCESS';
export const FETCH_CANDIDATES_ERROR = 'FETCH_CANDIDATES_ERROR';


export function fetchCandidatesPending() {
    return {
        type: FETCH_CANDIDATES_PENDING
    }
}

export function fetchCandidatesSuccess(candidates) {
    return {
        type: FETCH_CANDIDATES_SUCCESS,
        candidates: candidates
    }
}

export function fetchCandidatesError(error) {
    return {
        type: FETCH_CANDIDATES_ERROR,
        error: error
    }
}