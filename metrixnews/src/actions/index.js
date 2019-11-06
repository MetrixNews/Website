// Fetch Articles
export const FETCH_ARTICLES_PENDING = 'FETCH_ARTICLES_PENDING';
export const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS';
export const FETCH_ARTICLES_ERROR = 'FETCH_ARTICLES_ERROR';

function FETCH_ARTICLES_PENDING() {
    return {
        type: FETCH_ARTICLES_PENDING
    }
}

function FETCH_ARTICLES_SUCCESS(articles) {
    return {
        type: FETCH_ARTICLES_SUCCESS,
        articles: articles
    }
}

function FETCH_ARTICLES_ERROR(error) {
    return {
        type: FETCH_ARTICLES_ERROR,
        error: error
    }
}

// ARTICLE_BIAS_PLACEMENT (left center right)
// translate metrics into pics

// ARTICLE_EMOTION_FILTER
// ARTICLE_BIAS_FILTER
// ARTICLE_SENTIMENT_FILTER



