import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { selectTopic, fetchArticles, fetchArticlesIfNeeded } from './actions/newsfeed'
import { Provider } from 'react-redux'
import rootReducer from './reducers/newsfeed'
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss';

const loggerMiddleware = createLogger()

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )
)

store.dispatch(selectTopic('reactjs'))
store.dispatch(fetchArticles('reactjs')).then(() => console.log(store.getState()))
store
  .dispatch(fetchArticlesIfNeeded('reactjs'))
  .then(() => console.log(store.getState()))

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();