export interface ResponseState {
  data?: unknown[] | null;
  loading: boolean;
  error?: Error | null;
}

export interface Quote {
  author: string;
  quote: string;
}

export interface QuoteResponse extends ResponseState {
  data?: Quote[];
}
