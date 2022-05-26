import useCounter from '@/hooks/useCounter';
import useFetch from '@/hooks/useFetch';
import type { Quote, QuoteResponse } from '@/shared/types';

const baseUrl = 'https://www.breakingbadapi.com/api';
const quoteById = '/quotes';

const MultipleCustomHook = () => {
  const { state: counter, increment, decrement, reset } = useCounter(1);
  const { data, loading } = useFetch(
    `${baseUrl}${quoteById}/${counter}`
  ) as QuoteResponse;
  const { author, quote } = (!(data === null || data === undefined) &&
    data[0]) as Quote;

  const handleIncrement = () => {
    increment(2);
  };
  const handleDecrement = () => {
    decrement(4);
  };

  return (
    <div className="col-lg-4 p-2 border border-3 border-info rounded-3">
      <h1>Custom Hooks!!</h1>
      <h3>Breaking Bad Quotes</h3>

      {loading
        ? (
          <div className="alert alert-info text-center">Loading...</div>
        )
        : (
          <blockquote className="blockquote text-end">
            <p className="mb-3">{quote}</p>
            <footer className="blockquote-footer">{author}</footer>
          </blockquote>
        )}

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
  );
};

export default MultipleCustomHook;
