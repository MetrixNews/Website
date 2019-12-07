import { combineReducers } from 'redux';

import NewsfeedReducer from '../reducers/newsfeed';
import ElectionReducer from '../reducers/election';

const RootReducer = combineReducers({
    NewsfeedReducer,
    ElectionReducer
  })

  export default RootReducer;
