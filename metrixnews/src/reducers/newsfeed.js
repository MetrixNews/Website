import { combineReducers } from 'redux'

import {
  SELECT_TOPIC,
  REQUEST_ARTICLES,
  RECEIVE_ARTICLES,
  INVALIDATE_TOPIC,
} from '../actions/newsfeed';

function selectedTopic(state = 'reactjs', action) {
  switch (action.type) {
    case SELECT_TOPIC:
      return action.topic
    default:
      return state
  }
}

function articles(
  state = {
    isFetching: false,
    didInvalidate: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case INVALIDATE_TOPIC:
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case REQUEST_ARTICLES:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_ARTICLES:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.articles,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

function articlesByTopic(state = {}, action) {
  switch (action.type) {
    case INVALIDATE_TOPIC:
    case RECEIVE_ARTICLES:
    case REQUEST_ARTICLES:
      return Object.assign({}, state, {
        [action.topic]: articles(state[action.topic], action)
      })
    default:
      return state
  }
}


//Move to ./reducers/index.js
const rootReducer = combineReducers({
  articlesByTopic,
  selectedTopic
})

export default rootReducer