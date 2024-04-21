import { useEffect } from 'react';

import QuoteList from '../components/quotes/QuoteList.jsx';
import LoadingSpinner from '../components/UI/LoadingSpinner.jsx';
import NoQuotesFound from '../components/quotes/NoQuotesFound.jsx';
import useHttp from '../hooks/use-http.jsx';
import { getAllQuotes } from '../lib/api.jsx';

const AllQuotes = () => {
  const { sendRequest, status, data: loadedQuotes, error } = useHttp(
    getAllQuotes,
    true
  );

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === 'pending') {
    return (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className='centered focused'>{error}</p>;
  }

  if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <NoQuotesFound />;
  }

  return <QuoteList quotes={loadedQuotes} />;
};

export default AllQuotes;
