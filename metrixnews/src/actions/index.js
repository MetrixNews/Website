// Fetch Articles
export const FETCH_ARTICLES_PENDING = 'FETCH_ARTICLES_PENDING';
// export const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS';
// export const FETCH_ARTICLES_ERROR = 'FETCH_ARTICLES_ERROR';

export const FETCH_CATEGORIES_PENDING = 'FETCH_CATEGORIES_PENDING';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_ERROR = 'FETCH_CATEGORIES_ERROR';


export function fetchArticlesPending() {
    return {
        type: FETCH_ARTICLES_PENDING
    }
}

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



// ARTICLE_BIAS_PLACEMENT (left center right)
// translate metrics into pics

// ARTICLE_EMOTION_FILTER
// ARTICLE_BIAS_FILTER
// ARTICLE_SENTIMENT_FILTER



