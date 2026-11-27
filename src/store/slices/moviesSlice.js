import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getErrorMessage from '../../api/getErrorMessage';
import {getMovies, createMovie} from '../../api/moviesAPI';

export const fetchMovies = createAsyncThunk(
  `movies/get`,
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getMovies();
      return data;
    } catch (error) {
      return rejectWithValue(getErrorMessage(error));
    }
  }
);

const initialState = {
  items: [],
  isFetching: false,
  fetchError: null,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchMovies.pending, state => {
      state.isFetching = true;
      state.fetchError = null;
    });
    builder.addCase(fetchMovies.fulfilled, (state, { payload }) => {
      state.isFetching = false;
      state.items = payload;
    });
    builder.addCase(fetchMovies.rejected, (state, { payload }) => {
      state.isFetching = false;
      state.fetchError = payload;
    });
  },
});

export const selectMovies = state => state.movies.items;
export const selectIsFetchingMovies = state => state.movies.isFetching;
export const selectFetchMoviesError = state => state.movies.fetchError;

export default moviesSlice.reducer;