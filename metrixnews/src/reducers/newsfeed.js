import {FETCH_ARTICLES_PENDING, FETCH_ARTICLES_SUCCESS, FETCH_ARTICLES_ERROR} from '../actions/index'

const initialState = {
    pending: false,
    articles: [],
    error: null,
}

export default function articlesReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_ARTICLES_PENDING: 
            return {
                ...state,
                pending: true
            }
        case FETCH_ARTICLES_SUCCESS:
            return {
                ...state,
                pending: false,
                articles: action.articles
            }
        case FETCH_ARTICLES_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}

export const getArticles = state => state.articles;
export const getArticlesPending = state => state.pending;
export const getArticlesError = state => state.error;