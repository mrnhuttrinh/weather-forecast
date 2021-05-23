import './style.css';
import { WEEK_DAYS } from '../../../../constants';

function Block({ applicable_date, min_temp, max_temp }) {
  if (!applicable_date) {
    return (
      <div className='block'>
        <div>__________</div>
        <div>Min: _____</div>
        <div>Max: _____</div>
      </div>
    );
  }
  const date = new Date(applicable_date);
  return (
    <div className='block'>
      <div style={{ textDecoration: 'underline' }}>
        {WEEK_DAYS[date.getDay()]}
      </div>
      <div>Min: {Number(min_temp).toFixed(1)}</div>
      <div>Max: {Number(max_temp).toFixed(1)}</div>
    </div>
  );
}

export default Block;
