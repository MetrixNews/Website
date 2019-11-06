// import 'babel-polyfill'
// import fetch from 'cross-fetch'

// // { type: 'FETCH_ARTICLES_REQUEST' }
// // { type: 'FETCH_ARTICLES_FAILURE', error= 'Oops' }
// // { type: 'FETCH_ARTICLES_SUCCESS', response= {}}

// export const REQUEST_ARTICLES = 'REQUEST_ARTICLES'
// export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES'
// export const SELECT_CATEGORY = 'SELECT_CATEGORY'
// export const INVALIDATE_CATEGORY = 'INVALIDATE_CATEGORY'

// export const categories = [
//   "Women's Rights",
//   "Voter Rights",
//   "Universal Basic Income",
//   "Trade Wars",
//   "Terrorism",
//   "Taxes",
//   "Prison Reform",
//   "Pollution",
//   "Police Brutality",
//   "Opioid Crisis",
//   "Minimum Wage",
//   "Military",
//   "Marijuana",
//   "LGTBQ+ Rights",
//   "Infrastructure",
//   "Income Inequality",
//   "Impeachment",
//   "Immigration",
//   "Healthcare",
//   "Gun Control and Mass Shootings",
//   "Government Spending",
//   "Energy",
//   "Education",
//   "Economy",
//   "Data Privacy",
//   "College Tuition",
//   "Climate Change",
//   "Border Security",
//   "Agriculture",
//   "Abortion",
//   "2020 Presidental Election"
// ];

// export function selectCategory(category) {
//   return {
//     type: SELECT_CATEGORY,
//     category
//   }
// }

// export function invalidateCategory(category) {
//   return {
//     type: INVALIDATE_CATEGORY,
//     category
//   }
// }

// function requestArticles(category) {
//   return {
//     type: REQUEST_ARTICLES,
//     category
//   }
// }

// function receiveArticles(category, json) {
//   return {
//     type: RECEIVE_ARTICLES,
//     category,
//     articles: json.data.children.map(child => child.data),
//     receivedAt: Date.now()
//   }
// }


// // Meet our first thunk action creator!
// // Though its insides are different, you would use it just like any other action creator:
// // store.dispatch(fetchPosts('reactjs'))

// function fetchArticles(category) {
//   return dispatch => {
//     dispatch(requestArticles(category))
//     return fetch(`134.209.163.4/articles/category/${categories}.json`)
//       .then(response => response.json())
//       .then(json => dispatch(receiveArticles(category, json)))
//   }
// }

//   function shouldFetchArticles(state, category) {
//     const articles = state.articlesByCategory[category]
//     if (!articles) {
//       return true
//     } else if (articles.isFetching) {
//       return false
//     } else {
//       return articles.didInvalidate
//     }
//   }
  
//   export function fetchArticlesIfNeeded(category) {
//     // Note that the function also receives getState()
//     // which lets you choose what to dispatch next.
  
//     // This is useful for avoiding a network request if
//     // a cached value is already available.
  
//     return (dispatch, getState) => {
//       if (shouldFetchArticles(getState(), category)) {
//         // Dispatch a thunk from thunk!
//         return dispatch(fetchArticles(category))
//       } else {
//         // Let the calling code know there's nothing to wait for.
//         return Promise.resolve()
//       }
//     }
//   }