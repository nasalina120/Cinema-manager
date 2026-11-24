import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { studiosApi, getErrorMessage } from '../../api';

const STUDIOS_SLICE_NAME = 'studios';

export const fetchStudios = createAsyncThunk(
  `${STUDIOS_SLICE_NAME}/get`,
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await studiosApi.getStudios();
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

const studiosSlice = createSlice({
  name: STUDIOS_SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchStudios.pending, state => {
      state.isFetching = true;
      state.fetchError = null;
    });
    builder.addCase(fetchStudios.fulfilled, (state, { payload }) => {
      state.isFetching = false;
      state.items = payload;
    });
    builder.addCase(fetchStudios.rejected, (state, { payload }) => {
      state.isFetching = false;
      state.fetchError = payload;
    });
  },
});

export const selectStudios = state => state.studios.items;
export const selectIsFetchingStudios = state => state.studios.isFetching;
export const selectFetchStudiosError = state => state.studios.fetchError;

export default studiosSlice.reducer;
