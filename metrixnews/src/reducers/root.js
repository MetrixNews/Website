import { combineReducers } from 'redux';

import NewsfeedReducer from '../reducers/newsfeed';
import ElectionReducer from '../reducers/election';
import { reducer as formReducer } from 'redux-form';


const RootReducer = combineReducers({
    newsfeed: NewsfeedReducer,
    election: ElectionReducer,
    form: formReducer,
  })

  export default RootReducer;
