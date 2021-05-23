import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useInjectReducer, useInjectSaga } from 'redux-injectors';
import Page from '../../components/Page';

import Panel from './components/Panel';
import Block from './components/Block';
import City from '../City';

import './style.css';

import { sliceName, reducer, saga, actions } from './slice';
import { selectLoading, selectData } from './selector';

function Forecast() {
  useInjectReducer({ key: sliceName, reducer: reducer });
  useInjectSaga({ key: sliceName, saga: saga });

  const dispatch = useDispatch();

  const loading = useSelector(selectLoading);
  const data = useSelector(selectData);

  const handleSearch = useCallback(
    (woeid, ...rest) => {
      dispatch(actions.search(woeid));
    },
    [dispatch]
  );

  const renderData = () => {
    if (data && data.consolidated_weather) {
      return data.consolidated_weather
        .slice(0, 5)
        .map((weather) => <Block {...weather} />);
    }
    return (
      <>
        <Block />
        <Block />
        <Block />
        <Block />
        <Block />
      </>
    );
  };

  return (
    <Page className='forecast-page'>
      <City onChange={handleSearch} />
      <Panel loading={loading}>{renderData()}</Panel>
    </Page>
  );
}

export default Forecast;
