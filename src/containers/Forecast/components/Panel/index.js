import { Spinner } from 'react-bootstrap';
import './style.css';

function Panel({ children, loading = false }) {
  return (
    <div className='panel'>
      {children}
      {loading && (
        <div className='page__loading'>
          <Spinner animation='border' role='status'>
            <span className='sr-only'>Loading...</span>
          </Spinner>
        </div>
      )}
    </div>
  );
}

export default Panel;
