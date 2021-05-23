import { createSlice } from '@reduxjs/toolkit';
import { put, call } from 'redux-saga/effects';
import { createSliceSaga, SagaType } from 'redux-toolkit-saga';

import { findCity } from '../../services';

const sliceName = 'city';

const initialState = {
  loading: false,
  data: [],
  error: null,
};

const citySlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    setLoading: (state, action) => ({
      ...state,
      loading: true,
      data: [],
      error: null,
    }),
    setData: (state, action) => ({
      ...state,
      loading: false,
      data: action.payload,
      error: null,
    }),
    setError: (state, action) => ({
      ...state,
      loading: false,
      data: [],
      error: action.payload,
    }),
  },
});

const { actions: reducerActions, reducer } = citySlice;

const cityStore = (store) => store[sliceName];

const citySliceSaga = createSliceSaga({
  name: sliceName,
  caseSagas: {
    *search({ payload }) {
      try {
        yield put(reducerActions.setLoading());
        const citys = yield call(findCity, payload);
        yield put(reducerActions.setData(citys));
      } catch (error) {
        yield put(reducerActions.setError(error));
      }
    },
  },

  sagaType: SagaType.TakeLatest,
});

const { saga, actions: sagaActions } = citySliceSaga;

const actions = { ...reducerActions, ...sagaActions };

export {
  initialState,
  sliceName,
  actions,
  reducer,
  saga,
  cityStore,
  citySliceSaga,
};
