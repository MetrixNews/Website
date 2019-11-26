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


// Fetch Articles
// export const FETCH_ARTICLES_PENDING = 'FETCH_ARTICLES_PENDING';
// export const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS';
// export const FETCH_ARTICLES_ERROR = 'FETCH_ARTICLES_ERROR';

// export function fetchArticlesPending() {
//     return {
//         type: FETCH_ARTICLES_PENDING
//     }
// }

// export function fetchArticlesSuccess(articles) {
//     return {
//         type: FETCH_ARTICLES_SUCCESS,
//         articles: articles
//     }
// }

// export function fetchArticlesError(error) {
//     return {
//         type: FETCH_ARTICLES_ERROR,
//         error: error
//     }
// }







