import './style.css';

function Page({ children, ...rest }) {
  return (
    <div className='page' {...rest}>
      {children}
    </div>
  );
}

export default Page;
