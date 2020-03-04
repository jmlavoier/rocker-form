import { combineReducers, createStore } from 'redux';

import form from './formState/reducer';

const reducers = combineReducers({
  form,
});

const store = createStore(reducers);

export default store;
