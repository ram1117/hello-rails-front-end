import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuotes } from '../redux/quotes/quoteSlice';

const Quotes = () => {
  const dispatch = useDispatch();
  const quotes = useSelector((state) => state.quotes.quotes);
  useEffect(() => {
    dispatch(fetchQuotes());
  }, [dispatch]);
  return (
    <>
      {quotes[0] !== undefined && <p>{quotes[0].name}</p>}
    </>
  );
};

export default Quotes;
