import { combineReducers } from '@reduxjs/toolkit';

import {
  sliceName as citySliceName,
  reducer as cityReducer,
} from '../containers/City/slice';

export default function createReducer(injectedReducers = {}) {
  return combineReducers({
    ...injectedReducers,
    [citySliceName]: cityReducer,
  });
}
