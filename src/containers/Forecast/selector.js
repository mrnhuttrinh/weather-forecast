import { createSelector } from 'reselect';

import { sliceName } from './slice';

const forecastStore = (store) => store[sliceName];

export const selectLoading = createSelector(forecastStore, (state) =>
  state ? state.loading : false
);

export const selectData = createSelector(forecastStore, (state) =>
  state ? state.data : null
);

export const selectError = createSelector(forecastStore, (state) =>
  state ? state.error : false
);
