import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { createInjectorsEnhancer } from 'redux-injectors';

import createReducer from './rootReducer';

const sagaMiddleware = createSagaMiddleware({});

const injectorEnhancer = createInjectorsEnhancer({
  createReducer,
  runSaga: sagaMiddleware.run,
});

export default configureStore({
  reducer: createReducer(),
  middleware: [sagaMiddleware],
  enhancers: [injectorEnhancer],
});
