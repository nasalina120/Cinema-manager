import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const axiosInstance = axios.create({ baseURL: 'http://localhost:3001/' });

export const getDirectorsThunk = createAsyncThunk(
  'directors',
  async ({ director_ids = [] }, ThunkAPI) => {
    try {
      if (!director_ids.length) {
        return [];
      }

      const { data } = await axiosInstance.get('/directors', {
        params: { id: director_ids },
        paramsSerializer: { indexes: null },
      });

      return data;
    } catch (err) {
      return ThunkAPI.rejectWithValue({ message: err.message });
    }
  }
);

const initialState = {
  directors: [],
  isFetching: false,
  error: null,
};

const directorsSlice = createSlice({
  initialState,
  name: 'directors',
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getDirectorsThunk.pending, state => {
      state.isFetching = true;
      state.error = null;
    });
    builder.addCase(getDirectorsThunk.fulfilled, (state, { payload }) => {
      state.directors = payload;
      state.isFetching = false;
    });
    builder.addCase(getDirectorsThunk.rejected, (state, { payload }) => {
      state.isFetching = false;
      state.error = payload;
    });
  },
});

const { reducers, actions } = directorsSlice;

export default reducers;
