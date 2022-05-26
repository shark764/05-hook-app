import { useEffect, useRef, useState } from 'react';
import type { ResponseState } from '@/shared/types';

const initialState: ResponseState = {
  data: null,
  loading: true,
  error: null,
};

const useFetch = (url: string) => {
  const isMounted = useRef<boolean>(true);
  const [state, setState] = useState<ResponseState>(initialState);
  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setState(initialState);
    fetch(url)
      // eslint-disable-next-line @typescript-eslint/promise-function-async
      .then((res) => res.json())
      .then((data: unknown[]) => {
        setTimeout(() => {
          if (isMounted.current) {
            setState({
              loading: false,
              error: null,
              data,
            });
          } else {
            console.log(
              '%csetState was prevented since component is unmounted',
              'color:#667b96;'
            );
          }
        }, 2000);
      })
      .catch((error: Error) => {
        if (isMounted.current) {
          setState({
            loading: false,
            error,
            data: null,
          });
        }
      });

    return () => {};
  }, [url]);

  return state;
};

export default useFetch;
