// import 'babel-polyfill'
// import fetch from 'cross-fetch'

// { type: 'FETCH_ARTICLES_REQUEST' }
// { type: 'FETCH_ARTICLES_FAILURE', error= 'Oops' }
// { type: 'FETCH_ARTICLES_SUCCESS', response= {}}

export const SELECT_TOPIC = 'SELECT_TOPIC'

export function selectTopic(topic) {
  return {
    type: SELECT_TOPIC,
    topic
  }
}

export const INVALIDATE_TOPIC = 'INVALIDATE_TOPIC'

export function invalidateTopic(topic) {
  return {
    type: INVALIDATE_TOPIC,
    topic
  }
}

export const REQUEST_ARTICLES = 'REQUEST_ARTICLES'

function requestArticles(topic) {
  return {
    type: REQUEST_ARTICLES,
    topic
  }
}

export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES'

function receiveArticles(topic, json) {
  return {
    type: RECEIVE_ARTICLES,
    topic,
    articles: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

// Meet our first thunk action creator!
// Though its insides are different, you would use it just like any other action creator:
// store.dispatch(fetchPosts('reactjs'))

export function fetchArticles(topic) {
    // Thunk middleware knows how to handle functions.
    // It passes the dispatch method as an argument to the function,
    // thus making it able to dispatch actions itself.
  
    return function(dispatch) {
      // First dispatch: the app state is updated to inform
      // that the API call is starting.
  
      dispatch(requestArticles(topic))
  
      // The function called by the thunk middleware can return a value,
      // that is passed on as the return value of the dispatch method.
  
      // In this case, we return a promise to wait for.
      // This is not required by thunk middleware, but it is convenient for us.
  
      return fetch(`https://www.reddit.com/r/${topic}.json`)
        .then(
          response => response.json(),
          // Do not use catch, because that will also catch
          // any errors in the dispatch and resulting render,
          // causing a loop of 'Unexpected batch number' errors.
          // https://github.com/facebook/react/issues/6895
          error => console.log('An error occurred.', error)
        )
        .then(json =>
          // We can dispatch many times!
          // Here, we update the app state with the results of the API call.
  
          dispatch(receiveArticles(topic, json))
        )
    }
  }

  function shouldFetchArticles(state, topic) {
    const articles = state.articlesByTopic[topic]
    if (!articles) {
      return true
    } else if (articles.isFetching) {
      return false
    } else {
      return articles.didInvalidate
    }
  }
  
  export function fetchArticlesIfNeeded(topic) {
    // Note that the function also receives getState()
    // which lets you choose what to dispatch next.
  
    // This is useful for avoiding a network request if
    // a cached value is already available.
  
    return (dispatch, getState) => {
      if (shouldFetchArticles(getState(), topic)) {
        // Dispatch a thunk from thunk!
        return dispatch(fetchArticles(topic))
      } else {
        // Let the calling code know there's nothing to wait for.
        return Promise.resolve()
      }
    }
  }