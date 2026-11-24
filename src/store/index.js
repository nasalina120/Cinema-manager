import { configureStore } from '@reduxjs/toolkit';
import directorsSlice from './slices/directorsSlice';
import studiosReducer from './slices/studiosSlice';

const store = configureStore({
  reducer: {
    directors: directorsSlice,
    studios: studiosReducer,
  },
});

export default store;
