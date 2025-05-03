import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getGenre } from "../../api/movie";

const initialState = {
  data: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: null,
};

const getGenresThunk = createAsyncThunk(
  "GET_GENRES",
  async (_, { rejectWithValue }) => {
    try {
      const res = await getGenre();
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const data = await res.json();
      return data;
    } catch (error) {
      if (error instanceof Error) return rejectWithValue(error);
      return error;
    }
  }
);

const genreSlice = createSlice({
  name: "genres",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getGenresThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.error = null;
      })
      .addCase(getGenresThunk.rejected, (state, { payload, error }) => {
        state.isLoading = false;
        state.isError = true;
        state.error = payload || error;
      })
      .addCase(getGenresThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = payload;
      });
  },
});

export const genresAction = {
  ...genreSlice.actions,
  getGenresThunk,
};

export default genreSlice.reducer;
