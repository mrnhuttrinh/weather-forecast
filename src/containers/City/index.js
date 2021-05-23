import { useRef } from 'react';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import { useDispatch, useSelector } from 'react-redux';

import { useInjectReducer, useInjectSaga } from 'redux-injectors';

import { sliceName, reducer, saga, actions } from './slice';
import { selectLoading, selectData } from './selector';

function City({ onChange }) {
  useInjectReducer({ key: sliceName, reducer: reducer });
  useInjectSaga({ key: sliceName, saga: saga });

  const ref = useRef({ timeout: null });
  const dispatch = useDispatch();

  const loading = useSelector(selectLoading);
  const data = useSelector(selectData);

  const handleSearch = (city) => {
    if (city) {
      // debouce
      if (ref.current.timeout) {
        clearTimeout(ref.current.timeout);
      }
      ref.current.timeout = setTimeout(() => {
        dispatch(actions.search(city));
      }, 300);
    }
  };

  const handleOnChange = (option) => {
    if (onChange) {
      if (option && option.length) {
        onChange(option[0].id);
      } else {
        onChange(null);
      }
    }
  };

  return (
    <AsyncTypeahead
      clearButton
      id='id'
      labelKey='label'
      onSearch={handleSearch}
      options={data.map((da) => ({ id: da.woeid, label: da.title }))}
      placeholder='Search...'
      isLoading={loading}
      style={{
        width: 200,
      }}
      onChange={handleOnChange}
    />
  );
}

export default City;
