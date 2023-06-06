import { configureStore } from '@reduxjs/toolkit';
import quoteSlice from './quotes/quoteSlice';

const store = configureStore({
  reducer: {
    quotes: quoteSlice,
  },
});

export default store;
