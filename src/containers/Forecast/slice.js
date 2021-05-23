import { createSlice } from '@reduxjs/toolkit';
import { put, call } from 'redux-saga/effects';
import { createSliceSaga, SagaType } from 'redux-toolkit-saga';

import { getForecastByWoeid } from '../../services';

const sliceName = 'forecast';

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const forecastSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    setLoading: (state, action) => ({
      ...state,
      loading: true,
      data: null,
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
      data: null,
      error: action.payload,
    }),
  },
});

const { actions: reducerActions, reducer } = forecastSlice;

const forecastStore = (store) => store[sliceName];

const forecastSliceSaga = createSliceSaga({
  name: sliceName,
  caseSagas: {
    *search({ payload }) {
      try {
        if (payload) {
          yield put(reducerActions.setLoading());
          const forecast = yield call(getForecastByWoeid, payload);
          yield put(reducerActions.setData(forecast));
        } else {
          yield put(reducerActions.setData(null));
        }
      } catch (error) {
        yield put(reducerActions.setError(error));
      }
    },
  },

  sagaType: SagaType.TakeLatest,
});

const { saga, actions: sagaActions } = forecastSliceSaga;

const actions = { ...reducerActions, ...sagaActions };

export {
  initialState,
  sliceName,
  actions,
  reducer,
  saga,
  forecastStore,
  forecastSliceSaga,
};
