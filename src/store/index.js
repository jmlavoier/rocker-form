import { combineReducers, createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';

import api from '~/api';
import form from './formState/reducer';
import countries from './countriesState/reducer';

const reducers = combineReducers({
  form,
  countries,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['form'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(
  persistedReducer,
  applyMiddleware(thunk.withExtraArgument(api)),
);
export const persistor = persistStore(store);
