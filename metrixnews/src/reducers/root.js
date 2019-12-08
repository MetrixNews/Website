import { combineReducers } from 'redux';

import NewsfeedReducer from '../reducers/newsfeed';
import ElectionReducer from '../reducers/election';

const RootReducer = combineReducers({
    newsfeed: NewsfeedReducer,
    election: ElectionReducer
  })

  export default RootReducer;
