import { configureStore } from '@reduxjs/toolkit';
import directorsSlice from './slices/directorsSlice';

const store = configureStore({
  reducer: {
    directors: directorsSlice,
  },
});

export default store;
