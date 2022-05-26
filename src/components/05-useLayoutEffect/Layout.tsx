import { useLayoutEffect, useRef, useState } from 'react';
import useCounter from '@/hooks/useCounter';
import useFetch from '@/hooks/useFetch';
import type { Quote, QuoteResponse } from '@/shared/types';

import './layout.scss';

const baseUrl = 'https://www.breakingbadapi.com/api';
const quoteById = '/quotes';

const Layout = () => {
  const pTagRef = useRef<HTMLParagraphElement>(null);
  const [boxSize, setBoxSize] = useState<DOMRect>();
  const { state: counter, increment, decrement, reset } = useCounter(1);
  const { data, loading } = useFetch(
    `${baseUrl}${quoteById}/${counter}`
  ) as QuoteResponse;
  const { quote } = (!(data === null || data === undefined) &&
    data[0]) as Quote;

  const handleIncrement = () => {
    increment(2);
  };
  const handleDecrement = () => {
    decrement(4);
  };

  useLayoutEffect(() => {
    setBoxSize(pTagRef.current?.getBoundingClientRect());
  }, [quote]);

  return (
    <div className="col-lg-4 p-2 border border-3 border-info rounded-3">
      <div className="r_layout__container ">
        <h1>Layout Effect!!</h1>
        <h3>Breaking Bad Quotes</h3>

        {loading && (
          <div className="alert alert-info text-center">Loading...</div>
        )}

        <blockquote className="blockquote text-end">
          <p ref={pTagRef} className="mb-3">
            {quote}
          </p>
        </blockquote>

        <pre>{JSON.stringify(boxSize, null, 3)}</pre>

        <button
          type="button"
          className={`btn btn-primary ${counter === 1 ? 'disabled' : ''}`}
          onClick={handleDecrement}>
          Last Quote
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleIncrement}>
          Next Quote
        </button>
        <button
          type="button"
          className={`btn btn-primary ${counter === 1 ? 'disabled' : ''}`}
          onClick={reset}>
          First Quote
        </button>
      </div>
    </div>
  );
};

export default Layout;
